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
  const [email, setregisterEmail] = useState();
  const [password, setregisterPassword] = useState("");
  const [registerName, setregisterName] = useState("");
  const [registerLast, setregisterLast] = useState("");
  // const [loginEmail, setloginEmail] = useState("");
  // const [loginPassword, setloginPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const login = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {});
  };

  const switchMode = () => {
    setisSignup((prevmode) => !prevmode);
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
                    <h3>dont have a ACCOUNT ? SIGN UP</h3>
                  </button>
                </>
              )}
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Auth;
