import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CreateTaskModal from "../../Tasks/CreateTask";
import DisplayTasks from "../../Tasks/DisplayTask";
import ProjectEditDeleteModal from "../ProjectEditDeleteModal";
import "./ProjectDetail.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const projects = useSelector((state) => state.projects);
  const projectsArr = Object.values(projects);
  const filteredArr = projectsArr.filter((project) => project?.id === +id);

  return (
    <div className="project-task-container">
      {filteredArr.map((proj) => (
        <div>
          <div className="title-edit">
            <h2>{proj?.title}</h2>
            <ProjectEditDeleteModal project={proj} />
          </div>
          <div className="task-container">
            <DisplayTasks project={proj} />
          </div>
          <div>
            <CreateTaskModal project={proj} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectDetail;
