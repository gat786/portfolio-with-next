import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";

import NavBar from "../components/NavBar";

import PersonalInfo from "../components/home-sections/personal-info";
import ProjectsInfo from "../components/home-sections/projects-info";
import SocialInfo from "../components/home-sections/social-info";
import ContactForm from "../components/home-sections/contact-form";

export interface FormState {
  name: string;
  email: string;
  message: string;
}

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gats Portfolio</title>
        <meta name="description" content="Personal Website of Ganesh Tiwari listing projects, blogs and content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={``}>
        <div className="absolute w-full">
          <NavBar />
        </div>
        <div
          className={`dark:text-white ${styles.scrollSnaps}`}
        >
          <PersonalInfo />
          <ProjectsInfo />
          <SocialInfo />
          <ContactForm />
        </div>
      </main>
    </div>
  );
};

export default Home;
