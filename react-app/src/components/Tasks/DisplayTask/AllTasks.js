import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Checkbox from "../../Checkbox";
import TaskEditDeleteModal from "../TaskEditDeleteModal";

function DisplayTasks2({ task, project }) {
  const user = useSelector((state) => state.session.user);


  if (!user) {
    return <Redirect to="/" />;
  }

  return (
      <div className="task-container" key={task.id}>
        <div className="task-edit-container">
          <div className="task-checkbox">
            <Checkbox task={task} />
            <p className="task-title">
              {task.title}
            </p>
          </div>
          <TaskEditDeleteModal task={task} />
        </div>
        <p className="task-content">{task.content}</p>
      </div>
  );
}

export default DisplayTasks2;
