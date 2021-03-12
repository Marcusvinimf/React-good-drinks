import React, { Component, useEffect } from 'react'

const Drinks = () => {

    const [dadosApi, setDadosApi] = React.useState([])

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
            .then(response => response.json())
            .then(data => { setDadosApi(data.drinks)
            })
    }, []);

    const nomeDrinks = dadosApi.map((drink, index) => index < 10? <li key={index}>{drink.strDrink}</li> : null)
    const fotoDrinks = dadosApi.map((drink, index) => index < 10? <img key={index} className="asDezBebidas" src={drink.strDrinkThumb}></img> : null)
    return (
        <div className="listaDrinks">
            <ol>{nomeDrinks}</ol>
            {fotoDrinks}
        </div>
    )
}

export default Drinks;