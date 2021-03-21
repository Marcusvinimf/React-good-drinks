import React, { Component } from 'react'
import Input from '../input/Input'
import Button from '../button/Button'
import './Formulario.css'

const Formulario = (props) => {

    return (
        <div className='formulario'>
            <h2 className='formularioTitulo'>Contato</h2>
            <img className="formularioImagem" src="https://bonsdrinks.netlify.app/static/media/contact-pic.689e126c.jpg"></img>
            <form className="forms">
                <div>
                    <Input id='inputNome' nome='nome' tipo='text' >Nome: </Input>
                </div>
                <div className='arruma'>
                    <Input id='inputEmail' nome='email' tipo='text' >Email: </Input>
                </div>
                <div className='arruma'>
                    <label className='inputLabel' >Mensagem: </label>
                    <textarea className="textArea" name="mensagem" />
                </div>
                <div className='divButtonFormulario'>
                    <div className='buttonDiv'>
                        <Button className='buttonFormulario' >Enviar</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Formulario;
