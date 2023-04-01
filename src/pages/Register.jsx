import React from "react";
import Pic from "../img/edit.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            // setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      // setLoading(false);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo"> Web Chat</span>
        <span className="title"> Register</span>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" placeholder="enter your user name" />
          <input type="email" placeholder="enter your email" />
          <input type="password" placeholder="enter your password" />
          <input id="file" type="file" style={{ display: "none" }} />
          <p>
            Upload a profile picture
            <span id="addProfile">
              <label htmlFor="file">
                <img src={Pic} alt="adding"></img>
              </label>
            </span>
          </p>
          <button>Sign up</button>
          {err && <span>Something is wrong</span>}
        </form>
        <p>
          {" "}
          Have an account?<Link to="/login">Sign in</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
