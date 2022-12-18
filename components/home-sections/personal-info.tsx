import React from 'react'
import Image from 'next/image';

export default function PersonalInfo() {
    return (
        <section
            id={`#top-section`}
            className={`flex flex-col h-screen md:px-4`}
          >
            <div className="flex flex-col justify-center gap-8 md:flex-row flex-grow">
              <div className="md:hidden flex items-center w-full justify-center">
                <Image
                  className="rounded-full w-1/2 border-8 border-gray-500"
                  src={"/assets/images/profile.webp"}
                  height={200}
                  width={200}
                  alt=""
                />
              </div>

              <div className="dark:text-white text-center md:text-start text-3xl lg:text-4xl md:w-2/4 md:mli-16 mli-8 flex flex-col gap-4 justify-center">
                Hi!
                <div className={`inline font-bold`}>
                  I am Ganesh Tiwari
                </div>
                <div className="inline leading-relaxed">
                  I am a Software Engineer currently working as a Jr DevOps Engineer
                </div>
              </div>

              <div className="md:flex hidden items-center w-1/4 justify-center">
                <Image
                  className="rounded-full border-8 max-h-96 border-gray-500"
                  height={300}
                  width={300}
                  src={"/assets/images/profile.webp"}
                  alt=""
                />
              </div>
            </div>
          </section>
    )
}
