import { useState } from "react";
import { useDispatch } from "react-redux";
import "./Checkbox.css";

function Checkbox({ task }) {
  const dispatch = useDispatch();
  const [finished, setFinished] = useState(task.finished);

  return (
    <div>
      {/* <input
        type="checkbox"
        value={finished}
        checked={task?.finished === true}
        onChange={(e) => setFinished(e.target.value)}
      /> */}
      <div className="checkbox-container">
        <button className="checkbox-button" id="empty">
          <i class="fa-regular fa-circle"></i>
        </button>
        <button className="checkbox-button" id="checked">
          <i class="fa-regular fa-circle-check"></i>
        </button>
      </div>
    </div>
  );
}

export default Checkbox;
