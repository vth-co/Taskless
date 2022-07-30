import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import NavBar from "./components/Navigation/NavBar";
import { authenticate } from "./store/session";
import { getProjects } from "./store/projects";
import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage";
import { getTasks } from "./store/tasks";
import ProjectDetail from "./components/Projects/ProjectDetail";
import ErrorPage from "./components/404";
import SignupPage from "./components/auth/SignupPage";
import LoginPage from "./components/auth/LoginPage";


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authenticate());
    dispatch(getProjects());
    dispatch(getTasks());
  }, [dispatch]);

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/app">
          <HomePage />
        </Route>
        <Route path="/project/:id">
          <ProjectDetail />
        </Route>
        <Route path="/" exact={true}>
          <LandingPage />
        </Route>
        <Route path="/404-Not-Found">
          <ErrorPage />
        </Route>
        <Route path="/users/register">
          <SignupPage />
        </Route>
        <Route path="/users/login">
          <LoginPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
