import { useSelector } from "react-redux"

function DisplayProjects () {

    const user = useSelector((state) => state.session.user);
    const projects = useSelector((state) => state.projects)
    const projectsArr = Object.values(projects);
    const filterProjectsArr = projectsArr.filter((project) => project.user_id === +user?.id);


    return (
        <div>
            {filterProjectsArr.map((project) => (
                <div key={project.id}> 
                    <p>{project.title}</p>
                </div>
            ))}
        </div>
    )
}

export default DisplayProjects;
