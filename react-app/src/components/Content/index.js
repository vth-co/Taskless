import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import CreateProjectModal from "../Projects/CreateProject";
import CreateProjectForm from "../Projects/CreateProject/CreateProjectForm";
import DisplayProjectsSideBar from "../Projects/DisplayProjectsSideBar";
import DisplayTasks2 from "../Tasks/DisplayTask2";
import { getTasks } from '../../store/tasks';
import "./Content.css";
import CreateTaskForm from "../Tasks/CreateTask/CreateTaskForm";

function Content() {
  const user = useSelector((state) => state.session.user);
  const projects = useSelector((state) => state.projects);
  const projectsArr = Object.values(projects);
  const [showModal, setShowModal] = useState(false);
  const [showTaskForm, setShowTaskForm] = useState(false);
  const filterProjectsArr = projectsArr.filter(
    (project) => project.user_id === user?.id
  );
  const tasks = useSelector((state) => state.tasks);
  const tasksArr = Object.values(tasks);
  const filterTasksArr = tasksArr.filter(
    (task) => task.user_id === user?.id
  );



  if (!user) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <div className="project-main-content">
        <h1 className="tasklist-title">{user.username}'s Tasks</h1>
        {/* {filterProjectsArr.map((project) => (
          <div key={project.id}>
            <div>
              <DisplayProjectsSideBar key={project.id} project={project} />
            </div>
          </div>
        ))} */}
        {filterTasksArr.map(task => (
          <div key={task.id}>
              <DisplayTasks2 key={task.id} task={task} />
          </div>
        ))}
        <span className="add-tasklist-button">
          <div hidden={showModal}>
            <a className="main-add" onClick={() => setShowModal(true)}>
              <i class="fa-solid fa-plus"></i>
              <div className="add-task">Add Task</div>
            </a>
          </div>
          <div hidden={!showModal}>
            <CreateTaskForm setShowModal={setShowModal}/>
          </div>
        </span>
      </div>
    </div>
  );
}

export default Content;
