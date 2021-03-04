import React, { Component } from 'react'

export default class Formulario extends Component {
    constructor(props) {
        super(props)
        this.click = this.click.bind(this)
        this.state = { estadoOnOff: false }
        console.log("Fui iniciado")
    }

    click() {
        this.setState((state) => { return { estadoOnOff: true } });
        setTimeout(() => this.setState({ estadoOnOff: false }), 3000)
    }

    componentDidMount() {
        console.log("Fui montado");
    }

    render() {
        console.log("Fui renderizado");
        return (
            <div>
                <h2>Contato</h2>
                <div className="formsCompleto">
                    <img className="imagem1" src="https://bonsdrinks.netlify.app/static/media/contact-pic.689e126c.jpg"></img>
                    <form className="forms">
                        <label >nome: </label>
                        <input />
                        <label>e-mail: </label>
                        <input />
                        <label>mensagem: </label>
                        <textarea name="mensagem" rows="10" cols="33" />
                        <button className="botao" disabled={this.state.estadoOnOff} onClick={this.click}>Enviar</button>
                    </form>
                </div>
            </div>
        )
    }
}
