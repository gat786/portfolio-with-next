import React from "react";
import { FrontMatter } from "../../pages/projects";
import Image from "next/image";

import styles from "../components.module.scss";

export default function ProjectCard(props: { projectInfo: FrontMatter }) {
  const frontMatter = props.projectInfo;
  return (
    <div className={`bg-white dark:bg-gray-700 flex flex-col gap-2 border dark:text-white h-96 w-72 rounded-xl`}>
      <div className="h-48 relative">
        <Image
          className=" rounded-t-lg"
          layout="fill"
          objectFit="cover"
          src={frontMatter?.coverImage ?? ""}
          alt=""
        />
      </div>
      <div className="text-2xl font-bold mx-4">{frontMatter.title}</div>
      <div className="mx-4">{frontMatter.author}</div>
      <div className="mx-4 text-sm">{frontMatter.date}</div>
      <div className="mx-4 text-sm text-gray-700 dark:text-gray-300 flex flex-row flex-wrap gap-x-2">
        {frontMatter.tags?.map((tag) => (
          <div className="underline" key={tag}>{tag.toString()}</div>
        ))}
      </div>
    </div>
  );
}
