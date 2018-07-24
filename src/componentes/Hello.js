import React, { Component } from 'react';
import { Navbar, Jumbotron, Button, Badge, ButtonToolbar } from 'react-bootstrap';

export default class Hello extends React.Component {

    constructor(){
        super();
        this.state = {
            message: "valor inicial"
        };
        this.updateMessage = this.updateMessage.bind(this);
    }

    updateMessage() {
        this.setState({
            message: "primeiro componente"
        });
    }

    render() {
         return (
           <div>
             <h1>Hello {this.state.message}!</h1>
             <Button bsStyle="primary" onClick={this.updateMessage}>Click me!</Button>
           </div>
        )
    }
}
