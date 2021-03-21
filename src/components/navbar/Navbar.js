import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";
import './NavBar.css';

const Navbar = () => {
  return (
    <header>
      <nav className="navMenu">
        <Link to="/drinks" className="header" >Drinks</Link>
        <Link to="/sobre" className="header">Sobre Nós</Link>
        <Link to="/" className="header">Bons Drinks</Link>
        <Link to="/nosso" className="header">Nosso Time</Link>
        <Link to="/contato" className="header">Contato</Link>
      </nav>
    </header>
  )
}

export default Navbar;