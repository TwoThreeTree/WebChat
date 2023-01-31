import React from "react";
import Pic from "../img/edit.png";
const Register = () => {
  return (
    <body>
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo"> Web Chat</span>
          <span className="title"> Register</span>
          <form>
            <input type="text" placeholder="enter your user name" />
            <input type="email" placeholder="enter your email" />
            <input type="password" placeholder="enter your password" />
            <input id="file" type="file" style={{ display: "none" }} />
            <p>
              {" "}
              Upload a profile picture
              <span id="addProfile">
                <label htmlFor="file">
                  <img src={Pic} alt="adding"></img>
                </label>
              </span>
            </p>
            <button>Sign up</button>
          </form>
          <p> Have an account? Sign in</p>
        </div>
      </div>
    </body>
  );
};

export default Register;
