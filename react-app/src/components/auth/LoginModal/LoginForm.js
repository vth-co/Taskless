import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../../store/session";
import "./Login.css";

const LoginForm = () => {
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
      <div className="form-container">
        <form onSubmit={onLogin}>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div className="field-label-button-container">
            <div className="field">
              <div className="label-container">
                <label htmlFor="email">Email</label>
              </div>
              <div>
                <input
                  className="input"
                  name="email"
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={updateEmail}
                />
              </div>
            </div>
            <div className="field">
              <div className="label-container">
                <label htmlFor="password">Password</label>
              </div>
              <div>
                <input
                  className="input"
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={updatePassword}
                />
              </div>
            </div>
            <div className="button-container">
              <div>
                <button className="login-button" type="submit">
                  Login
                </button>
              </div>
              <div>
                <button
                  className="login-button"
                  type="button"
                  onClick={handleClick}
                >
                  Demo
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
