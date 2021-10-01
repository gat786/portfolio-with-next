import React from 'react'
import CustomTooltip from '../CustomTooltip'
import ZoominCard from '../ZoominCard'

import styles from "../../styles/Home.module.css";

export default function ProjectsInfo() {
    return (
        <section
            className={`flex md:flex-row flex-col justify-center gap-8 md:px-8 items-center h-screen`}
          >
            <div className="flex flex-col py-16 lg:h-screen lg:justify-center md:w-1/2 gap-8">
              <div className="text-4xl pis-8">
                I make Applications for every Platform
              </div>
              <div className="inline-flex flex-row flex-wrap text-2xl mis-8">
                <div className="tooltip relative">
                  Android, &nbsp;
                  <CustomTooltip
                    childIcon={"/assets/icons/logos/android-bot.svg"}
                  />
                </div>
                <div className="tooltip relative">
                  Windows, &nbsp;
                  <CustomTooltip
                    childIcon={"/assets/icons/logos/windows-logo.svg"}
                  />
                </div>
                <div className="tooltip relative">
                  Linux, &nbsp;
                  <CustomTooltip
                    childIcon={"/assets/icons/logos/linux-logo.svg"}
                  />
                </div>
                <div className="tooltip relative">
                  Web &nbsp;
                  <CustomTooltip
                    childIcon={"/assets/icons/logos/html-logo.svg"}
                  />
                </div>
                and &nbsp;
                <div className="tooltip relative">
                  Server. &nbsp;
                  <CustomTooltip
                    childIcon={"/assets/icons/logos/server-farm.svg"}
                  />
                </div>
              </div>
            </div>

            <div className={`relative w-2/3 lg:w-1/3 ${styles['square-aspect-ratio']}`}>
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
    )
}
