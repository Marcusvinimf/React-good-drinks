import React, { useEffect, useState } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import BuscaDrinks from '../buscaDrinks/BuscaDrinks';
import DrinksPopulares from '../drinksPopulares/DrinksPopulares';

const Drinks = () => {

  const [dadosApi, setDadosApi] = useState([])

  const drinksAle = async () => {

    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const dados = await response.json();

    return setDadosApi(dados.drinks[0]);
  }

  useEffect(() => drinksAle(), []);

  return (
    <div>
      <button onClick={drinksAle}> APERTE AQUI </button>
      <h3> indo aqui o nome de cada na atualização da pag {dadosApi.strDrink}</h3>

      <NavLink to="/drinks/populares">
        <button>Drinks Populares</button>
      </NavLink>

      <NavLink to="/drinks/busca">
        <button>Busca Drinks</button>
      </NavLink> 

      <Switch>

        <Route path="/drinks/populares">

          <DrinksPopulares />

        </Route>

        <Route path="/drinks/busca">

          <BuscaDrinks />

        </Route>
      </Switch>

    </div>
  )
}

export default Drinks
