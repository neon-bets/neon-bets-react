import React from "react";
import classes from "./EntryPrompt.module.css";
import io from "socket.io-client";

import TitleBar from "../../ui/windows/TitleBar/TitleBar";

// Props:
// props.nameInput - a ref for the name textbox

const EntryPrompt = (props) => {
  return (
    <div className={classes.EntryPrompt}>
      <div className={classes.promptWindow}>
        <TitleBar text="CHOOSE YOUR DISPLAY NAME" />
        <div className={classes.vertCenter}>
          <div className={classes.nameInputArea}>
            <input
              maxLength={12}
              type="text"
              className={classes.nameInput}
              ref={props.nameInput}
            ></input>
            <button
              onClick={() => {
                props.setName(props.nameInput.current.value);
                props.setSocket(
                  io("ws://localhost:3000", {
                    transports: ["websocket", "polling"],
                  })
                );
                props.setListening(false);
              }}
            >
              CHOOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntryPrompt;
