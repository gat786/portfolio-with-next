import React, {useState} from 'react'
import Lottie from 'react-lottie';
import { FormState } from '../../pages';

import styles from "../../styles/Home.module.css";

import { letterAnimation } from "../../animation";
import { sendEmailService } from '../../data/services/query.service';

export default function ContactForm() {
    const [isLoading, setIsLoading] = useState<boolean>();
    const [formState, setFormState] = useState<FormState>({
        name: "",
        email: "",
        message: "",
      });
    
      // default options for the lottie animation
      const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: letterAnimation,
      };

    return (
        <section
            className={`flex md:flex-row flex-col gap-8 justify-center w-full p-8 h-screen`}
          >
            <form
              name="contact-me"
              className=" flex flex-col justify-center w-full md:w-1/2 gap-4 p-4"
              method="POST"
              onSubmit={async (event) => {
                event.preventDefault();
                console.log(`submitting`);
                setIsLoading(true);
                // setTimeout(() => {
                //   console.log(`done`);
                // },4000)
                // await dispatch(queryActions.sendEmail({ data: formState }));
                await sendEmailService(formState);
                setIsLoading(false);
              }}
              data-netlify="true"
            >
              <h1 className="text-2xl md:text-4xl font-semibold">
                If you have any queries send em here
              </h1>
              <input type="hidden" name="form-name" value="contact-me" />
              <div className="flex flex-col gap-2">
                <label
                  className="text-black dark:text-white"
                  htmlFor="name-input"
                >
                  Your Name
                </label>
                <input
                  name="name-input"
                  id="name-input"
                  required
                  aria-required
                  value={formState.name}
                  onChange={(event) => {
                    setFormState({ ...formState, name: event.target.value });
                  }}
                  className="p-2 text-base text-black w-full"
                  placeholder="Your Name"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="" htmlFor="query-input">
                  Your Query
                </label>
                <textarea
                  name="query-input"
                  required
                  aria-required
                  id="query-input"
                  value={formState.message}
                  onChange={(event) => {
                    setFormState({
                      ...formState,
                      message: event.target.value,
                    });
                  }}
                  className="p-2 text-black text-base w-full"
                  placeholder="Your Query"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className="text-black dark:text-white"
                  htmlFor="email-input"
                >
                  Your Email Address
                </label>
                <input
                  name="email-input"
                  required
                  aria-required
                  id="email-input"
                  type="email"
                  value={formState.email}
                  onChange={(event) => {
                    setFormState({ ...formState, email: event.target.value });
                  }}
                  placeholder="Your Email Address"
                  className="p-2 text-black text-base w-full"
                />
              </div>

              <button
                type="submit"
                className={` dark:text-black border border-black dark:bg-white w-max p-2 pli-4 ${
                  isLoading ? "disabled:opacity-50" : ""
                }`}
              >
                Submit
              </button>
            </form>

            <div
              className={`mlb-8 flex items-center  md:w-1/4 ${styles.hideWhenSmall}`}
            >
              <Lottie
                speed={0.5}
                height="100px"
                width="100px"
                options={defaultOptions}
              />
            </div>
          </section>
    )
}
