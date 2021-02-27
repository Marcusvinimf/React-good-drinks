import React, { Component } from 'react'
import Cabecalho from '../../componentesContato/cabeca/Cabecalho'
import Rodape from '../../componentesContato/rodape/Rodape'
import ImgText from './ImgText'

export default class Corpo extends Component {
    render() {
        return (
            <div>
                <Cabecalho/>
                <ImgText/>
                <Rodape/>
            </div>
        )
    }
}
