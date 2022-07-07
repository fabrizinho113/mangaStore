import React, { Component } from "react";
import logo from '../assets/img/nav-icon.png'

export default class NavBar extends Component{
    render(){
        return(
            <div>
            <nav>
            <div className="logo">
                <img src={logo} alt="saitama icon" />
                <h1>Manga Store</h1>  
            </div>

            <ul>
                <li>Mangas</li>
                <li>About</li>
                <li>GitHub</li>
            </ul>
        </nav>
        </div>
        )
    }
}