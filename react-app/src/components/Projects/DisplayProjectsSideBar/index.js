import { NavLink } from "react-router-dom";
import CreateProjectModal from "../CreateProject";
import ProjectEditDeleteModal from "../ProjectEditDeleteModal";
import "./SideBar.css";

function DisplayProjectsSideBar({ project }) {
  return (
      <div>
        <div className="project-container" key={project.id}>
          <NavLink
            className="project-titles"
            to={`/project/${project.id}`}
            project={project}
          >
            {project.title}
          </NavLink>
          <ProjectEditDeleteModal project={project} />
        </div>
      </div>
  );
}

export default DisplayProjectsSideBar;
