import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteProject } from "../../../store/projects";
import "./DeleteForm.css";

const DeleteForm = ({ project, setShowModal }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();

    const data = await dispatch(deleteProject(project.id));
    if (data) {
      setShowModal(false)
      history.push(`/app`);
    }
  };

  return (
    <div className="delete-container">
      <div className="delete-form">
        <p className="warning">Are you sure you want to delete {project.title}?</p>
        <div className="button-group">
          <button className="cancel-button" onClick={() => setShowModal(false)}>
            Cancel
          </button>
          <button className="post-button" onClick={handleClick}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteForm;
