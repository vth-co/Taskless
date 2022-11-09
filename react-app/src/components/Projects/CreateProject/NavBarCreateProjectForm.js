import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createProject } from "../../../store/projects";
import "./CreateProject.css";

// function CreateProjectForm({ setShowModal }) {
//   const dispatch = useDispatch();
//   const [title, setTitle] = useState("");
//   const [errors, setErrors] = useState([]);
//   const user = useSelector((state) => state.session.user);
//   const history = useHistory();

//   useEffect(() => {
//     if (title.length >= 50) {
//       setErrors(["Max length of 50 characters reached."]);
//     } else if (title.length < 3) {
//       setErrors(["Please input a title of 3 or more characters."]);
//     } else {
//       setErrors([]);
//     }
//   }, [title]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const new_project = {
//       title,
//       user_id: user?.id,
//     };

//     const data = await dispatch(createProject(new_project));
//     if (data.errors) {
//       setErrors(data.errors);
//     } else {
//       setShowModal(false);
//       history.push(`/app`);
//     }
//   };

//   return (
//     <div className="form-container">
//       <form onSubmit={handleSubmit}>
//         <h2 className="form-title">Add tasklist</h2>
//         <div>
//           {errors.map((error, ind) => (
//             <div className="errors" key={ind}>
//               {error}
//             </div>
//           ))}
//         </div>
//         <div className="field-label-button-container">
//           <div className="field">
//             <div className="login-label-container">
//               <label>Title</label>
//             </div>
//             <input
//               className="input"
//               // placeholder="Title"
//               value={title}
//               type="text"
//               name="Name"
//               onChange={(e) => setTitle(e.target.value)}
//               maxLength="50"
//             />
//           </div>
//           <div className="post-cancel-button-container">
//             <button className="post-button" type="submit">
//               Add
//             </button>
//             <button
//               className="cancel-project-button"
//               onClick={() => setShowModal(false)}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default CreateProjectForm;
