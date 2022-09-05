import React, { useContext, useState } from "react";
import { motion } from "framer-motion"
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";



function NavBar(){

    const { products } = useContext(CartContext);

    const [rotate, setRotate ] = useState(false);
    
    
     return(
        <header>
        <div className="navbar">
            <motion.div
            animate={{
            rotate: rotate ? 360 : 0
            }}
            transition={{type: "tween", duration: 0.5}}
            onClick={() => {setRotate(!rotate)}}
        >
            <Link to="/"><img src='/assets/img/nav-icon.png' className="logo" alt="saitama logo" /></Link>
        </motion.div>
            <Link to="/"><h3 className="title">Manga Store</h3></Link>
            <nav>
            <ul>
                <li><Link to="/"><button>Home</button></Link></li>
                <li><Link to="/category/mangas"><button>Manga</button></Link></li>
                <li><Link to="/category/lightnovels"><button>Light Novels</button></Link></li>
                <li><Link className="cart" to="/cart"><CartWidget products={products}/></Link></li>
            </ul>   
            </nav>
        </div>
        </header>
        
    )
}

export default NavBar;