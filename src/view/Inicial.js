import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Hello from '../componentes/Hello';
import $ from 'jquery';

class Inicial extends Component {
  render() {
    return (
      <div className="App-body">

          <h3 className="page-header">Inicial</h3>

          <Hello message = "oi"></Hello>

      </div>
    );
  }
}

export default Inicial;
