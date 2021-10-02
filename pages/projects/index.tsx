import path from "path";
import fs from "fs";
import matter from "gray-matter";

import React from "react";
import Head from "next/head";
import NavBar from "../../components/NavBar";
import ProjectCard from "../../components/projects/project-card";

export type Projects = {
  slug: string;
  frontMatter: FrontMatter;
};

export type FrontMatter = {
  title: string;
  date?: string;
  author?: string;
  tags?: string[];
  coverImage?: string;
};

export default function Projects(props: { projects: Projects[] }) {
  return (
    <div className="flex flex-col items-center h-full">
      <Head>
        <title>Projects Gallery</title>
        <meta
          name="description"
          content="List of projects made by Ganesh and his fellow mates"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className="w-full lg:w-11/12 m-8 flex justify-center gap-4 flex-wrap">
        {props.projects.map((project) => {
          return (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              projectInfo={project.frontMatter}
            />
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("markdown/projects"));

  // Get slugs and frontmatter from the posts
  let projects = files.map((file) => {
    // Get Slug from the markdown file
    const slug = file.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("markdown/projects", file),
      "utf-8"
    );

    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      slug,
      frontMatter,
    };
  });

  return {
    props: {
      projects,
    },
  };
}
