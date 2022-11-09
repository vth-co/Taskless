import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import DisplayTasks2 from "../Tasks/DisplayTask2";
import "./Content.css";
import CreateTaskForm from "../Tasks/CreateTask/CreateTaskForm";

function Content() {
  const user = useSelector((state) => state.session.user);
  const [showModal, setShowModal] = useState(false);
  const tasks = useSelector((state) => state.tasks);
  const tasksArr = Object.values(tasks);
  const filterTasksArr = tasksArr.filter((task) => task.user_id === user?.id);

  if (!user) {
    return <Redirect to="/" />;
  }

  return (
      <div className="main-content">
        <h1 className="tasklist-title">{user.username}'s Tasks</h1>
        {filterTasksArr.map((task) => (
          <div key={task.id}>
            <DisplayTasks2 key={task.id} task={task} />
          </div>
        ))}
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
                  stroke-width="1.5"
                ></line>
                <line
                  x1="10.5"
                  y1="3"
                  x2="10.5"
                  y2="17"
                  stroke="white"
                  stroke-width="1.5"
                ></line>
                <g mask="url(#ahat)">
                  <line
                    x1="3"
                    y1="10"
                    x2="18"
                    y2="10"
                    stroke="currentcolor"
                    stroke-width="1.5"
                  ></line>
                  <line
                    x1="10.5"
                    y1="3"
                    x2="10.5"
                    y2="17"
                    stroke="currentcolor"
                    stroke-width="1.5"
                  ></line>
                </g>
              </g>
            </svg>
            <div className="button-text">Add task</div>
          </a>
        </div>
        <div hidden={!showModal}>
          <CreateTaskForm setShowModal={setShowModal} />
        </div>
      </div>
  );
}

export default Content;
