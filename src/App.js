import React, { Component } from 'react';
import { Navbar, Jumbotron, Button, Badge, ButtonToolbar } from 'react-bootstrap';
import $ from 'jquery';
import Hello from './componentes/Hello';
import './App.css';


class App extends Component {
  render() {
    return (

      <div className="App">

          <h1 className="page-header">Inicial</h1>

          {/* Standard button  https://react-bootstrap.github.io/components/buttons/*/}
        <ButtonToolbar>

          <Button>Default</Button>
          {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
          <Button bsStyle="primary">Primary</Button>
          {/* Indicates a successful or positive action */}
          <Button bsStyle="success">Success</Button>
          {/* Contextual button for informational alert messages */}
          <Button bsStyle="info">Info</Button>
          {/* Indicates caution should be taken with this action */}
          <Button bsStyle="warning">Warning</Button>
          {/* Indicates a dangerous or potentially negative action */}
          <Button bsStyle="danger">Danger</Button>
          {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
          <Button bsStyle="link">Link</Button>
        </ButtonToolbar>


        <Hello message = "oi"></Hello>

      </div>
    );
  }
}

export default App;
