import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import CreateProjectModal from "../Projects/CreateProject";
import CreateProjectForm from "../Projects/CreateProject/CreateProjectForm";
import DisplayProjectsSideBar from "../Projects/DisplayProjectsSideBar";
import "./HomePage.css";

function HomePage() {
  const user = useSelector((state) => state.session.user);
  const projects = useSelector((state) => state.projects);
  const projectsArr = Object.values(projects);
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [closeSideBar, setCloseSideBar] = useState(false)
  const filterProjectsArr = projectsArr.filter(
    (project) => project.user_id === user?.id
  );

  if (!user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="project-main-content">
      <h1 className="tasklist-title">{user.username}'s Tasklists:</h1>
      {filterProjectsArr.map((project) => (
        <div key={project.id}>
          <div>
            <DisplayProjectsSideBar key={project.id} project={project} />
          </div>
        </div>
      ))}
      <span className="add-tasklist-button">
        <div hidden={showTaskForm}>
          <a className="main-add" onClick={() => setShowTaskForm(true)}>
            <svg
              className="add-task-circle"
              onClick={() => setShowTaskForm(true)}
            >
              <g transform="translate(-.25 0)">
                <line
                  x1="3"
                  y1="10"
                  x2="18"
                  y2="10"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <line
                  x1="10.5"
                  y1="3"
                  x2="10.5"
                  y2="17"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <g mask="url(#ahat)">
                  <line
                    x1="3"
                    y1="10"
                    x2="18"
                    y2="10"
                    stroke="currentcolor"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="10.5"
                    y1="3"
                    x2="10.5"
                    y2="17"
                    stroke="currentcolor"
                    strokeWidth="1.5"
                  />
                </g>
              </g>
            </svg>
            <div className="add-task">Add Tasklist</div>
          </a>
        </div>
        <div hidden={!showTaskForm}>
          <CreateProjectForm showTaskForm={() => setShowTaskForm(false)} />
        </div>
      </span>
    </div>
  );
}

export default HomePage;
