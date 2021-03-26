import React, { useEffect, useState } from 'react';
import { drinksAle } from '../models/reqApi1';
import Card from '../card/Card';
import './DrinkDaSorte.css'

const DrinkDaSorte = () => {

  const [dadosApi, setDadosApi] = useState([])

  const click = async () => {
    const req = await drinksAle();
    setDadosApi(req.drinks[0]);
  }

  useEffect(() => click(), []);

  return (
    <div className="drinkDaSorte">
      <button className="btn" onClick={click}> APERTE AQUI </button>
      <div className="drinksDrinkDaSorte">
        <Card img={dadosApi.strDrinkThumb} nome={dadosApi.strDrink} descri={dadosApi.strCategory}/>
      </div>
    </div>
  )
}

export default DrinkDaSorte;