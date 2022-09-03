import Head from "next/head";
import React from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

export default function index() {
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
      <div className="w-full lg:w-11/12 flex justify-center gap-4 flex-wrap body">

      </div>
      <Footer />
    </div>
  );
}
