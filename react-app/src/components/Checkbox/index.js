import { useState } from "react";
import { useDispatch } from "react-redux";
import { completeATask } from "../../store/tasks";
import "./Checkbox.css";

function Checkbox({ task }) {
  const [completed, setCompleted] = useState(task?.completed);
  const dispatch = useDispatch();

  const handleComplete = async (e) => {
    e.preventDefault();

    dispatch(completeATask(task?.id));
    setCompleted(!completed);
  };

  return (
    <div>
      <form onClick={handleComplete}>
        <div className="checkbox-container">
          <button className="checkbox-button" value={completed}>
            <i
              className={
                completed ? "fa-solid fa-circle-check" : "fa-regular fa-circle"
              }
            ></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Checkbox;
