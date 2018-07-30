import React, { Component } from 'react';
import { Button, FormGroup, Form, ControlLabel, FormControl, Col, Checkbox } from 'react-bootstrap';
import $ from 'jquery';

class Ambiente extends Component {


  render() {
    return (
      <div className="App">

          <h1 className="page-header">Ambiente</h1>

          <Form horizontal>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Nome
                </Col>
                  <Col sm={6}>
                  <FormControl type="text" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Descrição
                </Col>
                <Col sm={6}>
                  <FormControl type="text" />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={6}>
                  <Button bsStyle="primary">Salvar</Button>
                  <Button>Limpar</Button>
                </Col>
              </FormGroup>
          </Form>


      </div>
    );
  }
}

export default Ambiente;
