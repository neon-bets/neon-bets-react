import React from "react";
import classes from "./TitleBar.module.css";

// Props:
// props.text provides the main text value for the title bar
// props.size - if specified to be "small", will use 1.5em for text ->
// otherwise 2.2em
// props.closeable boolean determines if the prop will include an X button
// props.closeAction - takes a callback function for the X button

const TitleBar = (props) => {
  return (
    <div className={classes.TitleBar}>
      <h1 className={props.size === "small" ? classes.smallText : null}>
        {props.text}
      </h1>

      {props.closeable ? (
        <button onClick={() => props.closeAction()}>X</button>
      ) : null}
    </div>
  );
};

export default TitleBar;
