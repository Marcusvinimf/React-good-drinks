import React, { Component } from 'react'

export default class Cabecalho extends Component {
    render() {
        return (
            <div>
                <header className="navmenu">
                    <nav className="header">
                        <a className="header">Drinks</a>
                        <a className="header">Sobre Nós</a>
                        <a className="header">Bons Drinks</a>
                        <a className="header">Nosso Time</a>
                        <a className="header">Contato</a>
                    </nav>
                </header>
            </div>
        )
    }
}
