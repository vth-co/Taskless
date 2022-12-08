import DeleteFormModal from "../DeleteProject/DeleteModal";
import EditProjectFormModal from "../EditProjectFormModal/EditModal"

function ProjectEditDelete({ project }) {

    return (
        <div className="edit-buttons-container">
            <div className="edit-delete-container">
            <EditProjectFormModal project={project} />
            <li class="menu_separator"></li>
            <DeleteFormModal project={project} />
            </div>
        </div>
    )
}

export default ProjectEditDelete;
