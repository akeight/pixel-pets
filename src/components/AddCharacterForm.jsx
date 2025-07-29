import { useFormStatus } from "react-dom"

function AddCharacterForm({ character, onChange, onSubmit }) {
    const { pending } = useFormStatus();

  return (
    <form onSubmit={onSubmit}>
      <label>Name:</label>
      <input
        type="text"
        name="character_name"
        value={character.character_name}
        onChange={onChange}
      />

      <label>Type:</label>
      <label>
      <input
        type="radio"
        name="class"
        value="Femme Fatale"
        onChange={onChange}
      />Femme Fatale</label>
      <label>
      <input
        type="radio"
        name="class"
        value="Pixel Prince"
        onChange={onChange}
      />Pixel Prince</label>
      <label>
      <input
        type="radio"
        name="class"
        value="Chaotic Creature"
        onChange={onChange}
      />Chaotic Creature</label>

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
        name="speed"
        value={character.speed}
        onChange={onChange}
      />

      {/* Add other fields like agility, speed, etc. */}
      <button type="submit">
        {pending ? "Adding..." : "Add Character"}
      </button>
    </form>
  );
}

export default AddCharacterForm;
