import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
      // setLoading(false);
    }
  };

  return (
    <body>
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo"> Web Chat</span>
          <span className="title"> Register</span>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="enter your email" />
            <input type="password" placeholder="enter your password" />
            <input id="file" type="file" style={{ display: "none" }} />

            <button>Sign in</button>
          </form>
          {err && <span> Wrong Email or Password</span>}
          <p>
            {" "}
            Don't Have an account? <Link to="/register">Sign up</Link>
          </p>
        </div>
      </div>
    </body>
  );
};

export default Login;
