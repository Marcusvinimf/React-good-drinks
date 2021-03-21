import React, { Component } from 'react';
import Input from '../input/Input'
import Button from '../button/Button';
import './Fim.css'

export default class Fim extends Component {

    constructor(props) {
        super(props);
        this.timeOnOff = this.timeOnOff.bind(this);
        this.state = { date: new Date() };
        console.log("Fui iniciado");
    }

    timeOnOff() {
        this.setState({ date: new Date() });
    }

    componentDidMount() {
        this.timerID = setInterval(this.timeOnOff, 1000);
        console.log("Fui montado");
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
        console.log("vou ser desmontado");
    }

    render() {
        console.log("Fui renderizado");
        return (
            <div className='fim'>
                <h1 className="horaExata">
                    Vms ver no que vai dar {this.state.date.toLocaleTimeString()}
                </h1>
                <div className='inputFim'>
                    <Input>Nome:</Input>
                </div>
                <div className='fimDivButton'>
                    <div className='button'>
                        <Button>Final cowdown</Button>
                    </div>
                </div>
            </div>
        )
    }
}