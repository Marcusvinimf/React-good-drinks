import React, {useEffect, useState} from 'react'
// import './BuscaDrinks.css'

const BuscaDrinks = () => {

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

  useEffect(() => requisicao(), []);

  return (
    <div>
      <label>Qual o Drink? </label>
      <input type='text'></input>
      <button>Buscar:</button>
    </div>
  )
}

export default BuscaDrinks
