import Head from "next/head";
import React from "react";
import Image from "next/image";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

import config from "../../config";
import { EventCard } from "../../components/events/event-card";

export type EventData = {
  slug: string;
  frontMatter: EventsFrontMatter;
};

export type EventsFrontMatter = {
  title: string;
  organisedOn?: string;
  organisers?: string;
  tags?: string[];
  coverImage?: string;
  eventLocation?: string;
  description?: string;
  content?: string;
};


export default function index(props: { events: EventData[] }) {
  return (
    <div className="flex flex-col items-center h-full">
      <Head>
        <title>Events Gallery</title>
        <meta
          name="description"
          content="List of Events organised or Co-organised by Ganesh Tiwari"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className="w-full flex justify-center gap-4 flex-wrap body">

        {
          props.events?.map((event: EventData) => {
            return <EventCard 
              key={event.slug} 
              eventFrontMatter={event.frontMatter}
              slug={event.slug}
            />
          })
        }

      </div>
      <Footer />
    </div>
  );
}


export async function getStaticProps() {
  const response = await fetch(config.API_BASE + "events", {
    headers: { "X-Flatten": "true" },
  });

  const json = await response.json();

  const eventsCount = json.total;
  const events = json.items?.map((item: any) => {
    // const markdownString = item?.data?.content?.iv;
    const slug = item?.data?.slug;
    const frontMatter = { ...item?.data };
    return { slug, frontMatter };
  });

  return { props: { events: events } };
}
