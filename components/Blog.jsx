import BlogItem from "./BlogItem";

export default function Blog(props) {
  return (
    <>
      <div className="mt-3 pt-3">
        <h1 className="display-5 text-uppercase">Blog</h1>
        <p className="mb-0">
          In this section you will find some blogs of mine.
        </p>
      </div>
      <div className="row d-flex justify-content-between my-4">
        {props.posts.map((post, index) => (
          <BlogItem
            key={index}
            index={post.frontmatter.index}
            url={post.slug}
            title={post.frontmatter.title}
            desc={post.frontmatter.desc}
          />
        ))}
      </div>
    </>
  );
}
