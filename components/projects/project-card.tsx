import React from "react";
import { FrontMatter } from "../../pages/projects";
import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/components.module.css";
import config from "../../config";

export default function ProjectCard(props: {
  projectInfo: FrontMatter;
  slug: string;
}) {
  const frontMatter = props.projectInfo;

  return (
    <Link href={`/projects/${props.slug}`}>
      <a
        className={`bg-white dark:bg-gray-700 dark:text-white h-96 w-72 rounded-xl flex flex-col gap-2 border dark:border-gray-500`}
      >
        <div className="h-48 relative">
          <Image
            className=" rounded-t-lg"
            layout="fill"
            objectFit="cover"
            src={config.ASSETS + `${frontMatter?.coverImage}`}
            alt=""
          />
        </div>
        <div className="text-2xl font-bold mx-4 overflow-ellipsis overflow-hidden whitespace-nowrap">
          {frontMatter.title}
        </div>
        <div className="mx-4">{frontMatter.author}</div>
        <div className="mx-4 text-sm">
          Posted on - {new Date(frontMatter.createdOn as string).toLocaleDateString()}
        </div>
        <div className="mx-4 text-sm text-gray-700 dark:text-gray-300 flex flex-row flex-wrap gap-x-2">
          Tags - {frontMatter.tags?.map((tag) => (
            <div
              className="underline dark:hover:text-white hover:text-black cursor-pointer"
              key={tag}
            >
              {tag.toString()}
            </div>
          ))}
        </div>
      </a>
    </Link>
  );
}
