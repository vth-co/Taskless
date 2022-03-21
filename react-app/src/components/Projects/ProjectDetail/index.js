import { useSelector } from "react-redux";
import { NavLink, useLocation, useParams } from "react-router-dom";
import CreateTaskModal from "../../Tasks/CreateTask";
import CreateTaskForm from "../../Tasks/CreateTask/CreateTaskForm";
import DisplayTasks from "../../Tasks/DisplayTaskModal";
import DisplayProjectsSideBar from "../DisplayProjectsSideBar";
import ProjectEditDeleteModal from "../ProjectEditDeleteModal";

const ProjectDetail = () => {
  const { id } = useParams();
  const projects = useSelector((state) => state.projects);
  const projectsArr = Object.values(projects);
  const filteredArr = projectsArr.filter((project) => project?.id === +id);

  return (
    <div>
      {filteredArr.map((proj) => (
        <div>
          <div className="project-container">
            <div>
            <h2>{proj?.title}</h2>
              <div>
                <ProjectEditDeleteModal project={proj} />
              </div>
              <div className="task-container">
                <DisplayTasks project={proj} />
              </div>
              <div>
                <CreateTaskModal project={proj}/>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectDetail;
