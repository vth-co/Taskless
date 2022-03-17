import { useDispatch } from "react-redux";
import { useEditModal } from ".";
import { deleteProject } from "../../../store/projects";
import EditProjectFormModal from "../../Projects/EditProjectFormModal"



function ProjectEditDelete({ project }) {

    const dispatch = useDispatch();
    
    const { setShowModal } = useProjectTitleModal()
    const { setShowEditModal } = useEditModal

    const handleClick = (e) => {
        e.preventDefault()

        dispatch(deleteProject(project.id))
        setShowModal(false)
    }
    return (
        <div>
            <EditProjectFormModal />
            <button className="project-delete-button" onClick={handleClick}>
                Delete
            </button>
        </div>
    )
}

export default ProjectEditDelete;
