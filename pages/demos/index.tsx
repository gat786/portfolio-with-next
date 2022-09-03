import Head from "next/head";
import React from "react";
import NavBar from "../../components/NavBar";

const Demos = () => {
  return (
    <>
      <Head>
        <title>Demos made by Ganesh Tiwari</title>
        <meta
          name="description"
          content="Page Showcasing Demos made by Ganesh Tiwari"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className="flex flex-col items-center pli-4 body">
        <div className="flex flex-col gap-4 mlb-8">
          <h2 className="text-2xl font-bold">Appwrite CSS Sample</h2>
          <p>
            A Design Sample made according to the blender design made by Vidushi
            Gupta and shared in this{" "}
            <a
              className="text-primary underline"
              href="https://twitter.com/Vidushi_Gupta7/status/1452170464067944459?s=20"
            >
              tweet
            </a>
          </p>
          <div className="w-full h-96 md:h-screen">
            <iframe
              src="https://codesandbox.io/embed/stoic-frost-wjo6l?fontsize=14&hidenavigation=1&theme=dark&view=preview"
              // styles="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
              style={{ width: "100%", height: "100%" }}
              title="stoic-frost-wjo6l"
              allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>
          </div>
        </div>
      </main>
    </>
  );
};

export default Demos;
