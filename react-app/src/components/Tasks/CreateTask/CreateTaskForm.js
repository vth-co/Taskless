import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createTask } from "../../../store/tasks";
import "./CreateTask.css";

function CreateTaskForm({ project, setShowModal }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (title.length >= 50) {
      setErrors(["Title: Max length of 50 characters reached."]);
    } else if (title.length <= 3) {
      setErrors(["Please input a title of 3 or more characters."]);
    } else if (content.length <= 3) {
      setErrors(["Please input a content of 3 or more characters."]);
    } else if (content.length >= 255) {
      setErrors(["Content: Max length of 255 characters reached."]);
    } else {
      setErrors([]);
    }
  }, [title, content]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const new_task = {
      title,
      content,
      project_id: project?.id,
      //   user_id: user?.id,
    };

    const data = await dispatch(createTask(new_task));
    if (data.errors) {
      setErrors(data.errors);
    } else {
      setShowModal(false);
    }
  };

  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2 className="form-title">Add Task</h2>
          <div>
            {errors &&
              errors.map((error, ind) => (
                <div className="error-message" key={ind}>
                  {error}
                </div>
              ))}
          </div>
          <div className="project-form">
            <div className="label-container">
              <label>Title</label>
            </div>
            <input
              className="input"
              value={title}
              placeholder="Title"
              type="text"
              name="Name"
              onChange={(e) => setTitle(e.target.value)}
              maxLength="255"
            />
            <div className="label-container">
              <label>Description</label>
            </div>
            <input
              className="input"
              value={content}
              placeholder="Description"
              type="text"
              name="Name"
              onChange={(e) => setContent(e.target.value)}
              maxLength="255"
            />
          </div>
          <div className="post-cancel-button-container">
            <button className="post-button" type="submit">
              Add task
            </button>
            <button
              className="cancel-task-button"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateTaskForm;
