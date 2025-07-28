import EditCharacterForm from "../components/EditCharacterForm";

const UpdateCharacterPage = () => {
    return (
        <div>
            <h1>Update Character Page</h1>
            <EditCharacterForm />
            <button>Save</button>
            <button>Delete</button>
        </div>
    );
}

export default UpdateCharacterPage;

// UPDATE
// Each crewmate has an edit button that will take users to an update form for the relevant crewmate
// Users can see the current attributes of their crewmate on the update form
// After editing the crewmate's attribute values using the form, the user can immediately see those changes reflected in the update form and on the summary page

// DELETE
// Using the edit form detailed in the previous crewmates can be updated feature, there is a button that allows users to delete that crewmate
// After deleting a crewmate, the crewmate should no longer be visible in the summary page