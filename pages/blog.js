import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Blog from "@/components/Blog";

export default function BlogPage({ blogPosts }) {
  return (
    <>
      <div className="container">
        <Blog posts={blogPosts} />
      </div>
    </>
  );
}
export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  const blogPosts = posts;

  return {
    props: {
      blogPosts,
    },
  };
}
