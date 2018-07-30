import React, { Component } from 'react';
import { Button, FormGroup, Form, ControlLabel, FormControl, Col, Checkbox, Panel, Table } from 'react-bootstrap';
import $ from 'jquery';

class Ambiente extends Component {


  render() {
    return (
      <div className="App-body">

          <h3 className="page-header">Ambiente</h3>

          <Col sm={4}>
            <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={3}>
                    Nome
                  </Col>
                  <Col sm={8}>
                    <FormControl type="text" />
                  </Col>

                  <Col componentClass={ControlLabel} sm={3}>
                    Descrição
                  </Col>
                  <Col sm={8}>
                    <FormControl type="text" />
                  </Col>
                </FormGroup>

                <FormGroup>
                    <Button bsStyle="primary">Salvar</Button>
                    <Button>Limpar</Button>
                </FormGroup>
            </Form>
          </Col>


          <Col sm={6}>
              <Panel>
                <Panel.Heading>Listagem</Panel.Heading>
                <Panel.Body>
                    <Table responsive>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Nome</th>
                          <th>Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                        </tr>
                      </tbody>
                    </Table>
                </Panel.Body>
              </Panel>
          </Col>


      </div>
    );
  }
}

export default Ambiente;
