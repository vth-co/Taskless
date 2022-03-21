import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ProjectEditDeleteModal from "../ProjectEditDeleteModal";

function DisplayProjectsSideBar({ project }) {

  return (
    <div>
      <div>
        <div key={project.id}>
          <NavLink to={`/project/${project.id}`} project={project}>{project.title}</NavLink>
          <ProjectEditDeleteModal project={project} />
        </div>
      </div>
    </div>
  );
}

export default DisplayProjectsSideBar;
