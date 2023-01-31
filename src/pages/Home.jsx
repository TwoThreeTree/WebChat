import React from "react";
import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

const Home = () => {
  const [hide, setHide] = useState(false);

  const buttonSwitch = (event) => {
    setHide((prev) => {
      return !prev;
    });
    // alert("click" + hide);
  };

  return (
    <div className="home">
      <div className="container">
        <Sidebar stat={hide} />
        <button onClick={buttonSwitch} className="hideButton">
          Hide/Show Navigation bar
        </button>
        <Chat />
      </div>
    </div>
  );
};

export default Home;
