import {Link, Outlet} from "react-router-dom"

const CrewmateDetailsPage = () => {
    return (
        <div>
            <h1>Crewmate Details Page</h1>
            <ul>
                <li><Link to="edit">Edit Crewmate</Link></li>
            </ul>
            <div className="primary-content">
                <Outlet />
            </div>
        </div>
        
    );
}

export default CrewmateDetailsPage;

// Each crewmate has a detail page that displays more information about the crewmate
// Clicking on a crewmate in the summary page navigates to a detail page for that crewmate
// The detail page contains extra information about the crewmate not included in the summary page
// Users can navigate to to the edit form from the detail page