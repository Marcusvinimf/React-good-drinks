import React, { Component } from 'react'
import Navbar from './navbar'

export default class Cabecalho extends Component {
    render() {
        console.log("Fui renderizado")
        return (
            <div>
                <Navbar/>
            </div>
        )
    }
}