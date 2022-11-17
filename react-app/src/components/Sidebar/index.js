import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import CreateProjectModal from "../Projects/CreateProject/CreateModal";
import DisplayProjectsSideBar from "../Projects/DisplayProjectsSideBar";
import "./Sidebar.css";

function Sidebar() {
  const user = useSelector((state) => state.session.user);

  const projects = useSelector((state) => state.projects);
  const projectsArr = Object.values(projects);
  const filterProjectsArr = projectsArr.filter(
    (project) => project.user_id === user?.id
  );

  if (!user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-title-add">
          <h3>Projects</h3>
          <CreateProjectModal />
        </div>
        {filterProjectsArr.map((project) => (
          <div key={project.id} >
            <DisplayProjectsSideBar key={project.id} project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
