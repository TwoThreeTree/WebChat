import React, { useState, useContext, useRef, useEffect } from "react";
import { db } from "../firebase";
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from "../context/AuthContext";

const Message = ({ message }) => {
  const [click, setClick] = useState(false);

  const cssclass = ["compressed", "original", "hidePadding"];
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleClick = (event) => {
    setClick((prev) => {
      return !prev;
    });
    //alert(click + " " + event.target.className);
  };
  const ref = useRef();
  // const compressed = {
  //   maxWidth: "200px",
  //   maxHeight: "200px",
  // };

  // const original = {
  //   maxWidth: "200px",
  //   maxHeight: "200px",
  // };
  //console.log(message);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt="profile"
        ></img>
        <span>Just Now</span>
      </div>

      <div className="messageContent ">
        <p className={message.text === "" && cssclass[2]}>
          {message.text !== "" && message.text}
        </p>
        {message.img && (
          <img
            onClick={handleClick}
            className={click === false ? cssclass[0] : cssclass[1]}
            src={message.img}
            alt=""
          />
        )}
        {/* <img
          onClick={handleClick} */}
        {/* // style={ccompressed}
        // className="compressed" //
        src="https://avatarfiles.alphacoders.com/954/95499.jpg" // alt="message"
        /> */}
      </div>
    </div>
  );
};

export default Message;
