import React, { useEffect, useState } from 'react';
import { reqDeInfo } from '../models/reqApi3';

const BuscaDrinks = (props) => {

  const [dadosApi, setDadosApi] = useState([]);
  const [stri, setStri] = useState('')
  const [escolhido, setEscolhido] = useState([])

  const requisicao = async () => {
    const req = await reqDeInfo();
    setDadosApi(req);
  }

  useEffect(() => requisicao(), []);

  const change = (valor) => {
    setStri(valor.target.value);
  }

  console.log(escolhido)
  const click = () => {
    console.log(escolhido)
    for (let i = 0; i < dadosApi.length; i++) {
      dadosApi.map((drink, index) => drink.strDrink == stri ? setEscolhido(<div key={index}><h2>{drink.strDrink}</h2>, <br key={index} />, <h3>{drink.strInstructions}</h3></div>) : null)
    }
  }

  return (
    <div>
      <label>Qual o Drink? </label>
      <input type='text' onChange={change}></input>
      <button onClick={click}>Buscar:</button>

      <div>
        {escolhido}
        <br />
      </div>
    </div>
  )
}

export default BuscaDrinks
