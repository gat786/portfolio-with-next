import * as React from "react";
import { useState } from "react";

import Image from "next/image";

import styles from "./components.module.css";

export type VoidCallBack = () => void;
export type IsSelectedCallback = (selected: boolean) => void;

const ZoominCard = (props: {
  currentPositionCss: string;
  imageAddress: string;
  customBG?: string;
  customFill?: string;
  callback?: IsSelectedCallback;
}) => {
  const [isZoomed, setZoomed] = useState<boolean>(false);

  React.useEffect(() => {
    if (props.callback !== undefined) {
      props.callback(isZoomed);
    }
  }, [isZoomed]);

  return (
    <div
      onClick={(event) => {
        setZoomed(!isZoomed);
      }}
      className={`w-1/3 ${
        props.customBG !== undefined ? props.customBG : "dark:bg-white bg-black"
      } absolute h-1/3 p-4 border-8 border-yellow-400 dark:border-blue-400  ${
        props.currentPositionCss
      } ${styles.transformSlow} ${isZoomed ? styles.zoomIn : styles.zoomOut} `}
    >
      <Image
        className={`h-full ${
          props.customFill !== undefined ? props.customFill : "object-cover"
        }`}
        height="200"
        width="200"
        src={props.imageAddress}
        alt=""
      />
    </div>
  );
};

export default ZoominCard;
