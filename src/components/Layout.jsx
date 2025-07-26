import {Link, Outlet} from "react-router-dom" 

const Layout = () => {
    return ( 
        <>
     <div className="header">
        <h1>Crewmates!</h1>
        <p></p>
      </div>
    <div className="app-container">
      <aside className="sidebar">
        <div className="sidebar-components">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/new-crewmate">Create a Crewmate</Link></li>
            <li><Link to="/crewmates">Crewmate Gallery</Link></li>
          
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