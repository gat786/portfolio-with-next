import React from "react";
import CustomTooltip from "../CustomTooltip";
import ZoominCard from "../ZoominCard";

import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function ProjectsInfo() {
  return (
    <section
      className={`flex md:flex-row flex-col justify-center gap-8 md:px-8 items-center h-screen`}
    >
      <div className="flex flex-col py-16 lg:h-screen text-center justify-center md:w-1/2 gap-8">
        <div className="text-4xl pli-8">
          I make Applications for every Platform
        </div>
        <div className="inline-flex flex-row flex-wrap justify-center text-2xl pli-8">
          <span className="tooltip relative">
            Android, &nbsp;
            <CustomTooltip childIcon={"/assets/icons/logos/android-bot.svg"} />
          </span>
          <span className="tooltip relative">
            Windows, &nbsp;
            <CustomTooltip childIcon={"/assets/icons/logos/windows-logo.svg"} />
          </span>
          <span className="tooltip relative">
            Linux, &nbsp;
            <CustomTooltip childIcon={"/assets/icons/logos/linux-logo.svg"} />
          </span>
          <span className="tooltip relative">
            Web &nbsp;
            <CustomTooltip childIcon={"/assets/icons/logos/html-logo.svg"} />
          </span>
          and &nbsp;
          <span className="tooltip relative">
            Server. &nbsp;
            <CustomTooltip childIcon={"/assets/icons/logos/server-farm.svg"} />
          </span>
        </div>
        <div className={`flex items-center gap-4 justify-center`}>
          <Link href={"/projects"}>
            <a className={`${styles.hoverHighlight}`}>
              <p className="flex items-center gap-4">
                See all projects <i className="material-icons">chevron_right</i>
              </p>
            </a>
          </Link>
          <Link href={"/demos"}>
            <a className={`${styles.hoverHighlight}`}>
              <p className="flex items-center gap-4">
                See all demos <i className="material-icons">chevron_right</i>
              </p>
            </a>
          </Link>
        </div>
      </div>

      <div
        className={`relative w-2/3 lg:w-1/3 ${styles["square-aspect-ratio"]}`}
      >
        <ZoominCard
          customBG={"bg-black"}
          customFill={"object-fit"}
          imageAddress={"/assets/icons/logos/dev-voice.svg"}
          currentPositionCss="top-0 left-0"
        />
        <ZoominCard
          imageAddress={"/assets/icons/logos/github-browser-logo.svg"}
          currentPositionCss="top-0 right-0"
        />
        <ZoominCard
          imageAddress={"/assets/icons/logos/styava-communities-logo.svg"}
          currentPositionCss="top-0 right-0 left-0 bottom-0 m-auto"
        />
        <ZoominCard
          imageAddress={"/assets/icons/logos/ric-bot.webp"}
          currentPositionCss="bottom-0 left-0"
        />
        <ZoominCard
          imageAddress={"/assets/icons/logos/openlocker-logo.png"}
          currentPositionCss="bottom-0 right-0"
        />
      </div>
    </section>
  );
}
