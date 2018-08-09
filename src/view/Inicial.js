import React, { Component } from 'react';
import Hello from '../componentes/Hello';

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
