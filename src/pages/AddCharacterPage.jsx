import { supabase } from "../client";
import AddCharacterForm from "../components/AddCharacterForm";
import { useState } from "react";

const AddCharacterPage = () => {
    const [character, setCharacter] = useState({
        character_name: '',
        class: '',
        protection: '0',
        agility: '0',
        speed: '0',
        img_Url: '',
    });

    const imageOptions = {
    Femme_Fatale: [
      "/src/assets/pet-imgs/girl-1.png", 
      "/src/assets/pet-imgs/girl-2.png",
      "/src/assets/pet-imgs/girl-3.png",
      "/src/assets/pet-imgs/girl-4.png",
      "/src/assets/pet-imgs/girl-5.png",
      "/src/assets/pet-imgs/girl-6.png"
    ],
    Pixel_Prince: [
      "/src/assets/pet-imgs/boy-1.png", 
      "/src/assets/pet-imgs/boy-2.png",
      "/src/assets/pet-imgs/boy-3.png",
      "/src/assets/pet-imgs/boy-4.png",
      "/src/assets/pet-imgs/boy-5.png",
      "/src/assets/pet-imgs/boy-6.png",
    ],
    Cozy_Creature: [
      "/src/assets/pet-imgs/creature-1.png",
      "/src/assets/pet-imgs/creature-2.png",
      "/src/assets/pet-imgs/creature-3.png",
      "/src/assets/pet-imgs/creature-4.png",
      "/src/assets/pet-imgs/creature-5.png",
      "/src/assets/pet-imgs/creature-6.png",
      "/src/assets/pet-imgs/creature-7.png",
    ],
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
        window.location = "/characters";
    }
  };

  const handleChange = (e) => {
    setCharacter({ ...character, [e.target.name]: e.target.value });
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setCharacter((prev) => ({ ...prev, class: category, img_Url: "" }));
  };

  const handleImageSelect = (img) => {
    setCharacter((prev) => ({ ...prev, img_Url: img }));
  };

    return (
        <div>
            <AddCharacterForm character={character} handleImageSelect={handleImageSelect} handleCategoryChange={handleCategoryChange} handleChange={handleChange} onSubmit={addCharacter} imageOptions={imageOptions}/>
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