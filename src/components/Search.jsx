import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Search a user" />
      </div>
      <div className="userChat">
        <img src="https://avatarfiles.alphacoders.com/171/171156.jpg" alt="" />
        <div className="userChatInfo">
          <span>Iron Man</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
