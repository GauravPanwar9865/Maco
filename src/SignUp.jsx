import React from "react";

function SignUpForm({ handleOnClick }) {
  const [state, setState] = React.useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    password: "",
    mobileNumber: ""
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();

    const { firstName, lastName, companyName, email, password, mobileNumber } = state;
    alert(
      `You are sign up with 
      First Name: ${firstName}
      Last Name: ${lastName}
      Company Name: ${companyName}
      Email: ${email} 
      Password: ${password}
      Mobile Number: ${mobileNumber}`
    );

    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <div className="form-container sign-up-container mt-10">
      <form className="formh" onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>
        <span>or use your email for registration</span>
        <input
          className="inputh"
          type="text"
          name="firstName"
          value={state.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        <input
          className="inputh"
          type="text"
          name="lastName"
          value={state.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <input
          className="inputh"
          type="text"
          name="companyName"
          value={state.companyName}
          onChange={handleChange}
          placeholder="Company Name"
        />
        <input
          className="inputh"
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          className="inputh"
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <input
          className="inputh"
          type="tel"
          name="mobileNumber"
          value={state.mobileNumber}
          onChange={handleChange}
          placeholder="Mobile Number"
        />
        <button className="buttonh mt-5">Sign Up</button>
      </form>
     
    </div>
  );
}

export default SignUpForm;
