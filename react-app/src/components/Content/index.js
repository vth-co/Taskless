import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import CreateProjectModal from "../Projects/CreateProject";
import CreateProjectForm from "../Projects/CreateProject/CreateProjectForm";
import DisplayProjectsSideBar from "../Projects/DisplayProjectsSideBar";
import "./Content.css";

function Content() {
  const user = useSelector((state) => state.session.user);
  const projects = useSelector((state) => state.projects);
  const projectsArr = Object.values(projects);
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [closeSideBar, setCloseSideBar] = useState(false);
  const filterProjectsArr = projectsArr.filter(
    (project) => project.user_id === user?.id
  );

  if (!user) {
    return <Redirect to="/" />;
  }

  return (
    <div>
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
                class="fa-solid fa-plus"
                onClick={() => setShowTaskForm(true)}
              >
              </svg>
              <div className="add-task">Add Tasklist</div>
            </a>
          </div>
          <div hidden={!showTaskForm}>
            <CreateProjectForm showTaskForm={() => setShowTaskForm(false)} />
          </div>
        </span>
      </div>
    </div>
  );
}

export default Content;
