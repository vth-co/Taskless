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
            to={`/task/${task.id}`}
          >
            {task.title}
          </NavLink>
        </div>
      </div>
  );
}

export default DisplayTasks2;
