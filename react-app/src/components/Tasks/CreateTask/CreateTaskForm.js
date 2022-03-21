import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createTask} from "../../../store/tasks";


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
          <h2>Add Task</h2>
          <div>
            {errors &&
              errors.map((error, ind) => (
                <div className="error-message" key={ind}>
                  {error}
                </div>
              ))}
          </div>
          <div className="project-form">
            <input
              className="title-input"
              type="text"
              name="Name"
              onChange={(e) => setTitle(e.target.value)}
              maxLength="255"
            />
            <input
              className="title-input"
              type="text"
              name="Name"
              onChange={(e) => setContent(e.target.value)}
              maxLength="255"
            />
          </div>
          <button className="post-button" type="submit">
            Add task
          </button>
          <button className="post-button" onClick={() => setShowModal(false)}>
            Cancel
          </button>
        </form>
      </div>
    );
}

export default CreateTaskForm;
