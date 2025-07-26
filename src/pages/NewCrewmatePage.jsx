const NewCrewmatePage = () => {
    return (
        <div>
            <h1>New Crewmate Page</h1>
            <button>Add Crewmate!</button>
        </div>
    );
}

export default NewCrewmatePage;

// Users can name the crewmate
// Users can set the crewmate’s attributes by clicking on one of several values

// A crewmate can be given a category upon creation which restricts their attribute value options
// e.g., a Dungeons and Dragons class or a development team role (project manager, product owner, etc.)
// User can choose a category option to describe their crewmate before any attributes are specified
// Based on the category value, users are allowed to access only a subset of the possible attributes