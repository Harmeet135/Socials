import "./auth.css";
import React, { useContext, useState } from "react";
import { BsShieldLock } from "react-icons/bs";
import { Gloabaldata } from "../../App";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebass-config";
import Home from "../home/Home";
import Navbar from "../navbar/Navbar";

const Auth = () => {
  const { Userr } = useContext(Gloabaldata);

  const [isSignup, setisSignup] = useState(true);
  const [email, setregisterEmail] = useState("");
  const [password, setregisterPassword] = useState("");
  const [registerName, setregisterName] = useState("");
  const [registerLast, setregisterLast] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");

  const register = async (e) => {
    e.preventDefault();

    if (!email || !password || !registerName || !registerLast || !repeatPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    if (password !== repeatPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      // Additional actions after successful registration
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage);
    }
  };

  const login = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      // Additional actions after successful login
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage);
    }
  };

  const switchMode = () => {
    setisSignup((prevmode) => !prevmode);
    setError(""); // Clear any existing error when switching between sign up and sign in
  };

  return (
    <>
      {Userr ? (
        <>
          <Home />
        </>
      ) : (
        <>
          <Navbar />
          <div id="auth">
            <form id="auth-form" action="">
              <h1>
                <BsShieldLock />
              </h1>
              {isSignup ? <h1>Sign Up</h1> : <h1>Sign In</h1>}
              {isSignup && (
                <>
                  <div className="names">
                    <input
                      type="text"
                      placeholder="Full Name"
                      onChange={(event) => {
                        setregisterName(event.target.value);
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      onChange={(event) => {
                        setregisterLast(event.target.value);
                      }}
                    />
                  </div>
                </>
              )}

              <input
                type="email"
                placeholder="Email Address"
                onChange={(event) => {
                  setregisterEmail(event.target.value);
                }}
              />

              <input
                type="password"
                placeholder="Password"
                autoComplete="on"
                onChange={(event) => {
                  setregisterPassword(event.target.value);
                }}
              />

              {isSignup ? (
                <>
                  <input
                    type="password"
                    placeholder="Repeat Password"
                    autoComplete="on"
                    onChange={(event) => {
                      setRepeatPassword(event.target.value);
                    }}
                  />
                  <button onClick={register} className="sign-in">
                    SIGN UP
                  </button>
                  <button className="switchmode" onClick={switchMode}>
                    <h3>ALREADY HAVE AN ACCOUNT? SIGN IN</h3>
                  </button>
                </>
              ) : (
                <>
                  <button onClick={login} className="sign-in">
                    SIGN IN
                  </button>
                  <button className="switchmode">
                    <h3>Don't have an account? SIGN UP</h3>
                  </button>
                </>
              )}

              {error && <div className="error-message">{error}</div>}
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Auth;
