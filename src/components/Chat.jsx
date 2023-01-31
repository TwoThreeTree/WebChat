import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import Messages from "./Messages";
import Input from "./Input";
const Chat = (props) => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Iron Man</span>
        <div className="chatIcons">
          <FontAwesomeIcon icon={faEllipsisH} />
          <FontAwesomeIcon icon={faAdd} />
          <FontAwesomeIcon icon={faMinus} />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
