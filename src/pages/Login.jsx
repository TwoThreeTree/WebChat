import React from "react";

const Login = () => {
  return (
    <body>
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo"> Web Chat</span>
          <span className="title"> Register</span>
          <form>
            <input type="email" placeholder="enter your email" />
            <input type="password" placeholder="enter your password" />
            <input id="file" type="file" style={{ display: "none" }} />

            <button>Sign in</button>
          </form>
          <p> Don't Have an account? Sign up</p>
        </div>
      </div>
    </body>
  );
};

export default Login;
