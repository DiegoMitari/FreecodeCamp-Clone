import React from "react";
import '../style/NavBar.css';

function NavBar() {
    return (
        <header>
            <div className="search-bar">
            <button><ion-icon name="search-outline"></ion-icon></button>
                <input type="text" placeholder="Search 8,000+ tutorials" />
            </div>
            <img src={require("../imagenes/FreeCodeCamp_logo.png")} className="img-logo" />
            <nav className="nav-button">
              <button className="btn-menu">Menu</button>
              <button className="btn-signIn">Sign In</button>
            </nav>
        </header>

        );
    }
    
    export default NavBar; 