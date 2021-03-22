import React, {useEffect, useState} from 'react';

const BuscaDrinks = () => {

  const [dadosApi, setDadosApi] = useState([]);

  const requisicao = async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s');
    const dados = await response.json();
    setDadosApi(dados.drinks);
  }
  
  useEffect(() => requisicao(), []);

  const posicao = ["Adonis Cocktail", "Affair", "H.D.", "Alfie Cocktail", "Almeria", "Almond Joy", "Amaretto Rose", "Apricot Lady", "Arthur Tompkins", "Blackthorn", "155 Belmont", "747 Drink"]

  const escolhido = []

  console.log(escolhido)
  for (let i = 0; i < dadosApi.length; i++) {
    dadosApi.map(drink => drink.strDrink == posicao[i] ? escolhido.push(<h2>{drink.strDrink}</h2>,<br/>, <h3>{drink.strInstructions}</h3>) : null)
  }

  return (
    <div>
      <label>Qual o Drink? </label>
      <input type='text'></input>
      <button>Buscar:</button>

      <div>
        {escolhido}
        <br/>
      </div>
    </div>
  )
}

export default BuscaDrinks
