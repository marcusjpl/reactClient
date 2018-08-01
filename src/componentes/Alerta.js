import React, { Component } from 'react';
import { Navbar, Jumbotron, Button, Badge, ButtonToolbar, Alert } from 'react-bootstrap';

export default class Alerta extends React.Component {
    constructor(props, context) {
      super(props, context);

      this.handleDismiss = this.handleDismiss.bind(this);
      this.handleShow = this.handleShow.bind(this);

      this.state = {
        show: true
      };
    }

    handleDismiss() {
      this.setState({ show: false });
    }

    handleShow() {
      this.setState({ show: true });
    }

    render() {
      if (this.state.show) {
        return (
          <Alert bsStyle="success" onDismiss={this.handleDismiss}>
            <p>
              {this.props.message}
            </p>
          </Alert>
        );
      } else return null;
    }
}
