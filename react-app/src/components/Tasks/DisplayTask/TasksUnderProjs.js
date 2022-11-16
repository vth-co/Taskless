// import { useState } from "react";
import { useSelector } from "react-redux";
import Checkbox from "../../Checkbox";
import TaskEditDeleteModal from "../TaskEditDeleteModal";
import "./Tasks.css";

function DisplayTasks({ project }) {
  const tasks = useSelector((state) => state.tasks);
  const tasksArr = Object.values(tasks);
  const filterTasksArr = tasksArr.filter(
    (task) => task.project_id === project?.id
  );

  return (
    <div>
      {filterTasksArr.map((task) => (
        <div className="task-container" key={task.id}>
          <div className="task-edit-container">
            <div className="task-checkbox">
              <Checkbox task={task} />
              <p className="task-title">{task.title}</p>
            </div>
            <TaskEditDeleteModal project={project} task={task} />
          </div>
          <p className="task-content">{task.content}</p>
        </div>
      ))}
    </div>
  );
}

export default DisplayTasks;
