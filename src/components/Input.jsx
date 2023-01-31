import React from "react";

const Input = () => {
  return (
    <div className="input">
      {/* <textarea name="textBox" id="textBox" cols="30" rows="10"></textarea> */}
      <textarea
        id="textbox"
        type="text"
        placeholder="Write something..."
      ></textarea>
      <div className="send">
        <input className="button button1" type="file"></input>
        <button className="button button2">Send</button>
      </div>
      {/* <div className="send">
        <button>Send</button>
      </div> */}
    </div>
  );
};

export default Input;
