import React, { useState } from "react";
import classNames from "classnames";
import "./styleee.css";
import SignInForm from "./signin";
import SignUpForm from "./SignUp";
import backgroundImage from "./dashboadbg.jpg";


export default function App() {
  const [type, setType] = useState("signIn");

  const handleOnClick = (text) => {
    if (text !== type) {
      setType(text);
    }
  };

  const containerClass = classNames("container h-[40%] w-[50%] ml-[48%] ", {
    "right-panel-active": type === "signUp",
  });

  return (
    <section>
      <div className="login-container mt-20">
        <div className={containerClass} id="container">
          {type === "signUp" ? <SignUpForm /> : <SignInForm />}
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1 className="h1h">Welcome Back!</h1>
                <p className="ph">To keep connected with us please login with your personal info</p>
                <button className="ghost" id="signIn" onClick={() => handleOnClick("signIn")}>
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start the journey with us</p>
                <button className="ghost" id="signUp" onClick={() => handleOnClick("signUp")}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section> <div className="imgslider"></div></section>
      

      </section>
          
  );
}
