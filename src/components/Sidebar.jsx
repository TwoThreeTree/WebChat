import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";

const Sidebar = (props) => {
  return (
    <div
      className="sidebar"
      style={props.stat === true ? { display: "none" } : { display: " " }}
    >
      <Navbar />
      <Search />
      <div className="chatslist">
        <Chats />
      </div>
    </div>
  );
};

export default Sidebar;
