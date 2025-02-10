import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RoleNavbar from "./RoleNavbar";

const { Fragment } = require("react");

function NavBar(){
    const state=useSelector((state)=>state);
    console.log("LoggedIn ",state.loggedin)
    console.log("Cart ",state.cart) 
    return (
        <Fragment>
            <div className="clearfix"></div>

            <nav className="navbar navbar-expand-lg  bg-light position-sticky " style={{top:0 ,zIndex:"1000", padding:"1rem"}}>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown"style={{textDecorationColor:"black"}}>
                    <ul className="navbar-nav ">
                    <li className="nav-item active">
                        <Link className="nav-link text-dark navbar-brand fs-1" to="/">Home</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle text-dark fw-bold" to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Catogeries
                        </Link>
                        <div className="dropdown-menu text-dark fs-1" aria-labelledby="navbarDropdownMenuLink">
  <Link className="dropdown-item" to="/cats?cat=Himalyan Treks">Himalyan Treks</Link>
  <Link className="dropdown-item" to="/cats?cat=Jungle Safari">Jungle Safari</Link>                        
  <Link className="dropdown-item" to="/cats?cat=Local Treks">Local Treks</Link>                        
  <Link className="dropdown-item" to="/cats?cat=Biking">Biking</Link>                        
  <Link className="dropdown-item" to="/cats?cat=Winter Treks">Winter Treks</Link>                        
  <Link className="dropdown-item" to="/cats?cat=Adventure Sports">Adventure Sports</Link>      
</div>

                    </li>                    
                    </ul>
                    <RoleNavbar isLoggedIn={state.loggedin.IsLoggedIn} />                    
                </div>
                </nav>
        </Fragment>
    )
}

export default NavBar;
