import React from "react";
import Message from "./Message";
import { ChatContext } from "../context/ChatContext";
import { useState, useContext } from "react";
import { useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });
    return () => {
      unsub();
    };
  }, [data.chatId]);
  return (
    <div className="messages">
      {/* <button
        onClick={(e) => {
          setMessages([]);
        }}
      >
        Cancel
      </button> */}
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
};

export default Messages;
