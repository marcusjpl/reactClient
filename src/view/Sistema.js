import React, { Component } from 'react';
import { Button, FormGroup, Form, ControlLabel, FormControl, Col, Checkbox, Panel, Table, Glyphicon } from 'react-bootstrap';
import $ from 'jquery';

class Sistema extends Component {

  constructor() {
    super();
    this.state = {
      sistemas: [], nome:'', descricao:''
    };
    this.salvar = this.salvar.bind(this);
    this.setNome = this.setNome.bind(this);
    this.setDescricao = this.setDescricao.bind(this);
  }

  carregarSistemas() {
    $.ajax({
      url: "http://localhost:7070/api/sistemas",
      dataType: 'json',
        success: function(resposta) {
          this.setState({sistemas: resposta});
        }.bind(this),
        error: function(resposta){
          console.log("erro");
        }.bind(this)
    });
  }

  salvarSistema() {
    $.ajax({
      url:'http://localhost:7070/api/sistema',
      contentType:'application/json',
      dataType:'json',
      type:'post',
      data: JSON.stringify({nome:this.state.nome,descricao:this.state.descricao}),
        success: function(resposta){
          console.log(resposta);
          this.carregarSistemas();
        }.bind(this),
        error: function(resposta){
          console.log("erro");
        }
    });
  }

  removerSistema(id) {
    let urlPath = 'http://localhost:7070/api/sistema/'+id;
    $.ajax({
      url: urlPath,
      contentType:'application/json',
      dataType:'json',
      type:'DELETE',
        success: function(resposta){
          console.log(resposta);
          this.carregarSistemas();
        }.bind(this),
        error: function(resposta){
          console.log("erro");
        }
    });
  }

  componentDidMount() {
    this.carregarSistemas();
  }

  salvar(evento){
    evento.preventDefault();
    this.salvarSistema();
  }

  render() {
    return (
      <div className="App-body">

          <h3 className="page-header">Sistema</h3>

          <Col sm={4}>
            <Form horizontal onSubmit={this.salvar.bind(this)} method="post">
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={3}>
                    Nome
                  </Col>
                  <Col sm={8}>
                    <FormControl type="text" value={this.state.nome} onChange={this.setNome}/>
                  </Col>

                  <Col componentClass={ControlLabel} sm={3}>
                    Descrição
                  </Col>
                  <Col sm={8}>
                    <FormControl type="text" value={this.state.descricao} onChange={this.setDescricao}/>
                  </Col>
                </FormGroup>

                <FormGroup>
                    <Button bsStyle="primary" type="submit">Salvar</Button>
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
                          <th>Id</th>
                          <th>Nome</th>
                          <th>Descrição</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          this.state.sistemas.map(function(s){
                            return (
                              <tr key={s.id}>
                                <td>{s.id}</td>
                                <td>{s.nome}</td>
                                <td>{s.descricao}</td>
                                <td>
                                  <Button bsStyle="primary" type="submit" onClick={() => this.removerSistema(s.id)}>
                                    <Glyphicon glyph="trash" />
                                  </Button>
                                </td>
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


  setNome(evento){
    this.setState({nome:evento.target.value});
  }

  setDescricao(evento){
    this.setState({descricao:evento.target.value});
  }

}

export default Sistema;
