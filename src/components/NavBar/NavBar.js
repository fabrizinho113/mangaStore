import React from "react";
import { Container, Navbar, Nav } from 'react-bootstrap';
import "../NavBar/NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

function NavBar(){
     return(
        <header>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand className="title" href="#home" ><img src='/assets/img/nav-icon.png' className="logo" alt="saitama logo"></img>Manga Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#manga">Manga</Nav.Link>
        <Nav.Link href="#bluerays">Blue-rays</Nav.Link>
        <Nav.Link href="#music">Music</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link><CartWidget /></Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
        </header>
    )
}

export default NavBar;