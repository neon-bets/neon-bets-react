import React from "react";
import classes from "./TextWindow.module.css";

// Props:
// provide a number for props.widthPercentage
// and props.heightPercentage
// Without providing them, window will fit the size of
// its content

const TextWindow = (props) => {
  return (
    <div
      style={{
        width: `${props.widthPercentage}%`,
        height: `${props.heightPercentage}%`,
      }}
      className={classes.TextWindow}
    >
      {props.children}
    </div>
  );
};

export default TextWindow;
