import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
// import ProjectEditDeleteModal from "../ProjectEditDeleteModal";
import TaskEditDeleteModal from "../TaskEditDeleteModal";

function DisplayTasks ({ project }) {

    // const user = useSelector((state) => state.session.user);
    const tasks = useSelector((state) => state.tasks)
    const tasksArr = Object.values(tasks);
    const filterTasksArr = tasksArr.filter((task) => task.project_id === project?.id);

    return (
        <div>
            {filterTasksArr.map((task) => (
                <div key={task.id}> 
                <NavLink to={`/task/${task.id}`}>{task.title}</NavLink>
                <TaskEditDeleteModal project={project} task={task}/>
                </div>
            ))}
        </div>
    )
}

export default DisplayTasks;
 