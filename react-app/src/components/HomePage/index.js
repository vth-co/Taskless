import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import DisplayProjectsSideBar from "../Projects/DisplayProjectsSideBar";

function HomePage() {
  const user = useSelector((state) => state.session.user);
  const projects = useSelector((state) => state.projects);
  const projectsArr = Object.values(projects);
  const filterProjectsArr = projectsArr.filter(
    (project) => project.user_id === user?.id
  );

  if (!user) {
    return <Redirect to='/' />;
  }

  return (
    <div>
      {filterProjectsArr.map((project) => (
        <div>
          <DisplayProjectsSideBar project={project} />
        </div>
      ))}
    </div>
  );
}

export default HomePage;
