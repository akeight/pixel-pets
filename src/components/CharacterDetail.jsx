import { Link } from "react-router-dom";

const CharacterDetails = ({character}) => {

  return (
    <div className="character-details">
        {/* image */}
      <h1>{character.character_name}</h1>
      <p>Class: {character.class}</p>
      <p>Protection: {character.protection}</p>
      <p>Agility: {character.agility}</p>
      <p>Speed: {character.speed}</p>
      <p>Created: {character.created_at}</p>
      {/* Add more spicy details here */}
      <Link to={`/edit/${character.id}`}>Edit Character</Link>
    </div>
  );
}
 
export default CharacterDetails;