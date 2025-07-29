import {useParams, Outlet} from "react-router-dom"
import { useState, useEffect } from "react";
import { supabase } from "../client";
import CharacterDetails from "../components/CharacterDetail";


const CharacterDetailsPage = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);

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
            console.log(data);
            
        }
        setLoading(false);
        }

        fetchCharacter();
    }, [id]);

   
    if (loading) return <p>Loading character details…</p>;
    if (!character) return <p>No character found!</p>;

    return (
        <div>
            <h1>Character Details Page</h1>
            <CharacterDetails character={character} />
            <div className="primary-content">
                <Outlet />
            </div>
        </div>
        
    );
}

export default CharacterDetailsPage;

// Each crewmate has a detail page that displays more information about the crewmate
// Clicking on a crewmate in the summary page navigates to a detail page for that crewmate
// The detail page contains extra information about the crewmate not included in the summary page
// Users can navigate to to the edit form from the detail page