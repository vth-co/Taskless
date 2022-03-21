import { useDispatch } from "react-redux"


const TaskDetail = ({ task }) => {

    const dispatch = useDispatch();

    return (
        <div>
            <h2>{task.title}</h2>
        </div>
    )
}

export default TaskDetail;
