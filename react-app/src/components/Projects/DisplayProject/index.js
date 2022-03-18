import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import ProjectEditDeleteModal from "../ProjectEditDeleteModal";

function DisplayProjects () {

    const user = useSelector((state) => state.session.user);
    const projects = useSelector((state) => state.projects)
    const projectsArr = Object.values(projects);
    const filterProjectsArr = projectsArr.filter((project) => project.user_id === user?.id);


    return (
        <div>
            {filterProjectsArr.map((project) => (
                <div key={project.id}> 
                <NavLink to={`/project/${project.id}`}>{project.title}</NavLink>
                <ProjectEditDeleteModal project={project}/>
                </div>
            ))}
        </div>
    )
}

export default DisplayProjects;
