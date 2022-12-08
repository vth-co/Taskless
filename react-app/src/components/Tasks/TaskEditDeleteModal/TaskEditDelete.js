import DeleteFormModal from "../DeleteTask/DeleteModal";
import EditTaskFormModal from "../EditTask/EditModal";

function TaskEditDelete({ project, task }) {

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
