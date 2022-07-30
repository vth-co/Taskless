import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { signUp } from "../../../store/session";
import "./SignUp.css";

const SignupPage = () => {
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
    if (email.length >= 50) {
      errors.push(["Email: Max length of 50 characters reached."]);
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
    return <Redirect to="/app" />;
  }

  return (
    <div className="form-background">
      <div className="login-form-container">
        <div>
          <Link className="icon-container" to={"/"}>
            <img src="../../../static/icon.png" alt=""></img>
            <div className="app-name">
              <h2>taskless</h2>
            </div>
          </Link>
        </div>
        <div className="login-form">
          <h2>Sign up</h2>
          <form onSubmit={onSignUp}>
            <div className="errors-container">
              {errors.map((error, ind) => (
                <div className="errors" key={ind}>
                  {error}
                </div>
              ))}
            </div>
            <div className="field-label-button-container">
              <div className="field">
                <div className="login-label-container">
                  <label className="label">User Name</label>
                </div>
                <input
                  className="input"
                  type="text"
                  name="username"
                  // placeholder="Username"
                  onChange={updateUsername}
                  value={username}
                  maxLength="40"
                ></input>
              </div>
              <div className="field">
                <div className="login-label-container">
                  <label>Email</label>
                </div>
                <input
                  className="input"
                  type="text"
                  name="email"
                  // placeholder="Email"
                  onChange={updateEmail}
                  value={email}
                  maxLength="50"
                ></input>
              </div>
              <div className="field">
                <div className="login-label-container">
                  <label>Password</label>
                </div>
                <input
                  className="input"
                  type="password"
                  name="password"
                  // placeholder="Password"
                  onChange={updatePassword}
                  value={password}
                  maxLength="50"
                ></input>
              </div>
              <div className="field">
                <div className="login-label-container">
                  <label>Confirm Password</label>
                </div>
                <input
                  className="input"
                  type="password"
                  name="repeat_password"
                  // placeholder="Confirm Password"
                  onChange={updateRepeatPassword}
                  value={repeatPassword}
                  maxLength="50"
                ></input>
                <div className="button-container">
                  <button className="login-button" type="submit">
                    Sign Up
                  </button>
                </div>
                <div className="form-footer">
                  <p> Already signed up?</p>
                </div>
                <div className="other-form-container">
                  <Link className="sign-up-button" to={"/users/login"}>
                    Go to login
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
