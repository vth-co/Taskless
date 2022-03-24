import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createTask} from "../../../store/tasks";
import "./CreateTask.css"

function CreateTaskForm({ project, setShowModal }) {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    useEffect(() => {
        if (title.length >= 255) {
            setErrors(['Max length of 255 characters reached.'])
        } else {
            setErrors([])
        }
    }, [title])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const new_task = {
          title,
          content,
          project_id: project?.id
        //   user_id: user?.id,
        };

        const data = await dispatch(createTask(new_task));
        if (data.errors) {
            setErrors(data.errors);
        } else {
            setShowModal(false)
            history.push(`/project/${project.id}`)
        }
    }

    return (
      <div className="project-create-container">
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
            <label>Title</label>
            <input
              className="title-input"
              value={title}
              placeholder="Title"
              type="text"
              name="Name"
              onChange={(e) => setTitle(e.target.value)}
              maxLength="255"
            />
            <label>Description</label>
            <input
              className="title-input"
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
          <button className="cancel-button" onClick={() => setShowModal(false)}>
            Cancel
          </button>
          </div>
        </form>
      </div>
    );
}

export default CreateTaskForm;
