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
  console.log(args.frontMatter);

  return (
    <>
      <Head>
        <title>{args.frontMatter.title}</title>
        <meta title={args.frontMatter.title} />
      </Head>
      <NavBar />
      <div className="flex flex-col items-center">
        <div className="relative h-80 lg:h-96 mbe-8 w-full lg:w-2/4">
          <Image
            src={args.frontMatter?.coverImage ?? ""}
            objectFit="contain"
            layout="fill"
            alt={`${args.slug} Cover Image`}
          />
        </div>
        <div className="w-11/12 lg:w-2/4">
          <div className="flex gap-4 mlb-8 font-semibold">
            <span>Posted Date - {args.frontMatter.date}</span>
            <span>Author Name - {args.frontMatter.author}</span>
          </div>
          <div
            className="prose-xl dark:prose-dark mlb-8 mbe-16"
            dangerouslySetInnerHTML={{ __html: args.markdown }}
          ></div>

          {/* <div>{args.frontMatter.tags?.map((tag) => tag.toString)}</div> */}
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
