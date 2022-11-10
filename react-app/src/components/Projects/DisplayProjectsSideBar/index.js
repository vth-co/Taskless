import { useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import ProjectEditDeleteModal from "../ProjectEditDeleteModal";
import "./SideBar.css";

function DisplayProjectsSideBar({ project }) {
  const user = useSelector((state) => state.session.user);
  if (!user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="project-container" key={project.id}>
      <NavLink
        className="project-links"
        to={`/project/${project.id}`}
        project={project}
      >
        <li className="project-titles">{project.title}</li>
      </NavLink>
      <ProjectEditDeleteModal project={project} />
    </div>
  );
}

export default DisplayProjectsSideBar;
