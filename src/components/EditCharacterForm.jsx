const EditCharacterForm = ({ character, setCharacter, onSubmit, onDelete }) => {
  if (!character) return <p>Loading character form…</p>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCharacter((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={onSubmit} className="hard-shadow">
      <label>Name:</label>
      <input
        type="text"
        name="character_name"
        value={character.character_name}
        onChange={handleChange}
      />

      <label>Type:</label>
      <label>
      <input
        type="radio"
        name="class"
        value="Femme Fatale"
        onChange={handleChange}
      />Femme Fatale</label>
      <label>
      <input
        type="radio"
        name="class"
        value="Pixel Prince"
        onChange={handleChange}
      />Pixel Prince</label>
      <label>
      <input
        type="radio"
        name="class"
        value="Chaotic Creature"
        onChange={handleChange}
      />Chaotic Creature</label>

      <label>Protection:</label>
      <input
        type="number"
        name="protection"
        value={character.protection}
        onChange={handleChange}
      />

      <label>Agility:</label>
      <input
        type="number"
        name="agility"
        value={character.agility}
        onChange={handleChange}
      />

      <label>Speed:</label>
      <input
        type="number"
        name="speed"
        value={character.speed}
        onChange={handleChange}
      />

      {/* Add other fields here the same way */}

      <input type="submit" value="Save Changes" />
      <button type="button" className="deleteBtn" onClick={onDelete}>
        Delete
      </button>
    </form>
  );
};

export default EditCharacterForm;
