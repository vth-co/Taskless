import { useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";

function DisplayTasks2({ task }) {

  const user = useSelector(state => state.session.user)
  if (!user) {
    return <Redirect to="/" />;
  }


  return (
      <div>
        <div className="project-container" key={task.id}>
          <NavLink
            className="project-titles"
            to={`/task/${task.id}`}
            task={task}
          >
            {task.title}
          </NavLink>
          <p>{task.content}</p>
        </div>
      </div>
  );
}

export default DisplayTasks2;
