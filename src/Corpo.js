import React, { Component } from 'react'
import Cabecalho from './Cabecalho'
import Formulario from './Formulario';
import Novo from './Novo';
import Objtest from './Objtest';

export default class Corpo extends Component {
    render() {
        return (
            <div>
                <Cabecalho/>
                <Novo/>
                <Formulario/>
                <Objtest/>
            </div>
        )
    }
}
