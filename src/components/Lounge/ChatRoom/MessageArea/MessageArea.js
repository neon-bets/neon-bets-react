import React from "react";
import classes from "./MessageArea.module.css";
import TextWindow from "../../../ui/windows/TextWindow/TextWindow";

const MessageArea = (props) => {
  return (
    <TextWindow heightPercentage={100} widthPercentage={80}>
      {props.messages.map((message, i) => {
        const { username, color, text } = message;

        return (
          <div
            ref={i === props.messages.length - 1 ? props.newRef : null}
            id={`${username}${i}`}
            key={`${username}${i}`}
            className={classes.message}
          >
            <h1 style={{ color: color }}>{username}:</h1> <p>{text}</p>
          </div>
        );
      })}
    </TextWindow>
  );
};

export default MessageArea;
