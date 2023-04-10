import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { Card, Col, Text } from "@nextui-org/react";

export default function PostPage({ frontmatter: { title, index }, content }) {
  return (
    <>
      <div className="container">
        <Card
          css={{ w: "100%", h: "300px" }}
          style={{ backgroundColor: "inherit" }}
          className="border border-dark rounded-0"
        >
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col className="my-3 py-5 px-3">
              <Text size={16} transform="uppercase" className="col-5">
                0{index}
              </Text>
              <Text h1 className="display-3">
                Blog {index}
              </Text>
              <Text size={16} className="col-5">
                by Pragya Prateek
              </Text>
            </Col>
          </Card.Header>
        </Card>
        <div
          className="my-5 pb-5 text-black"
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        ></div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
