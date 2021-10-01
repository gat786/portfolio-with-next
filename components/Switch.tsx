import * as React from "react";
import { useState } from "react";
import config from "../config";

import styles from "./components.module.css";

import { Themes, getThemeFromString } from "../util/ThemeUtil";

const Switch = () => {
  const [theme, setTheme] = useState<Themes>(Themes.Light);

  const switchDocumentTheme = (themeToSet: Themes) => {
    // const themeToSet = theme === Themes.Light ? Themes.Dark : Themes.Light;
    // setTheme(themeToSet);
    if (
      themeToSet === Themes.Dark &&
      !document.documentElement.classList.contains("dark")
    ) {
      document.documentElement.classList.add("dark");
      localStorage.setItem(config.THEME_KEY, "dark");
      afterChange();
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem(config.THEME_KEY, "light");
        afterChange();
      }
    }
  };

  function afterChange() {
    console.log({ after_change: localStorage.getItem(config.THEME_KEY) });
  }

  React.useEffect(() => {
    const currentTheme = localStorage.getItem(config.THEME_KEY);

    console.log({ initial_load: currentTheme });

    const themeToSet = getThemeFromString({
      themeName: currentTheme ?? undefined,
    });

    if (theme !== themeToSet) {
      console.log({ theme, themeToSet });

      setTheme(themeToSet);
    }
  }, []);

  React.useEffect(() => {
    switchDocumentTheme(theme);
  }, [theme]);

  return (
    <div>
      <button
        onClick={() => {
          setTheme(theme === Themes.Light ? Themes.Dark : Themes.Light);
          // switchTheme(theme === Themes.Light ? Theme);
        }}
        className={`${styles.box} ${
          theme === Themes.Dark && `${styles.buttonDark}`
        }`}
      >
        <div
          className={`${styles.sun} ${
            theme === Themes.Light && `${styles.sunOn}`
          }`}
        ></div>
        <div
          className={`${styles.moon} ${
            theme === Themes.Dark && `${styles.moonOn}`
          }`}
        ></div>
      </button>
    </div>
  );
};

export default Switch;
