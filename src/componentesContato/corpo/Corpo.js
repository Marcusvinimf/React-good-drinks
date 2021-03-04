import React, { Component } from 'react'
import Cabecalho from '../cabeca/Cabecalho';
import Formulario from './Formulario';
import Rodape from '../rodape/Rodape'

export default class Corpo extends Component {
    render() {
        return (
            <div className="corpo">
                <Cabecalho/>
                <Formulario/>
                <Rodape/>
            </div>
        )
    }
}