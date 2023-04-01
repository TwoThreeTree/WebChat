import { createContext, useContext, useReducer } from "react";
import { AuthContext } from "./AuthContext";

import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { auth } from "../firebase";

export const ChatContext = createContext();
//to use the user information from the sidebar, also the combinedId to patch the chat content
export const ChatContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const INITIAL_STATE = {
    chatId: "null", //chatID
    user: {}, //user ****
  };
  //since the chatID depends on the user information, thus used the usereducer hook
  const chatReducer = (state, action) => {
    switch (
      action.type //using switch, I may implement blocking user function
    ) {
      case "CHANGE_USER": //the only one action here, when user on the sidebar is clicked on.
        // then user**** will be changed, at the same time updating chatID as well
        return {
          user: action.payload, // updating user
          //then updating chatID
          chatId:
            currentUser.uid > action.payload.uid
              ? currentUser.uid + action.payload.uid
              : action.payload.uid + currentUser.uid,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider> //wrap the components in Index.js!
  );
};
