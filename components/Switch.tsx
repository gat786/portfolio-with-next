import * as React from "react";
import { useState } from "react";

import styles from "./components.module.css";

enum Themes {
  Light,
  Dark,
}

const Switch = () => {
  const [theme, setTheme] = useState<Themes>(Themes.Light);

  const switchTheme = () => {
    const themeToSet = theme === Themes.Light ? Themes.Dark : Themes.Light;
    setTheme(themeToSet);
    if (themeToSet === Themes.Dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  React.useEffect(() => {
    switchTheme();
  },[])

  return (
    <div>
      <button
        onClick={() => {
          // setTheme(theme === Themes.Light ? Themes.Dark : Themes.Light);
          switchTheme();
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
