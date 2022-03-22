import { useDispatch } from "react-redux"
import TaskEditDeleteModal from "../TaskEditDeleteModal";


const TaskDetail = ({ task }) => {

    const dispatch = useDispatch();

    return (
        <div>
            <h2>{task.title}</h2>
            <h3>{task.content}</h3>
            <TaskEditDeleteModal />
        </div>
    )
}

export default TaskDetail;
