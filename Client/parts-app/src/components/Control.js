import React from "react";
import GLOBAL from "../services/global";

const Control = props => {
  const { control } = props;
  return (
    <div>
      <div className="alignLeft">{control.name}</div>
      <div>{control.dev}</div>
      <div>{control.devOutTotal}</div>
      <div className={`icon ${control.status}Icon`}>{GLOBAL[control.status + "Icon"]}</div>
    </div>
  );
};

export default Control;
