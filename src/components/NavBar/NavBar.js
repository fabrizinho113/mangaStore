import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link} from 'react-router-dom';



function NavBar(){
     return(
        <header>
        <div className="navbar">
            <Link to="/"><img src='/assets/img/nav-icon.png' className="logo" alt="saitama logo" /></Link>
            <h3 className="title">Manga Store</h3>
            <ul>
                <li><Link to="/"><button>Home</button></Link></li>
                <li><Link to="/category/mangas"><button>Manga</button></Link></li>
                <li><Link to="/category/lightnovels"><button>Light Novels</button></Link></li>
                <li><Link className="cart" to="/cart"><CartWidget /></Link></li>
            </ul>   
        </div>
        </header>
    )
}

export default NavBar;