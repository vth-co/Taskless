import DeleteFormModal from "../DeleteProject/DeleteModal";
import EditProjectFormModal from "../EditProjectFormModal/EditModal";

function ProjectEditDelete({ project }) {
  return (
    <>
      <div className="edit-buttons-container">
          <EditProjectFormModal project={project} />
          <li className="menu_separator"></li>
          <DeleteFormModal project={project} />
      </div>
    </>
  );
}

export default ProjectEditDelete;
