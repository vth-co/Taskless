import { useSelector } from 'react-redux'


const FinishedTasks = ({task}) => {

    const finishedState = useSelector(state => state.tasks)

    return (
        <div>
            <div>
                <h2>Finished Tasks</h2>
            </div>
        </div>
    )
}

export default FinishedTasks;
