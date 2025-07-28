function AddCharacterForm({ character, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <label>Name:</label>
      <input
        type="text"
        name="character_name"
        value={character.character_name}
        onChange={onChange}
      />

      <label>Class:</label>
      <input
        type="text"
        name="class"
        value={character.class}
        onChange={onChange}
      />

      <label>Protection:</label>
      <input
        type="number"
        name="protection"
        value={character.protection}
        onChange={onChange}
      />

      <label>Agility:</label>
      <input
        type="number"
        name="agility"
        value={character.agility}
        onChange={onChange}
      />

      <label>Speed:</label>
      <input
        type="number"
        name="Speed"
        value={character.speed}
        onChange={onChange}
      />

      {/* Add other fields like agility, speed, etc. */}
      <button type="submit">Add Character!</button>
    </form>
  );
}

export default AddCharacterForm;
