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
    <div className="form-container">
      <div className="edit-delete-container">
        <EditTaskFormModal project={project} task={task} />
        <button className="delete-button" onClick={handleClick}>
          <i className="fa-solid fa-trash-can"></i> Delete task
        </button>
      </div>
    </div>
  );
}

export default TaskEditDelete;
