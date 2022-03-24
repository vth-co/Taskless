import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../../store/session";
import "./SignUp.css";

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  useEffect(() => {
    let errors = [];
    if (username.length >= 40) {
      errors.push("Username: Max length of 40 characters reached.");
    }
    if (email.length >= 255) {
      errors.push(["Email: Max length of 255 characters reached."]);
    }
    setErrors(errors);
  }, [username, email]);

  const onSignUp = async (e) => {
    e.preventDefault();
    const data = await dispatch(
      signUp(username, email, password, repeatPassword)
    );
    if (data) {
      let errors = [];
      errors.push(...data);
      setErrors(errors);
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <form onSubmit={onSignUp}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <h2 className="signup-title">Sign up</h2>
      <div className="field">
        <label>User Name</label>
        <input
          className="input"
          type="text"
          name="username"
          placeholder="Username"
          onChange={updateUsername}
          value={username}
          maxLength="40"
        ></input>
      </div>
      <div className="field">
        <label>Email</label>
        <input
          className="input"
          type="text"
          name="email"
          placeholder="Email"
          onChange={updateEmail}
          value={email}
          maxLength="255"
        ></input>
      </div>
      <div className="field">
        <label>Password</label>
        <input
          className="input"
          type="password"
          name="password"
          placeholder="Password"
          onChange={updatePassword}
          value={password}
          maxLength="255"
        ></input>
      </div>
      <div className="field">
        <label>Confirm Password</label>
        <input
          className="input"
          type="password"
          name="repeat_password"
          placeholder="Confirm Password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          maxLength="255"
        ></input>
      </div>
      <button className="signup-button" type="submit">
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
