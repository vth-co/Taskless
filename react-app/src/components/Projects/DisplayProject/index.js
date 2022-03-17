import { useSelector } from "react-redux"

const DisplayProjects = () => {

    const projects = useSelector((state) => state.projects)
    const projectsArr = Object.values(projects);
    console.log(projectsArr)

    return (
        <div>
            {projectsArr.map((project) => (
                <div key={project.id}> 
                    <p>{project.title}</p>
                </div>
            ))}
        </div>
    )
}

export default DisplayProjects;
