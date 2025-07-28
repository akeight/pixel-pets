import { Link } from "react-router-dom";  

const CharacterCard = ({character}) => {
    return ( 
        <div className="card">
            {/* image */}
      <h1>{character.character_name}</h1>
      <p>Type: {character.class}</p>
      <p>Protection: {character.protection}</p>
      <p>Agility: {character.agility}</p>
      <p>Speed: {character.speed}</p>
      <Link to={`/characters/${character.id}`}>More Details</Link>
        </div>
     );
}
 
export default CharacterCard;