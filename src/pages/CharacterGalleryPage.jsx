import { Outlet} from "react-router-dom";
import { supabase } from "../client";
import { useEffect, useState } from "react";
import CharacterList from "../components/CharacterList";

const CharacterGalleryPage = () => {
    const [characters, setCharacter]= useState([]);

    useEffect(() => {
        async function fetchCharacters() {
            const {data, error} = await supabase
                .from('pixel_pets')
                .select()
                .order('created_at', { ascending: true })
            
            if 
                (error) console.log('Error getting characters');
            else
                setCharacter(data);
                console.log(data);
        }
        fetchCharacters();
    }, []);  

    return (
        <div>
            <h1>Character Gallery Page</h1>
            <p>Here is a list of all your characters</p>
            <CharacterList characters={characters} />
            <div className="primary-content">
                <Outlet />
            </div>
        </div>
    );
}

export default CharacterGalleryPage;


// The web app contains a summary page dedicated to displaying all the crewmates the user has made so far
// The summary page is sorted by creation date such that the most recently created crewmates appear at the top
// Clicking on a crewmate in the summary page navigates to a detail page for that crewmate

// A section of the summary page, displays summary statistics about a user’s crew on their crew page
// e.g., the percent of members with a certain attribute
//  The summary page displays a custom “success” metric about a user’s crew which changes the look of the crewmate list
// e.g., a pirate crew’s predicted success at commandeering a new galley