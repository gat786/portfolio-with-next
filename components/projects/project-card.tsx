import React from "react";
import { FrontMatter } from "../../pages/projects";
import Image from "next/image";

export default function ProjectCard(props: { projectInfo: FrontMatter }) {
  const frontMatter = props.projectInfo;
  return (
    <div className="bg-white dark:bg-gray-800 text-white h-96 w-72 rounded-xl">
      <div className="h-48 relative">
        <Image
          className=" rounded-t-lg"
          layout="fill"
          objectFit="cover"
          src={frontMatter?.coverImage ?? ""}
          alt=""
        />
      </div>
      <div className="">{frontMatter.title}</div>
      <div className="">{frontMatter.author}</div>
      <div>{frontMatter.date}</div>
      <div>{frontMatter.tags?.map((tag) => tag.toString())}</div>
    </div>
  );
}
