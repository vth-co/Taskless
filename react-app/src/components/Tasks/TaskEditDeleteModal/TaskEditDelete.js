import { useDispatch } from "react-redux";
import { deleteTask } from "../../../store/tasks";
import EditTaskFormModal from "../EditTaskFormModal";

function TaskEditDelete({ project, task }) {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();

    dispatch(deleteTask(task.id));
  };
  return (
    <div className="edit-buttons-container">
      <div className="edit-delete-container">
        <EditTaskFormModal project={project} task={task} />
        <li class="menu_separator"></li>
        <button className="delete-button" onClick={handleClick}>
          <i className="fa-solid fa-trash-can"></i> Delete
        </button>
      </div>
    </div>
  );
}

export default TaskEditDelete;
