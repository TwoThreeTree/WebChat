import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { createContext } from "react";
import { auth } from "../firebase";
//just to create an authentication provider to create a user and able to use that anywhere
// Avoid creating users and sending them everywhere
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(user);
    });

    return () => {
      unsub();
    };
    //in a realtime app, the useEffect needs to have a cleanup function, otherwise MEMORYLEAKS
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider> //this component can reach the current user
    // any content wrapped in this context provider is able to reach this current user
  );
};
