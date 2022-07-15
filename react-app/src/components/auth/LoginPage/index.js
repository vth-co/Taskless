import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { login } from "../../../store/session";
import "./Login.css";

const LoginPage = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/project" />;
  }

  const handleClick = async (e) => {
    e.preventDefault();
    const demo = {
      email: "demo@aa.io",
      password: "password",
    };
    const data = await dispatch(login(demo.email, demo.password));
    if (data) {
      setErrors(data);
    }
  };

  return (
    <div>
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
            <h2>Log in</h2>
            <form onSubmit={onLogin}>
              <div className="errors-container">
                {errors.map((error, ind) => (
                  <div key={ind}>{error}</div>
                ))}
              </div>
              <div className="field-label-button-container">
                <div className="field">
                  <div className="login-label-container">
                    <label className="label" htmlFor="email">
                      Email
                    </label>
                  </div>
                  <input
                    className="input"
                    name="email"
                    type="text"
                    // placeholder="Email"
                    value={email}
                    onChange={updateEmail}
                  />
                </div>
                <div className="field">
                  <div className="login-label-container">
                    <label className="label" htmlFor="password">
                      Password
                    </label>
                  </div>
                  <input
                    className="input"
                    name="password"
                    type="password"
                    // placeholder="Password"
                    value={password}
                    onChange={updatePassword}
                  />
                </div>
                <div className="button-container">
                  <button className="login-button" type="submit">
                    Login
                  </button>
                  <button
                    className="login-button"
                    type="button"
                    onClick={handleClick}
                  >
                    Demo User
                  </button>
                </div>
                <div className="form-footer">
                  <p className="no-account">
                    Don't have an account?
                    <Link className="sign-up-button" to={"/users/register"}>
                      Sign up
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
