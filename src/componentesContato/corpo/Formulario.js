import React, { Component } from 'react'

export default class Formulario extends Component {
    render() {
        return (
            <div>
                <h2>Contato</h2>
                <div className="formsCompleto">
                    <img className="imagem1" src="https://bonsdrinks.netlify.app/static/media/contact-pic.689e126c.jpg"></img>
                    <form className="forms">
                        <label >nome: </label>
                        <input/>
                        <label>e-mail: </label>
                        <input/>
                        <label>mensagem: </label>
                        <textarea name="mensagem" rows="10" cols="33"/>
                        <button className="botao">Enviar</button>
                    </form>
                </div>
            </div>
        )
    }
}
