import React, { Component, useEffect, useState } from 'react';
import './DrinksPopulares.css';

const DrinksPopulares = () => {

  const [dadosApi1, setDadosApi1] = useState([]);
  const [dadosApi2, setDadosApi2] = useState([]);
  const dadosApi = [...dadosApi1, ...dadosApi2];

  const requisicao = async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
    const dados = await response.json();
    setDadosApi1(dados.drinks);

    const respons2 = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink');
    const dado2 = await respons2.json();
    setDadosApi2(dado2.drinks);
  }

  const posicao = ["Adonis Cocktail", "Affair", "After sex", "Alfie Cocktail", "Almeria", "Almond Joy", "Amaretto Rose", "Apricot Lady", "Arthur Tompkins", "Blackthorn", "155 Belmont", "747 Drink"]

  useEffect(() => requisicao(), []);

  const nomeDrinks = []
  for (let i = 0; i < posicao.length; i++) {
    dadosApi.map((drink, index) => drink.strDrink == posicao[i] ? nomeDrinks.push(<li className='escrita' key={index}>{drink.strDrink}</li>) : null)
  }

  const fotoDrinks = []
  for (let i = 0; i < posicao.length; i++) {
    dadosApi.map((drink, index) => drink.strDrink == posicao[i] ? fotoDrinks.push(<img key={index} className="cadaFoto" src={drink.strDrinkThumb}></img>) : null)
  }

  return (
    <div className="listaDrinks">
      <div className="asDezBebidas">
        {fotoDrinks}
      </div>

      <div>
        <ol>{nomeDrinks}</ol>
      </div>
    </div>
  )
}

export default DrinksPopulares;