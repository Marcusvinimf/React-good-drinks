import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom"
import './assets/App.css';
import Cabecalho from './components/navbar/Navbar';
import Drinks from './components/drinks/Drinks';
// import DrinksTwo from './components/drinksTwo/DrinksTwo';
import Erro from './components/erro/Erro';
import Fim from './components/fim/Fim';
import Home from './components/home/Home';
import Formulario from './components/formulario/Formulario';
import Rodape from './components/rodape/Rodape';
import Sobre from './components/sobreNos/SobreNós'
import NossoTime from './components/nossoTime/NossoTime';

function App() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Switch>
        <Route path="/drinks/">
          <Drinks />
        </Route>
        <Route path="/sobre">
          <Sobre />
        </Route>
        <Route path="/" exact >
          <Home />
        </Route>
        <Route path="/contato">
          <Formulario />
        </Route>
        <Route path="/final">
          <Fim id="inputValueChange" tipo="text" nome="Nome" />
        </Route>
        <Route path="/nosso">
          <NossoTime />
        </Route>
        <Route path="*">
          <Erro />
        </Route>
      </Switch>
      <Rodape />
    </BrowserRouter>
  );
}

export default App;