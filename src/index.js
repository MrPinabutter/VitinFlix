import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video/index'
import CadastroCategoria from './pages/cadastro/Categoria/index';

const Pagina404 = () => (<div> <h1>Erro 404</h1></div> )

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/"  component={Home} exact/>
      <Route path="/cadastro/Video" component={CadastroVideo} exact/>
      <Route path="/cadastro/Categoria" component={CadastroCategoria} exact/>
      <Route component={Pagina404}/> 
    </Switch> 
  </BrowserRouter>,

  document.getElementById('root')
);
