import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTask } from "../../../store/tasks";
import { useEditModal } from "../TaskEditDeleteModal";
import "./EditTask.css";

function EditTaskForm({ project, task, setShowModal }) {
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [title, setTitle] = useState(task.title);
  const [content, setContent] = useState(task.content);
  const [errors, setErrors] = useState([]);
  const { setShowEditModal } = useEditModal();

  const projects = useSelector((state) => state.projects);
  const projectsArr = Object.values(projects);

  const [project_id, setProjectId] = useState(task.project_id);

  const filterProjectsArr = projectsArr.filter(
    (project) => project.user_id === user?.id
  );

  useEffect(() => {
    if (title.length >= 255) {
      setErrors(["Title: Max length of 255 characters reached."]);
    } else if (title.length < 1) {
      setErrors(["Please input a title of 1 or more characters."]);
    // } else if (content.length < 3) {
    //   setErrors(["Please input a content of 3 or more characters."]);
    // } else if (content.length >= 255) {
    //   setErrors(["Content: Max length of 255 characters reached."]);
    } else {
      setErrors([]);
    }
  }, [title]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const edit_task = {
      id: task.id,
      project_id,
      title,
      content,
      user_id: user?.id,
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
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {/* <h2 className="form-title">Edit Task</h2> */}
          <div>
            {errors &&
              errors.map((error, ind) => (
                <div className="errors" key={ind}>
                  {error}
                </div>
              ))}
          </div>
          <div>
            <div className="field">
              <div className="login-label-container">
                {/* <label>Title</label> */}
              </div>
              <input
                className="edit-task-input"
                value={title}
                type="text"
                name="Name"
                onChange={(e) => setTitle(e.target.value)}
                maxLength="255"
              />
            </div>
            <div className="field">
              <div className="login-label-container">
                {/* <label>Content</label> */}
              </div>
              <textarea
                className="edit-description-input"
                value={content}
                type="textarea"
                name="Description"
                onChange={(e) => setContent(e.target.value)}
                maxLength="255"
              />
            </div>
          </div>
          <div className="post-cancel-button-container">
            <select
              className="select-project-button"
              value={project_id}
              onChange={(e) => setProjectId(e.target.value)}
            >
              {filterProjectsArr.map((project) => (
                <option key={project.id} value={project.id}>
                  {project.title}
                </option>
              ))}
            </select>
            <button
              className="cancel-task-button"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
            <button className="post-button" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
  );
}

export default EditTaskForm;
