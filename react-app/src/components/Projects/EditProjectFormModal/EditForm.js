import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProject } from "../../../store/projects";
import { useEditModal } from "../ProjectEditDeleteModal";

function EditProjectForm({ project, setShowModal }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(project.title);
  const [errors, setErrors] = useState([]);
  const { setShowEditModal } = useEditModal();
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    if (title.length >= 50) {
      setErrors(["Max length of 50 characters reached."]);
    // } else if (title.length < 3) {
    //   setErrors(["Please input a title of 3 or more characters."]);
    } else {
      setErrors([]);
    }
  }, [title]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const edit_project = {
      id: project.id,
      user_id: user.id,
      title,
    };
    const data = await dispatch(editProject(edit_project));
    if (data.errors) {
      setErrors(data.errors);
    } else {
      setShowModal(false);
      setShowEditModal(false);
    }
  };

  return (
    <div>
      <h4 className="form-title">Edit project</h4>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
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
                <label>Name</label>
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
            <div className="post-cancel-button-container">
              <button
                className="cancel-button"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button className="post-button" type="submit">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProjectForm;
