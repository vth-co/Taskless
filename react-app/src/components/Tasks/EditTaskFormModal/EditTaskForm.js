import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../../../store/tasks";
import { useEditModal } from "../TaskEditDeleteModal";
import "./EditTask.css";

function EditTaskForm({ project, task, setShowModal }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(task.title);
  const [content, setContent] = useState(task.content);
  const [errors, setErrors] = useState([]);
  const { setShowEditModal } = useEditModal();

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

    const edit_task = {
      id: task.id,
      project_id: project.id,
      title,
      content,
    };
    const data = await dispatch(editTask(edit_task));
    if (data.errors) {
      setErrors(data.errors);
    } else {
      setShowModal(false);
      setShowEditModal(false);
    }
  };

  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2 className="form-title">Edit Task</h2>
          <div>
            {errors &&
              errors.map((error, ind) => (
                <div className="error-message" key={ind}>
                  {error}
                </div>
              ))}
          </div>
          <div>
            <div className="field">
              <div className="label-container">
                <label>Title</label>
              </div>
              <input
                className="input"
                value={title}
                type="text"
                name="Name"
                onChange={(e) => setTitle(e.target.value)}
                maxLength="50"
              />
            </div>
            <div className="field">
              <div className="label-container">
                <label>Content</label>
              </div>
              <input
                className="input"
                value={content}
                type="text"
                name="Description"
                onChange={(e) => setContent(e.target.value)}
                maxLength="255"
              />
            </div>
          </div>
          <div className="save-cancel-container">
            <button className="save-button" type="submit">
              Save
            </button>
            <button
              className="cancel-button"
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

export default EditTaskForm;
