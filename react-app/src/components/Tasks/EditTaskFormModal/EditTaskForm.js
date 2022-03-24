import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../../../store/tasks";
import { useEditModal } from "../TaskEditDeleteModal";

function EditTaskForm({ project, task, setShowModal }) {
    const dispatch = useDispatch();
    const [title, setTitle] = useState(task.title);
    const [content, setContent] = useState(task.content);
    const [errors, setErrors] = useState([]);
    const { setShowEditModal } = useEditModal();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const edit_task = {
            id: task.id,
            project_id:project.id,
            title,
            content
        }
        const data = await dispatch(editTask(edit_task));
        if (data.errors) {
            setErrors(data.errors)
        } else {
            setShowModal(false)
            setShowEditModal(false)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Edit Task</h2>
                <div>
                    {errors && errors.map((error, ind) => (
                        <div className='error-message' key={ind}>{error}</div>
                    ))}
                </div>
                <input 
                    className="title-input"
                    value={title}
                    type='text'
                    name='Name'
                    onChange={(e) => setTitle(e.target.value)}
                    maxLength='255'
                />
                <input 
                    className="content-input"
                    value={content}
                    type='text'
                    name='Description'
                    onChange={(e) => setContent(e.target.value)}
                    maxLength='255'
                />
                <button className="post-button" type='submit'>Submit</button>
                <button className="post-button" onClick={() => setShowModal(false)}>Cancel</button>
            </form>
        </div>
    )
}

export default EditTaskForm;
