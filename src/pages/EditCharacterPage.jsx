import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EditCharacterForm from "../components/EditCharacterForm";
import { supabase } from "../client";

const EditCharacterPage = () => {
    const { id } = useParams();
    console.log("Edit route ID:", id);

    const [character, setCharacter] = useState({
        character_name: '',
        class: '',
        protection: '0',
        agility: '0',
        speed: '0',
        img_Url: '',
    });

    useEffect(() => {
        async function fetchCharacter() {
            const { data, error } = await supabase
                .from('pixel_pets')
                .select()
                .eq('id', id)
                .single();

                if (error) {
                    console.error('Error fetching character:', error);
                } else {
                setCharacter(data);
                }
        }

        fetchCharacter();
        }, [id]);


    const editCharacter = async (e) => {
        e.preventDefault();

        const { data, error } = await supabase
            .from("pixel_pets")
            .update(character) // character comes from state
            .eq("id", id);

        if (error) {
            console.error("Error updating character:", error);
        } else {
            console.log("Updated!", data);
            window.location = "/characters"; // redirect to view page
        }
    };


    const deleteCharacter = async (e) => {
        e.preventDefault();

        const { error } = await supabase
            .from('pixel_pets')
            .delete()
            .eq('id', id);

        if (error) {
            console.error("Error deleting character:", error);
        } else {
            window.location = '/characters'; // or just "/"
        }
    };


    return (
        <div>
            <h2 className="home-landing">Edit Pixel Pet</h2>
            <EditCharacterForm character={character} setCharacter={setCharacter} onSubmit={editCharacter} onDelete={deleteCharacter}/>
        </div>
        
    );
}

export default EditCharacterPage;

// UPDATE
// Each crewmate has an edit button that will take users to an update form for the relevant crewmate
// Users can see the current attributes of their crewmate on the update form
// After editing the crewmate's attribute values using the form, the user can immediately see those changes reflected in the update form and on the summary page

// DELETE
// Using the edit form detailed in the previous crewmates can be updated feature, there is a button that allows users to delete that crewmate
// After deleting a crewmate, the crewmate should no longer be visible in the summary page