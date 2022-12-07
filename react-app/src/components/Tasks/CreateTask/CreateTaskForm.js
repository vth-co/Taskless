import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTask } from "../../../store/tasks";
import "./CreateTask.css";

function CreateTaskForm({ project, setShowModal }) {
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState([]);
  // const history = useHistory();

  const projects = useSelector((state) => state.projects);
  const projectsArr = Object.values(projects);

  const [project_id, setProjectId] = useState(project?.id);


  const filterProjectsArr = projectsArr.filter(
    (project) => project.user_id === user?.id
  );

  // useEffect(() => {
  //   if (title.length >= 255) {
  //     setErrors(["Title: Max length of 255 characters reached."]);
  //   } else if (title.length < 1) {
  //     setErrors(["Please input a title of 1 or more characters."]);
  //   // } else if (content.length < 3) {
  //   //   setErrors(["Please input a content of 3 or more characters."]);
  //   // } else if (content.length >= 255) {
  //   //   setErrors(["Content: Max length of 255 characters reached."]);
  //   } else {
  //     setErrors([]);
  //   }
  // }, [title]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const new_task = {
      title,
      content,
      project_id,
      user_id: user?.id,
    };

    const data = await dispatch(createTask(new_task));
    if (data.errors) {
      setErrors(data.errors);
    } else {
      setShowModal(false);
      setTitle("");
      setContent("");
      setErrors([]);
      // history.push(`/app`);
    }
  };

  const handleCancel = async () => {
    setShowModal(false);

    // showTaskForm()
    setTitle("");
    setContent("");
    setErrors([]);
    // setProjectId(project?.id)
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {/* <h2 className="form-title">Add task</h2> */}
        <div>
          {errors &&
            errors.map((error, ind) => (
              <div className="errors" key={ind}>
                {error}
              </div>
            ))}
        </div>
        <div className="field-label-button-container">
          <div className="field">
            <div className="login-label-container">
              {/* <label>Title</label> */}
            </div>
            <input
              className="task-input"
              value={title}
              placeholder="Task name"
              type="text"
              name="Name"
              onChange={(e) => setTitle(e.target.value)}
              maxLength="255"
            />
          </div>
          <div className="field">
            <div className="login-label-container">
              {/* <label>Description</label> */}
            </div>
            <textarea
              className="description-input"
              value={content}
              placeholder="Description"
              type="textarea"
              name="Description"
              onChange={(e) => setContent(e.target.value)}
              maxLength="255"
            />
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
            <button className="cancel-task-button" onClick={handleCancel}>
              Cancel
            </button>
            <button className="post-button" type="submit">
              Add task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateTaskForm;
