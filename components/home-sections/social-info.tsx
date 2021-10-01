import React from 'react'
import Image from 'next/image'
import { SocialIcon } from 'react-social-icons'

export default function SocialInfo() {
    return (
        <section
            id="social-section"
            className={`flex md:flex-row flex-col gap-8 md:px-8 items-center justify-center h-screen`}
          >
            <div className="text-3xl mli-8 flex flex-col h-full justify-center gap-8">
              <div>
                I create contents as Blogs, Videos and Different Technical
                Sessions.
              </div>
              <div className="text-2xl">
                You can find me on the following Social Networks
              </div>

              <div className="grid grid-flow-row-dense grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 items-center gap-6 ">
                <SocialIcon
                  network="twitter"
                  target="_blank"
                  url="https://twitter.com/igat786"
                />
                <SocialIcon
                  network="instagram"
                  target="_blank"
                  url="https://instagram.com/gats.dev"
                />
                <SocialIcon
                  network="facebook"
                  target="_blank"
                  url="https://fb.com/gat786"
                />
                <SocialIcon
                  network="youtube"
                  target="_blank"
                  url="https://www.youtube.com/channel/UCeP2cJ51JXyEQEVyi3prG8g"
                />
                <SocialIcon
                  network="medium"
                  target="_blank"
                  url="https://medium.com/@gat786"
                />
                <SocialIcon
                  network="linkedin"
                  target="_blank"
                  url="https://linkedin.com/in/gat786"
                />
                <SocialIcon
                  network="github"
                  target="_blank"
                  url="https://github.com/gat786"
                />

                <a href="https://dev.to/gat786" target="_">
                  <Image
                    src={"/assets/icons/logos/dev-to.svg"}
                    height={60}
                    width={60}
                    alt="Dev.To Logo"
                    className="w-12 h-12 p-1 border-white border"
                  />
                </a>
              </div>
            </div>
          </section>
    )
}
