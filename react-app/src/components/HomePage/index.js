import { useState } from "react";
import { Switch } from "react-router-dom";
import Split from "react-split";
import ProtectedRoute from "../auth/ProtectedRoute";
import CompletedTasks from "../CompletedTasks";
import Content from "../Content";
import ProjectDetail from "../Projects/ProjectDetail/Detail";
import Sidebar from "../Sidebar";
import "./HomePage.css";

function HomePage() {
  const [toggleSideBar, setToggleSideBar] = useState(false);

  return (
    <Split
      sizes={[15, 85]}
      minSize={[200]}
      maxSize={[400]}
      direction="horizontal"
      cursor="col-resize"
    >
      <Sidebar
        toggleSideBar={() => setToggleSideBar(!toggleSideBar)}
        //  className={toggleSideBar ? "sidebar-open" : "sidebar-close"}
      />
      <Switch>
        <ProtectedRoute path="/app" exact={true}>
          <Content
          //  className={toggleSideBar ? "content-close" : "content-open"}
          />
        </ProtectedRoute>
        <ProtectedRoute path='/app/project/:id' exact={true}>
          <ProjectDetail />
        </ProtectedRoute>
        <ProtectedRoute path='/app/completed' exact={true}>
          <CompletedTasks />
        </ProtectedRoute>
      </Switch>
    </Split>
  );
}

export default HomePage;
