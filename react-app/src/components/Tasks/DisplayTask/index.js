import { useState } from "react";
import { useSelector } from "react-redux";
import Checkbox from "../../Checkbox";
import TaskDetailModal from "../TaskDetailModal";
import TaskEditDeleteModal from "../TaskEditDeleteModal";
import "./DisplayTask.css"

function DisplayTasks({ project }) {
  // const user = useSelector((state) => state.session.user);
  const tasks = useSelector((state) => state.tasks);
  const tasksArr = Object.values(tasks);
  const filterTasksArr = tasksArr.filter(
    (task) => task.project_id === project?.id
  );

  const [finished, setFinished] = useState();

    const handleChangeOne = () => {
        setFinished(!finished);
      };
  return (
    <div>
      {filterTasksArr.map((task) => (
        <div className="task-container" key={task.id}>
          <Checkbox task={task} />
          <TaskDetailModal project={project} task={task} />
          <TaskEditDeleteModal project={project} task={task} />
          <p>{task.content}</p>
        </div>
      ))}
    </div>
  );
}

export default DisplayTasks;
