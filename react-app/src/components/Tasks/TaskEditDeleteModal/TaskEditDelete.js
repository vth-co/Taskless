import { useDispatch } from "react-redux";
import { deleteTask } from "../../../store/tasks";
import DeleteFormModal from "../../DeleteTask/DeleteModal";
import EditTaskFormModal from "../EditTask/EditModal";

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
        <DeleteFormModal task={task} />
      </div>
    </div>
  );
}

export default TaskEditDelete;
