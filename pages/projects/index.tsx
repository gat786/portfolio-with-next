import path from "path";
import fs from "fs";
import matter from "gray-matter";

import React from "react";

export type Projects = {
  slug: string;
  frontMatter: any;
};

export default function Projects(props: { projects: Projects[] }) {
  return (
    <div>
      {props.projects.map((project) => {
        console.log(project.frontMatter);

        return <div key={project.slug}>{project.slug}</div>;
      })}
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("markdown/projects"));

  // Get slugs and frontmatter from the posts
  const projects = files.map((file) => {
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

  //   console.log(projects);

  return {
    props: {
      projects,
    },
  };
}
