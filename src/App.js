import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import {Switch, Route} from 'react-router-dom'

import $ from 'jquery';
import './App.css';

import Header from './template/Header';
import Menu from './template/Menu';
import Ambiente from './view/Ambiente';
import Sistema from './view/Sistema';
import Inicial from './view/Inicial';


class App extends Component {
  render() {
    return (

      <div className="App">

        <Header/>
        <Menu/>

        <Switch>
          <Route exact path='/' component={Inicial}/>
          <Route path='/ambiente' component={Ambiente}/>
          <Route path='/sistema' component={Sistema}/>
        </Switch>

      </div>
    );
  }
}

export default App;
