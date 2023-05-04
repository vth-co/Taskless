import { useSelector } from "react-redux";
import DisplayTasks2 from "../Tasks/DisplayTask/AllTasks";

const CompletedTasks = ({ task }) => {
  const completedState = useSelector((state) => state.tasks);
  const tasks = Object.values(completedState).filter((task) => {
    return task.completed;
  });

  return (
    <div className="main-content">
      <h1 className="tasklist-title">Completed Tasks</h1>
      {tasks?.map((task) => (
          <div key={task?.id}>
            <DisplayTasks2 task={task} />
          </div>
      ))}
    </div>
  );
};

export default CompletedTasks;
