import React, { useEffect, useState } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import BuscaDrinks from '../buscaDrinks/BuscaDrinks';
import DrinkDaSorte from '../drinkDaSorte/DrinkDaSorte';
import DrinksPopulares from '../drinksPopulares/DrinksPopulares';

const Drinks = () => {
  return (
    <div>
      <NavLink to="/drinks/drinkdasorte">
        <button>Drink da Sorte</button>
      </NavLink>

      <NavLink to="/drinks/populares">
        <button>Drinks Populares</button>
      </NavLink>

      <NavLink to="/drinks/busca">
        <button>Busca Drinks</button>
      </NavLink>

      <Switch>
        <Route path="/drinks/drinkdasorte">
          <DrinkDaSorte/>
        </Route>

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
