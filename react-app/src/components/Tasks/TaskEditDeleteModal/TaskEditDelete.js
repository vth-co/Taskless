import DeleteFormModal from "../DeleteTask/DeleteModal";
import EditTaskFormModal from "../EditTask/EditModal";

function TaskEditDelete({ project, task }) {
  return (
    <>
      <div className="edit-buttons-container">
          <EditTaskFormModal project={project} task={task} />
          <li className="menu_separator"></li>
          <DeleteFormModal task={task} />
      </div>
    </>
  );
}

export default TaskEditDelete;
