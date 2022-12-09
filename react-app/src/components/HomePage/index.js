import { Switch } from "react-router-dom";
import Split from 'react-split'
import ProtectedRoute from "../auth/ProtectedRoute";
import CompletedTasks from "../CompletedTasks";
import Content from "../Content";
import ProjectDetail from "../Projects/ProjectDetail/Detail";
import Sidebar from "../Sidebar";
import "./HomePage.css";

function HomePage() {
  return (
    <Split
    className="split"
      sizes={[15, 85]}
      minSize={100}
      expandToMin={false}
      gutterSize={10}
      gutterAlign="center"
      snapOffset={30}
      dragInterval={1}
      direction="horizontal"
      cursor="col-resize"
    >
      <Sidebar />
      <Switch>
        <ProtectedRoute path="/app" exact={true}>
          <Content />
        </ProtectedRoute>
        <ProtectedRoute path="/app/project/:id" exact={true}>
          <ProjectDetail />
        </ProtectedRoute>
        <ProtectedRoute path="/app/completed" exact={true}>
          <CompletedTasks />
        </ProtectedRoute>
      </Switch>
    </Split>
  );
}

export default HomePage;
