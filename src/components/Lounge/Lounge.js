import classes from "./Lounge.module.css";
import React from "react";
import ChatRoom from "./ChatRoom/ChatRoom";

const Lounge = () => {
  return (
    <div className={classes.Lounge}>
      <ChatRoom />
    </div>
  );
};

export default Lounge;
