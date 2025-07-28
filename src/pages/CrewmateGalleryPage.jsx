import {Link, Outlet} from "react-router-dom"

const CrewmateGalleryPage = () => {
    return (
        <div>
            <h1>Crewmate Gallery Page</h1>
            <ul>
                <li><Link to="crewmates">Crewmate Details</Link></li>
            </ul>
            <div className="primary-content">
                <Outlet />
            </div>
        </div>
    );
}

export default CrewmateGalleryPage;


// The web app contains a summary page dedicated to displaying all the crewmates the user has made so far
// The summary page is sorted by creation date such that the most recently created crewmates appear at the top
// Clicking on a crewmate in the summary page navigates to a detail page for that crewmate

// A section of the summary page, displays summary statistics about a user’s crew on their crew page
// e.g., the percent of members with a certain attribute
//  The summary page displays a custom “success” metric about a user’s crew which changes the look of the crewmate list
// e.g., a pirate crew’s predicted success at commandeering a new galley