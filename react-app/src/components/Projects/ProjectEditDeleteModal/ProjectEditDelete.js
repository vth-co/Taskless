import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteProject } from "../../../store/projects";
import DeleteFormModal from "../DeleteProject/DeleteModal";
import EditProjectFormModal from "../EditProjectFormModal/EditModal"

function ProjectEditDelete({ project }) {

    const dispatch = useDispatch();
    const history = useHistory();


    const handleClick = async (e) => {
        e.preventDefault()

        const data = await dispatch(deleteProject(project.id))
        if (data) {
            history.push(`/app`)
        }
    }
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
