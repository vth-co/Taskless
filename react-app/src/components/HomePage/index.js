import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import NavBar from "../Navigation/NavBar";
import DisplayProjectsSideBar from "../Projects/DisplayProjectsSideBar";
import ProjectDetail from "../Projects/ProjectDetail";

function HomePage() {
  const user = useSelector((state) => state.session.user);
  const projects = useSelector((state) => state.projects);
  const projectsArr = Object.values(projects);
  const filterProjectsArr = projectsArr.filter(
    (project) => project.user_id === user?.id
  );
  let location = useLocation();


  return (
    <div>
      <div>
        <NavBar />
      </div>
      {filterProjectsArr.map((project) => (
        <div>
          <div>
            <DisplayProjectsSideBar project={project} />
          </div>
          {/* <div>
            <ProjectDetail project={project} />
          </div> */}
        </div>
      ))}
    </div>
  );
}

export default HomePage;
