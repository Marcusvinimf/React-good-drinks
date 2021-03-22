import React, { Component, useEffect, useState } from 'react';
import './DrinksPopulares.css';
import reqCompleta from '../models/reqApi2';

const DrinksPopulares = () => {

  const [dadosApi, setDadosApi] = useState([]);

  const requisicao = () => {
    setDadosApi(reqCompleta);
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