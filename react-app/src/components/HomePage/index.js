import NavBar from "../Navigation/NavBar";
import DisplayProjects from "../Projects/DisplayProject"

function HomePage () {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div>
                <DisplayProjects />
            </div>
        </div>
    )
}

export default HomePage;
