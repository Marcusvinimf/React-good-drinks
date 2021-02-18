import React, { Component } from 'react'

export default class Objtest extends Component {
    render() {
        const luana = {
            cliente: 'Luana',
            idade: 27,
            compras: [
              { nome: 'Notebook', preco: '2500' },
              { nome: 'Geladeira', preco: '3000' },
              { nome: 'Smartphone', preco: '1500' },
            ],
            ativa: true,
          };
          
          const mario = {
            cliente: 'Mario',
            idade: 31,
            compras: [
              { nome: 'Notebook', preco: '2500' },
              { nome: 'Geladeira', preco: '3000' },
              { nome: 'Smartphone', preco: '1500' },
              { nome: 'Guitarra', preco: '3500' },
            ],
            ativa: false,
          };
        let parte = luana.compras.map(cada => cada.preco);
        let parte1 = parte.map(cada => parseInt(cada))
        let total = parte1.reduce((acc, atl)=> acc+atl);

        const cor = {
            color: 'red'
        }

        return (
            <div>
                <p>nome: {luana.cliente}</p>
                <p>idade: {luana.idade}</p>
                <p style={{color: total > 5000 ? 'red' : 'blue'}}>total das compras: {total}</p>
                {total > 5000 && <p>ta gastando muito heim, maluco!!!</p>}
            </div>
        )
    }
}