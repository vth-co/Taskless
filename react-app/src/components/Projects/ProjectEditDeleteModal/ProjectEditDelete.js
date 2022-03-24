import { useDispatch } from "react-redux";
import { deleteProject } from "../../../store/projects";
import EditProjectFormModal from "../../Projects/EditProjectFormModal"

function ProjectEditDelete({ project }) {

    const dispatch = useDispatch();
    

    const handleClick = (e) => {
        e.preventDefault()

        dispatch(deleteProject(project.id))
    }
    return (
        <div className="project-edit-delete-buttons">
            <EditProjectFormModal project={project} />
            <button className="project-delete-button" onClick={handleClick}>
                Delete
            </button>
        </div>
    )
}

export default ProjectEditDelete;
