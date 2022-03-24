import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import DisplayProjectsSideBar from "../Projects/DisplayProjectsSideBar";
import "./HomePage.css";

function HomePage() {
  const user = useSelector((state) => state.session.user);
  const projects = useSelector((state) => state.projects);
  const projectsArr = Object.values(projects);
  const filterProjectsArr = projectsArr.filter(
    (project) => project.user_id === user?.id
  );

  if (!user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="project-main-content">
      <h1>Tasklists:</h1>
      {filterProjectsArr.map((project) => (
        <div>
          <div>
            <DisplayProjectsSideBar key={project.id} project={project} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
