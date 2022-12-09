import { useSelector } from 'react-redux'
import DisplayTasks2 from '../Tasks/DisplayTask/AllTasks';


const CompletedTasks = ({task}) => {
    const completedState = useSelector(state => state.tasks)
    const tasks = Object.values(completedState)
        .filter(task => {
            return task.completed
        })


    return (
        <div className='main-content'>
            <div>
                <h2 className="tasklist-title">Completed Tasks</h2>
            </div>
            {tasks?.map(task => {
                return (
                    <p key={task?.id}>
                        <DisplayTasks2 task={task} />
                    </p>
                )
            })}
        </div>
    )
}

export default CompletedTasks;
