import { useSelector } from "react-redux";
import {  Redirect, useHistory, useParams } from "react-router-dom";
import CreateTaskModal from "../../Tasks/CreateTask";
import DisplayTasks from "../../Tasks/DisplayTask";
import ProjectEditDeleteModal from "../ProjectEditDeleteModal";
import "./ProjectDetail.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const projects = useSelector((state) => state.projects);
  const user = useSelector((state) => state.session.user);
  const projectsArr = Object.values(projects);
  const filteredArr = projectsArr.filter((project) => project?.id === +id);

  if (filteredArr.length < 1) {
    history.push('/404-Not-Found')
  }

  if (filteredArr.length >= 1) {
    if (filteredArr[0].user_id !== user?.id) {
      history.push('/404-Not-Found')
    }
  }

  if (!user) {
    return <Redirect to="/" />;
  }
  

  return (
    <div  className="project-task-container">
      {filteredArr.map((proj) => (
        
        <div key={proj.id}>
          <div className="title-edit">
            <h2>Tasklist: {proj?.title}</h2>
            <ProjectEditDeleteModal key={proj.id} project={proj} />
          </div>
          <div className="task-container">
            <DisplayTasks key={proj.id} project={proj} />
          </div>
          <div>
            <CreateTaskModal key={proj.id} project={proj} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectDetail;
