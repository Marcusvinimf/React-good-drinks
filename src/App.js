import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom"
import './assets/App.css';
import Cabecalho from './componentesContato/cabeca/Cabecalho';
import Drinks from './componentesContato/cabeca/Drinks';
import Erro from './componentesContato/cabeca/Erro';
import Fim from './componentesContato/cabeca/Fim';
import Home from './componentesContato/cabeca/Home';
import Formulario from './componentesContato/corpo/Formulario';
import Rodape from './componentesContato/rodape/Rodape';
import Sobre from './componentesSobre/sobre'

function App() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Switch>
        <Route path="/drinks">
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
          <Fim />
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