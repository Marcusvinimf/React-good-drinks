import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from "react-router-dom"

export default class Navbar extends Component {
  render() {
    return (
      <>
        <header className="navmenu">
          <nav className="headerPrincipal">
            <Link to="/drinks" className="header" >Drinks</Link>
            <Link to="/sobre" className="header">Sobre Nós</Link>
            <Link to="/" className="header">Bons Drinks</Link>
            <Link to="/final" className="header">Nosso Time</Link>
            <Link to="/contato" className="header">Contato</Link>
          </nav>
        </header>
      </>
    )
  }
}