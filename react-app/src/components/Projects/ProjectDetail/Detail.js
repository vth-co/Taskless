import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import CreateTaskForm from "../../Tasks/CreateTask/CreateTaskForm";
import DisplayTasks from "../../Tasks/DisplayTask/TasksUnderProjs";
import ProjectEditDeleteModal from "../ProjectEditDeleteModal";
import "./ProjectDetail.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);
  const [showModal, setShowModal] = useState(false);
  const projects = useSelector((state) => state.projects);
  const projectsArr = Object.values(projects);
  const filteredArr = projectsArr.filter((project) => project?.id === +id);

  if (filteredArr.length < 1) {
    history.push("/404-Not-Found");
  }

  if (filteredArr.length >= 1) {
    if (filteredArr[0].user_id !== user?.id) {
      history.push("/404-Not-Found");
    }
  }

  if (!user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="main-content">
      {filteredArr.map((proj) => (
        <div key={proj.id}>
          <div className="title-edit">
            <h1 className="tasklist-title">{proj?.title}</h1>
            <div className="edit">
              <ProjectEditDeleteModal key={proj.id} project={proj} />
            </div>
          </div>
          <div>
            <DisplayTasks key={proj.id} project={proj} />
          </div>
          <div hidden={showModal}>
            <a className="main-add" onClick={() => setShowModal(true)}>
              <svg className="add-circle" onClick={() => setShowModal(true)}>
                <g transform="translate(-.25 0)">
                  <line
                    x1="3"
                    y1="10"
                    x2="18"
                    y2="10"
                    stroke="white"
                  ></line>
                  <line
                    x1="10.5"
                    y1="3"
                    x2="10.5"
                    y2="17"
                    stroke="white"
                  ></line>
                  <g mask="url(#ahat)">
                    <line
                      x1="3"
                      y1="10"
                      x2="18"
                      y2="10"
                      stroke="currentcolor"
                    ></line>
                    <line
                      x1="10.5"
                      y1="3"
                      x2="10.5"
                      y2="17"
                      stroke="currentcolor"
                    ></line>
                  </g>
                </g>
              </svg>
              <div className="button-text">Add task</div>
            </a>
          </div>
          <div hidden={!showModal}>
            <CreateTaskForm setShowModal={setShowModal} project={proj}/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectDetail;
