import * as React from "react";

import Image from "next/image";

const CustomTooltip = (props: { childIcon: string }) => {
  return (
    <div className="tooltip-content absolute z-40">
      <Image src={props.childIcon} className="mbs-8 h-32" alt="Windows" />
    </div>
  );
};

export default CustomTooltip;
