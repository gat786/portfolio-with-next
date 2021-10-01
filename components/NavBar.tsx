import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Home.module.css";

import Switch from "./Switch";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div className="flex dark:text-white w-full top-0 z-10 justify-between p-4 md:px-16">
      <Link href="/">
        <a href="">
          <Image
            width="100px"
            height="30px"
            className="m-4 w-24 md:w-32 md:max-h-12"
            src="/assets/icons/branding/gats-dev.png"
            alt="Personal Branding logo"
          />
        </a>
      </Link>
      <div className="flex gap-6 items-center mie-4">
        <div className="dark:text-white relative">
          <div
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            className={`md:hidden cursor-pointer ${styles.arrow} ${
              showMenu ? styles.dropArrow : ""
            }`}
          >
            Menu
          </div>
          {showMenu && (
            <div className="flex absolute top-10 flex-col gap-4">
              <a
                onClick={() => {
                  setShowMenu(false);
                }}
                href={"https://blogs.gats.dev/"}
                target="_"
                className={`${styles.borderBottomHover} cursor-pointer`}
              >
                Blogs
              </a>
              <Link href="/projects">
                <p className={`${styles.borderBottomHover} cursor-pointer`}>
                  Projects
                </p>
              </Link>
              <a
                href="#social-section"
                onClick={() => {
                  setShowMenu(false);
                }}
                className={`${styles.borderBottomHover} cursor-pointer`}
              >
                Connect
              </a>
            </div>
          )}
        </div>

        <div className="hidden md:flex gap-6">
          <a
            href={"https://blogs.gats.dev/"}
            target="_"
            className={`${styles.borderBottomHover} cursor-pointer`}
          >
            Blogs
          </a>
          <Link href="/projects">
            <a className={`${styles.borderBottomHover} cursor-pointer`}>
              Projects
            </a>
          </Link>
          <a
            href="#social-section"
            className={`${styles.borderBottomHover} cursor-pointer`}
          >
            Connect
          </a>
        </div>
        <Switch />
      </div>
    </div>
  );
}
