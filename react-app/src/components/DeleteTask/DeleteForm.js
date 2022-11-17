import { useDispatch } from "react-redux";
import { deleteTask } from "../../store/tasks";

const DeleteForm = ({ task, setShowModal }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();

    dispatch(deleteTask(task.id));
  };
  return (
    <div className="delete-container">
      <div className="delete-form">
        <p className="warning">Are you sure you want to delete {task.title}?</p>
        <div className="button-group">
          <button className="cancel-button" onClick={() => setShowModal(false)}>Cancel</button>
          <button className="delete-button" onClick={handleClick}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteForm;
