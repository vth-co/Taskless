import { NavLink } from "react-router-dom";

const ErrorPage = () => {


    return (
        <div>
            <img src="../../../static/errorPage.png"></img>
            <h1>Hmmm, that page doesn't exist.</h1>
            <p>Get back to organizing work and life or visit our Help Center.</p>
            <NavLink to='/'>
                <button>Home</button>
            </NavLink>
        </div>
    )
}

export default ErrorPage;
