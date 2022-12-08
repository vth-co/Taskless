import { useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import CreateProjectModal from "../Projects/CreateProject/CreateModal";
import DisplayProjectsSideBar from "../Projects/DisplayProjectsSideBar";
import "./Sidebar.css";

const Sidebar = () => {
  const user = useSelector((state) => state.session.user);

  const tasks = useSelector((state) => state.tasks);
  const allTasks = Object.values(tasks);
  const filterTasksArr = allTasks.filter((task) => task.user_id === user?.id);
  const completedTasks = Object.values(tasks).filter((task) => {
    return task.completed;
  });
  const numberOfAllTasks = filterTasksArr.length;
  const numberOfCompletedTasks = completedTasks.length;

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
        <div className="sidebar-links">
          <NavLink to={"/app"} className="completed-link">
            <i class="fa-solid fa-inbox"></i> All
            <span className="number">{numberOfAllTasks}</span>
          </NavLink>
          <NavLink to={"/app/completed"} className="completed-link">
            <i class="fa-solid fa-list-check"></i>Completed Tasks
            <span className="number">{numberOfCompletedTasks}</span>
          </NavLink>
        </div>
        <div className="sidebar-title-add">
          <h3>Projects</h3>
          <CreateProjectModal />
        </div>
        {filterProjectsArr.map((project) => (
          <div key={project.id}>
            <DisplayProjectsSideBar key={project.id} project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
