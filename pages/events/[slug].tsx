import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

import React from "react";
import Image from "next/image";

import { EventsFrontMatter } from ".";
import NavBar from "../../components/NavBar";
import Head from "next/head";
import Footer from "../../components/Footer";
import config from "../../config";
import { format } from "date-fns";

export default function EventDetails(args: {
  frontMatter: EventsFrontMatter;
  slug: string;
  markdown: string;
}) {
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
            src={config.ASSETS + `${args?.frontMatter?.coverImage}`}
            objectFit="contain"
            layout="fill"
            alt={`${args.slug} Cover Image`}
          />
        </div>
        <h2 className="text-xl">
            {args.frontMatter.title}
        </h2>
        <div className="flex flex-col gap-1 mlb-4 font-light text-sm lg:text-base dark:text-slate-400 text-center">
            <span>Date - {
                format(
                    new Date(args.frontMatter.organisedOn as string),
                    "PPPP"
                )
            }</span>
            <span>Organisers - {args.frontMatter.organisers}</span>
        </div>
        <div className="w-11/12 lg:w-2/4">
          <div
            className="prose-xl dark:prose-dark mlb-8 mbe-16"
            dangerouslySetInnerHTML={{ __html: args.markdown }}
          ></div>

          <div className="flex flex-wrap gap-4 mlb-12">
            Tags -
            {args?.frontMatter.tags?.map((tag) => (
              <div
                className="underline dark:hover:text-white hover:text-black cursor-pointer"
                key={tag}
              >
                {tag.toString()}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const response = await fetch(config.API_BASE + "events", {
    headers: { "X-Flatten": "true" },
  });

  const json = await response.json();

  const paths = json.items?.map((item: any) => {
    const slug = item?.data?.slug;
    return { params: { slug } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(args: { params: { slug: string } }) {
  const response = await fetch(
    config.API_BASE + `events?$filter=data/slug/iv eq '${args.params.slug}'`,
    {
      headers: {
        "X-Flatten": "true",
      },
    }
  );

  const json = await response.json();

  const data = json.items[0].data;

  const markdown = marked.parse(data?.content ?? "", { gfm: true });

  return {
    props: {
      frontMatter: { ...data },
      slug: args.params.slug,
      markdown,
    },
  };
}
