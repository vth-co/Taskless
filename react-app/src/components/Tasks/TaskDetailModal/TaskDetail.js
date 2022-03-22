import { useDispatch } from "react-redux"
import TaskEditDeleteModal from "../TaskEditDeleteModal";


const TaskDetail = ({ project ,task }) => {

    const dispatch = useDispatch();

    return (
        <div>
            <h2>{task.title}</h2>
            <h3>{task.content}</h3>
            <TaskEditDeleteModal project={project} task={task}/>
        </div>
    )
}

export default TaskDetail;
