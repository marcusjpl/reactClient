import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Hello from '../componentes/Hello';
import $ from 'jquery';

class Inicial extends Component {
  render() {
    return (
      <div className="App">

          <h1 className="page-header">Inicial</h1>

          <Hello message = "oi"></Hello>

      </div>
    );
  }
}

export default Inicial;
