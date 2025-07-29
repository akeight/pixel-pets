import { useFormStatus } from "react-dom"

function AddCharacterForm({ character, handleChange, handleCategoryChange, handleImageSelect, onSubmit, imageOptions }) {
    const { pending } = useFormStatus();

  return (
    <>
    <form onSubmit={onSubmit} className="hard-shadow">
      <h1>Create Your Pixel Pet</h1>

      {/* 1. Category Selection */}
      <div className="category">
        <label>Choose Category:</label>
        <select value={character.class} onChange={handleCategoryChange}>
          <option value="">-- Select --</option>
          <option value="Femme_Fatale">Femme Fatale</option>
          <option value="Pixel_Prince">Pixel Prince</option>
          <option value="Cozy_Creature">Cozy Creature</option>
        </select>
      </div>

      {/* 2. Show Image Options Based on Category */}
      <div className="img-options">
        {character.class && (
          <div>
            <label>Choose an Image:</label>
            <div className="images">
              {imageOptions[character.class].map((img) => (
                <img
                  key={img}
                  src={img}
                  alt={character.class}
                  style={{
                    width: 100,
                    height: 100,
                    border:
                      character.img_Url === img ? "3px solid #FF6B6B" : "1px solid gray",
                    cursor: "pointer",
                  }}
                  onClick={() => handleImageSelect(img)}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 3. The rest of your attributes */}
      {character.img_Url && (
        <div className="inputs">
          <label>Name:</label>
          <input
            type="text"
            name="character_name"
            placeholder="eg PookieFace"
            value={character.character_name}
            onChange={handleChange}
          />

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
          

          <button type="submit">
            {pending ? "Adding..." : "Add!"}
          </button>
        </div>
      )}
        
    </form>
    </>
  );
};

export default AddCharacterForm;
