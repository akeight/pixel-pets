import { Link } from "react-router-dom";

const CharacterDetails = ({character}) => {

  const createdAtUTC = character.created_at;
  const localDate = new Date(createdAtUTC);
  const formatted = localDate.toLocaleString();

  return (
    <div className="card">
      <img src={character.img_Url} alt={character.character_name} />
      <h2>{character.character_name}</h2>
      <p>Class: {character.class}</p>
      <p>Protection: {character.protection}</p>
      <p>Agility: {character.agility}</p>
      <p>Speed: {character.speed}</p>
      <p>Created: {formatted}</p>
      {/* Add more spicy details here */}
      <Link to={`/edit/${character.id}`}>Edit Character</Link>
    </div>
  );
}
 
export default CharacterDetails;