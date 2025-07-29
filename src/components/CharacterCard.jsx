import { Link } from "react-router-dom";  

const CharacterCard = ({character}) => {
    return ( 
        <div className="card">
            <img src={character.img_Url} alt={character.character_name} />
            <h2>{character.character_name}</h2>
            <p>Protection: {character.protection}</p>
            <p>Agility: {character.agility}</p>
            <p>Speed: {character.speed}</p>
            <Link to={`/characters/${character.id}`}>More Details</Link>
        </div>
     );
}
 
export default CharacterCard;