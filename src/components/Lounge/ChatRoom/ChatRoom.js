import React, { useState, useEffect, useRef } from "react";
import classes from "./ChatRoom.module.css";

import TitleBar from "../../ui/windows/TitleBar/TitleBar";
import TextWindow from "../../ui/windows/TextWindow/TextWindow";
import MessageArea from "./MessageArea/MessageArea";
import ColorChooser from "./ColorChooser/ColorChooser";
import EntryPrompt from "../EntryPrompt/EntryPrompt";

const ChatRoom = () => {
  const colorChoices = ["#280334", "#f53aba", "#4e6a3f", "#f74300", "#d10f3c"];

  const [nameColor, setNameColor] = useState(colorChoices[0]);
  const [name, setName] = useState(null);
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const [listening, setListening] = useState(null);

  const nameInput = useRef(null);
  const messageInput = useRef(null);
  const recentMessage = useRef(null);

  const disconnectSocket = () => {
    setName(null);
    socket.disconnect();
  };

  useEffect(() => {
    if (name && listening === false) {
      console.log("connecting to socket");

      socket.on("connect", (data) => {
        console.log("sending username");
        console.log(data);
        socket.emit("username", name);
      });

      socket.on("messages", (newMessages) => {
        console.log("setting messages");
        setMessages(newMessages);
        if (recentMessage.current) {
          recentMessage.current.scrollIntoView();
        }
      });

      socket.on("users", (newUsers) => {
        setUsers(Object.entries(newUsers));
      });

      setListening(true);
    }
  }, [name, listening]);

  if (!name) {
    return (
      <EntryPrompt
        nameInput={nameInput}
        setName={setName}
        setSocket={setSocket}
        setListening={setListening}
      />
    );
  }

  return (
    <div className={classes.ChatRoom}>
      <div className={classes.chatBox}>
        <TitleBar
          text={`THE LOUNGE : ${name}`}
          closeable
          closeAction={disconnectSocket}
        />

        <div className={classes.panels}>
          <MessageArea messages={messages} newRef={recentMessage} />

          <TextWindow heightPercentage={100} widthPercentage={20}>
            <TitleBar size="small" text={`Users: ${users.length}`} />
            {users.map((u) => {
              return <p className={classes.username}>{u[1].name}</p>;
            })}
          </TextWindow>
        </div>

        <ColorChooser
          choices={colorChoices}
          chooseColor={setNameColor}
          currentColor={nameColor}
        />

        <div className={classes.inputArea}>
          <textarea
            maxLength={240}
            ref={messageInput}
            onChange={(event) =>
              setMessage({ text: event.target.value, color: nameColor })
            }
          ></textarea>
          <button
            className={classes.send}
            onClick={() => {
              if (message && message.text.length > 0) {
                socket.emit("send", message);
                setMessage("");
                messageInput.current.value = "";
              }
            }}
          >
            SEND
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
