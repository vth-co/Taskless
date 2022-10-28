import { useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import Checkbox from "../../Checkbox";
import TaskEditDeleteModal from "../TaskEditDeleteModal";

function DisplayTasks2({ task }) {
  const user = useSelector((state) => state.session.user);
  if (!user) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <div className="task-container" key={task.id}>
        <div className="task-edit-container">
          <div className="task-checkbox">
            <Checkbox task={task} />
            <NavLink className="task-title" to={`/task/${task.id}`} task={task}>
              {task.title}
            </NavLink>
          </div>
          <TaskEditDeleteModal task={task} />
        </div>
        <p className="task-content">{task.content}</p>
      </div>
    </div>
  );
}

export default DisplayTasks2;
