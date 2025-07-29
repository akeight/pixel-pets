import {Link, Outlet} from "react-router-dom" 

const Layout = () => {
    return ( 
        <>
          <div className="app-container">
            <aside className="sidebar">
              <div className="sidebar-components">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/new-character">Create Pixel Pet</Link></li>
                  <li><Link to="/characters">Pixel Pet Gallery</Link></li>
          
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