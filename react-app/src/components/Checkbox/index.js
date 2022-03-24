import { useState } from "react";
import { useDispatch } from "react-redux";

function Checkbox({ task }) {
  const dispatch = useDispatch();
  const [finished, setFinished] = useState(task.finished);


  return (
      <input
        type="checkbox"
        defaultChecked={finished}
        onChange={(e) => setFinished()}
      />
  );
}

export default Checkbox;
