import React, { useState } from "react";

const Message = () => {
  const [click, setClick] = useState(false);

  const cssclass = ["compressed", "original"];

  const handleClick = (event) => {
    setClick((prev) => {
      return !prev;
    });
    //alert(click + " " + event.target.className);
  };

  // const compressed = {
  //   maxWidth: "200px",
  //   maxHeight: "200px",
  // };

  // const original = {
  //   maxWidth: "200px",
  //   maxHeight: "200px",
  // };

  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://avatarfiles.alphacoders.com/171/171156.jpg"
          alt="profile"
        ></img>
        <span>Just Now</span>
      </div>

      <div className="messageContent ">
        <p>hello</p>
        <img
          onClick={handleClick}
          className={click === false ? cssclass[0] : cssclass[1]}
          src="https://avatarfiles.alphacoders.com/954/95499.jpg"
          alt=""
        />
        <img
        // onClick={handleClick}
        // style={ccompressed}
        // className="compressed"
        // src="https://avatarfiles.alphacoders.com/954/95499.jpg"
        // alt="message"
        />
      </div>
    </div>
  );
};

export default Message;
