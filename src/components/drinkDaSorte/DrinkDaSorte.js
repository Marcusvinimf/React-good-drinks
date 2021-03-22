import React, { useEffect, useState } from 'react'
import { drinksAle } from '../models/reqApi1'

const DrinkDaSorte = () => {

  const [dadosApi, setDadosApi] = useState([])

  const click = async () => {
    const req = await drinksAle();
    setDadosApi(req.drinks[0]);
  }

  useEffect(() => click(), []);

  return (
    <div>
      <button onClick={click}> APERTE AQUI </button>
      <h3> indo aqui o nome de cada na atualização da pag {dadosApi.strDrink}</h3>
      <img src={dadosApi.strDrinkThumb}></img>
    </div>
  )
}

export default DrinkDaSorte;