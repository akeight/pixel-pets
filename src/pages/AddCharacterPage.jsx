import { supabase } from "../client";
import AddCharacterForm from "../components/AddCharacterForm";
import { useState } from "react";

const AddCharacterPage = () => {
    const [character, setCharacter] = useState({
        character_name: '',
        class: '',
        protection: '',
        agility: '',
        speed: '',
    });

    const handleChange = (e) => {
    setCharacter({ ...character, [e.target.name]: e.target.value });
  };

    const addCharacter = async (event) => {
        event.preventDefault();

        const { data, error } = await supabase
            .from('pixel_pets')
            .insert([character]);

            if (error) {
                console.error('Error adding character:', error);
            } else {
                console.log('Character added:', data);
        window.location = "/";
    }
  };

    return (
        <div>
            <h1>New Character Page</h1>
            <AddCharacterForm character={character} onChange={handleChange} onSubmit={addCharacter}/>
        </div>
    );
}

export default AddCharacterPage;

// Users can name the crewmate
// Users can set the crewmate’s attributes by clicking on one of several values

// A crewmate can be given a category upon creation which restricts their attribute value options
// e.g., a Dungeons and Dragons class or a development team role (project manager, product owner, etc.)
// User can choose a category option to describe their crewmate before any attributes are specified
// Based on the category value, users are allowed to access only a subset of the possible attributes