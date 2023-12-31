import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "./logo.png";
import { APISignIN } from "./api.Router";

function SignInForm() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: state.email,
      password: state.password
    };
  
    console.log("Submitting with data:", userData);
  
    axios
      .post(
        `${APISignIN}`,
        {
          userName: userData.email,
          password: userData.password
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log("Response from server:", response);
  
        if (response.data && response.data.success) {
          navigate("/dashbord");
        } else {
          alert("Incorrect username or password. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
  
        if (error.response) {
          console.log("Error response:", error.response);
          if (error.response.status === 401) {
            alert("Incorrect username or password. Please try again.");
          }
        }
      });
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="form-container sign-in-container">
      <div className="flex items-center mt-8 justify-center">
        <img src={logo} alt="Logo" className="logo h-30 w-auto p-0" />
      </div>
      <form className="formh" onSubmit={handleSubmit}>
        <h1 className="h2h mt-5 font-bold text-3xl">Login</h1>
        <span className="font-medium text-sm">or use your account</span>
        <input
          className="inputh"
          type="text"
          placeholder="User Name"
          name="email"
          value={state.email}
          onChange={handleInputChange}
        />
        <input
          className="inputh"
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleInputChange}
        />
        <a className="ah" href="#">
          Forgot your password?
        </a>
        <button type="submit" className="buttonh text-black">
          Login
        </button>
      </form>
    </div>
  );
}

export default SignInForm;
