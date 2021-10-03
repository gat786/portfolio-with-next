import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";

import React from "react";
import Image from "next/image";

import { FrontMatter } from ".";
import NavBar from "../../components/NavBar";
import Head from "next/head";

export default function ProjectDetails(args: {
  frontMatter: FrontMatter;
  slug: string;
  markdown: string;
}) {
  return (
    <>
      <Head>
        <meta title={args.frontMatter.title}/>
      </Head>
      <NavBar />
      <div className="flex flex-col items-center">
        <div className="md:w-2/4">
          <div className="relative h-80 my-8">
            <Image
              src={args.frontMatter?.coverImage ?? ""}
              objectFit="cover"
              layout="fill"
              alt={`${args.slug} Cover Image`}
            />
          </div>
          <div
            className="prose dark:prose-dark"
            dangerouslySetInnerHTML={{ __html: args.markdown }}
          ></div>
        </div>
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
