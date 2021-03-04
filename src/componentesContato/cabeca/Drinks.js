import React, { Component } from 'react'

export default class Drinks extends Component {
    constructor(){
        super()
        this.state = {
            contador: 0,
            dadosApi: []
        }
        console.log("Fui iniciado")
    }

    componentDidMount(){
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
        .then (response => response.json())
        .then (data => {this.setState({dadosApi: data.drinks})})
        console.log("Fui montado")
    }

    render() {
      console.log("Fui renderizado")
      return (
          <div className="listaDrinks">
              <ol>{this.state.dadosApi.map(drink=> <li>{drink.strDrink}</li>)}</ol>
          </div>
      )
  }
}
