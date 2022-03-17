import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createProject } from "../../../store/projects";



function CreateProject() {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('');
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

        const new_project = {
            title,
        }

        const data = await dispatch(createProject(new_project));
        if (data.errors) {
            setErrors(data.errors);
        } 
    }

    return (
        <div className="project-create-container">
            <form>
                <h2>Add Project</h2>
                <div>
                    {errors && errors.map((error, ind) => (
                        <div className='error-message' key={ind}>{error}</div>
                    ))} 
                </div>
                <div className="project-form">
                    <input
                        className="title-input"
                        type='text'
                        name='Name'
                        onChange={(e) => setTitle(e.target.value)}
                        maxLength='255'
                    />
                </div>
                </form>    
            </div>
    )
}

export default CreateProject
