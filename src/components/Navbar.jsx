import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo"> Webchat</span>
      <div className="user">
        <img src="https://avatarfiles.alphacoders.com/171/171156.jpg" alt="" />
        <span>Iron Man</span>
        <button>Log Out</button>
      </div>
    </div>
  );
};

export default Navbar;
