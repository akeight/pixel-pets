import { Link } from "react-router-dom";


const HomePage = () => {
    return (
        <div className="home-landing">
            <div className="images">
            <img src="/src/assets/pet-imgs/girl-6.png"></img>
            <img src="/src/assets/pet-imgs/creature-5.png"></img>
            <img src="/src/assets/pet-imgs/girl-4.png"></img>
            </div>
            <h2>Welcome to <span>Pixel Pets</span>! </h2>
            <h3 className="game-tagline">  
                Create, customize, and collect your very own retro characters.  
                Choose from Femme Fatale, Pixel Prince, or Cozy Creatures, and give them unique attributes  
                to bring your pixel world to life!
            </h3>

        <div className="home-description">
        <h3>
            Pick your style, build your stats, and start your adventure!  
            Every character you create is stored in our database with all its details,  
            so you can edit, update, and showcase your Pixel Pet army.
        </h3>
        <h4>
            Ready to start? Bring your first pixel hero to life!
        </h4>
       <button className="home-create">
            <Link to="/new-character">Create Your Character</Link>
        </button>
        </div>
    </div>
    );
}

export default HomePage;
