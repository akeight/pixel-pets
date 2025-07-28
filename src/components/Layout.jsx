import {Link, Outlet} from "react-router-dom" 

const Layout = () => {
    return ( 
        <>
          <div className="header">
              <h1>Pixel Pets!</h1>
              <p></p>
            </div>
          <div className="app-container">
            <aside className="sidebar">
              <div className="sidebar-components">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/new-character">Create a Character</Link></li>
                  <li><Link to="/characters">Character Gallery</Link></li>
          
                </ul>
              </div>
            </aside>

            <div className="primary-content">
                <Outlet />
            </div>
          </div>
        </>
     );
}
 
export default Layout;