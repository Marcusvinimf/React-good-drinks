import React, { Component } from 'react'

const Formulario = () => {

    const [estado, setEstado] = React.useState(false)

    const click = (event) => {
        console.log("Espere 3 segundos para apertar o botão novamente!")
        setEstado(true);
        setTimeout(() => setEstado(false), 3000)
        setTimeout(() => console.log("Vai, pode apertar agora!"), 3000)
    }

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
                    <textarea className="textarea" name="mensagem" rows="10" cols="35" />
                    <button className="botao" disabled={estado} onClick={click}>Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Formulario;
