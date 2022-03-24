import { useDispatch } from "react-redux";
import { deleteTask } from "../../../store/tasks";
import EditTaskFormModal from "../EditTaskFormModal";

function TaskEditDelete({ project, task }) {

    const dispatch = useDispatch();
    
    const handleClick = (e) => {
        e.preventDefault()

        dispatch(deleteTask(task.id))
    }
    return (
        <div>
            <EditTaskFormModal project={project} task={task} />
            <button className="project-delete-button" onClick={handleClick}>
                Delete
            </button>
        </div>
    )
}

export default TaskEditDelete;
