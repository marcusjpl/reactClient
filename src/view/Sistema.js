import React, { Component } from 'react';
import { Button, FormGroup, Form, ControlLabel, FormControl, Col, Checkbox, Panel, Table } from 'react-bootstrap';
import $ from 'jquery';

class Sistema extends Component {


  constructor(props) {
    super(props);
    this.state = {
      sistemas: []
    };
  }

  componentDidMount() {
    $.ajax({
      url: "http://localhost:7070/api/sistemas",
      dataType: 'json',
      success: function(resposta) {
        this.setState({sistemas: resposta}); // Notice this
      }.bind(this),
      error: function(resposta){
        console.log("erro");
      }.bind(this)
    });
  }

  render() {
    return (
      <div className="App-body">

          <h3 className="page-header">Sistema</h3>

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
                          <th>Nome</th>
                          <th>Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          this.state.sistemas.map(function(s){
                            return (
                              <tr>
                                <td>{s.nome}</td>
                                <td>{s.descricao}</td>
                              </tr>
                              );
                            })
                        }
                      </tbody>
                    </Table>
                </Panel.Body>
              </Panel>
          </Col>
      </div>
    );
  }
}

export default Sistema;
