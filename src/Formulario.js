import React, { Component } from 'react'

export default class Formulario extends Component {
    render() {
        return (
            <div>
                <h1>CONTATO</h1>
                <h3>nome: </h3>
                <input></input>
                <h3>email: </h3>
                <input></input>
                <h3>mensagem: </h3>
                <textarea rows="5" cols="33"></textarea><br></br>
                <button style={{background: 'blue'}} className="botao">Enviar</button>
            </div>
        )
    }
}
