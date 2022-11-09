import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createProject } from "../../../store/projects";
import "./CreateProject.css";

function CreateProjectForm({ setShowModal }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [errors, setErrors] = useState([]);
  const user = useSelector((state) => state.session.user);
  const history = useHistory();

  // useEffect(() => {
  //   if (title.length >= 50) {
  //     setErrors(["Max length of 50 characters reached."]);
  //   } else if (title.length < 1) {
  //     setErrors(["Please input a title of 1 or more characters."]);
  //   } else {
  //     setErrors([]);
  //   }
  // }, [title]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const new_project = {
      title,
      user_id: user?.id,
    };

    const data = await dispatch(createProject(new_project));
    if (data.errors) {
      setErrors(data.errors);
    } else {
      setShowModal(false);
      // showTaskForm()
      setTitle("");
      history.push(`/app`);
    }
  };

  const handleCancel = async () => {
    setShowModal(false);

    // showTaskForm()
    setTitle("");
  };

  return (
    <div>
      <h4 className="form-title">Add project</h4>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div>
            {errors.map((error, ind) => (
              <div className="errors" key={ind}>
                {error}
              </div>
            ))}
          </div>
          <div className="field-label-button-container">
            <div className="field">
              <div className="login-label-container">
                <label>Name</label>
              </div>
              <input
                className="input"
                // placeholder="Title"
                value={title}
                type="text"
                name="Name"
                onChange={(e) => setTitle(e.target.value)}
                maxLength="50"
              />
            </div>
            <div className="post-cancel-button-container">
              <button className="cancel-project-button" onClick={handleCancel}>
                Cancel
              </button>
              <button className="post-button" type="submit">
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateProjectForm;
