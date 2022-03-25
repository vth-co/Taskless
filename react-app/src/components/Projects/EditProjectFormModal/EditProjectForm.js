import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProject } from "../../../store/projects";
import { useEditModal } from "../ProjectEditDeleteModal";

function EditProjectForm({ project, setShowModal }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(project.title);
  const [errors, setErrors] = useState([]);
  const { setShowEditModal } = useEditModal();
  const user = useSelector((state) => state.session.user);

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
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2 className="form-title">Edit Title</h2>
          <div>
            {errors &&
              errors.map((error, ind) => (
                <div className="error-message" key={ind}>
                  {error}
                </div>
              ))}
          </div>
          <input
            className="input"
            value={title}
            type="text"
            name="Name"
            onChange={(e) => setTitle(e.target.value)}
            maxLength="255"
          />
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

export default EditProjectForm;
