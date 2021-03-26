import React, { useEffect, useState } from 'react';
import { reqDeInfo } from '../models/reqApi3';
import Card from '../card/Card';
import './BuscaDrinks.css';

const BuscaDrinks = () => {

  const [dadosApi, setDadosApi] = useState([]);

  const [stri, setStri] = useState('');

  const [escolhido, setEscolhido] = useState([]);
  const [escolhido2, setEscolhido2] = useState([]);
  const [escolhido3, setEscolhido3] = useState([]);

  const requisicao = async () => {
    const req = await reqDeInfo();
    setDadosApi(req);
  }

  useEffect(() => requisicao(), [escolhido]);

  const change = (valor) => {
    setStri(valor.target.value);
  }

  const click = () => {
    for (let i = 0; i < dadosApi.length; i++) {
      if (dadosApi[i].strDrink == stri) {
        return setEscolhido(dadosApi[i].strDrink),
          setEscolhido2(dadosApi[i].strDrinkThumb),
          setEscolhido3(dadosApi[i].strInstructions)
      } else {
        return setEscolhido("NÃO TEM, TENTE OUTRO! "),
          setEscolhido2(""),
          setEscolhido3("")
      }
    }
  }

  return (
    <div className="buscaDrinks">
      <label>Qual o Drink? </label>
      <input type='text' onChange={change}></input>
      <button onClick={click}>Buscar:</button>
      <Card img={escolhido2} nome={escolhido} descri={escolhido3} />
    </div>
  )
}

export default BuscaDrinks
