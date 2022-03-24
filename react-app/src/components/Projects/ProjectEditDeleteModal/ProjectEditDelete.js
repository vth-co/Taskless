import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteProject } from "../../../store/projects";
import EditProjectFormModal from "../../Projects/EditProjectFormModal"

function ProjectEditDelete({ project }) {

    const dispatch = useDispatch();
    const history = useHistory();


    const handleClick = async (e) => {
        e.preventDefault()

        const data = await dispatch(deleteProject(project.id))
        if (data) {
            history.push(`/project`)
        }
    }
    return (
        <div className="">
            <EditProjectFormModal project={project} />
            <button className="project-delete-button" onClick={handleClick}>
                Delete
            </button>
        </div>
    )
}

export default ProjectEditDelete;
