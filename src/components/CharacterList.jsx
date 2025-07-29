import CharacterCard from './CharacterCard';

function CharacterList({ characters }) {
  if (!characters || characters.length === 0) {
    return <p>No pixel pets found!</p>;
  }

  return (
    <div className="grid">
      {characters.map((char) => (
        <CharacterCard key={char.id} character={char} />
      ))}
    </div>
  );
}

export default CharacterList;
