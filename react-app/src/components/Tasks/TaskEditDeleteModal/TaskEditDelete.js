import DeleteFormModal from "../DeleteTask/DeleteModal";
import EditTaskFormModal from "../EditTask/EditModal";

function TaskEditDelete({ project, task }) {
  return (
    <>
      <div className="edit-buttons-container">
          <EditTaskFormModal project={project} task={task} />
          <li class="menu_separator"></li>
          <DeleteFormModal task={task} />
      </div>
    </>
  );
}

export default TaskEditDelete;
