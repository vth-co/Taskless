import { useDispatch } from "react-redux";
import { deleteTask } from "../../store/tasks";

const DeleteWarning = ({task}) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();

    dispatch(deleteTask(task.id));
  };
  return (
    <div>
      <div>
        <h2>Did you really finish this task? This will delete it!</h2>
      </div>
      <div>
        <button className="project-delete-button" onClick={handleClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteWarning;
