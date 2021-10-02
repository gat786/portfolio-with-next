import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import { FrontMatter } from ".";
import NavBar from "../../components/NavBar";

export default function ProjectDetails(args: {
  frontMatter: string;
  slug: string;
  markdown: string;
}) {
  return (
    <>
      <NavBar />
      <div className="">
        <div>{args.markdown}</div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("markdown/projects"));

  const paths = files.map((file) => {
    return {
      params: {
        slug: file.replace(".md", ""),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(args: { params: { slug: string } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("markdown/projects", args.params.slug + ".md")
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);

  const markdown = marked(content);

  return {
    props: {
      frontMatter,
      slug: args.params.slug,
      markdown,
    },
  };
}
