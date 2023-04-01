import React from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { useState, useContext } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {
  updateDoc,
  doc,
  arrayUnion,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";

import { storage } from "../firebase";
import { db } from "../firebase";
import { v4 as uuid } from "uuid";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState("");

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          //TODO:Handle Error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      text !== "" &&
        (await updateDoc(doc(db, "chats", data.chatId), {
          messages: arrayUnion({
            id: uuid(),
            text,
            senderId: currentUser.uid,
            date: Timestamp.now(),
          }),
        }));
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
    setImg(null);
  };

  return (
    <div className="input">
      {/* <textarea name="textBox" id="textBox" cols="30" rows="10"></textarea> */}
      <textarea
        onChange={(e) => setText(e.target.value)}
        id="textbox"
        type="text"
        placeholder="Write something..."
        value={text}
      ></textarea>
      <div className="send">
        <input
          className="button button1"
          type="file"
          onChange={(e) => {
            setImg(e.target.files[0]);
            console.log(e.target.files[0]);
          }}
        ></input>
        <button onClick={handleSend} className="button button2">
          Send
        </button>
      </div>
      {/* <div className="send">
        <button>Send</button>
      </div> */}
    </div>
  );
};

export default Input;
