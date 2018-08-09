import React, { Component } from 'react';
import NotificationSystem from 'react-notification-system';
import { Button, FormGroup, Form, ControlLabel, FormControl,
  Col, Panel, Table, Glyphicon, ButtonGroup } from 'react-bootstrap';
import $ from 'jquery';

class Sistema extends Component {

  constructor() {
    super();
    this.state = {
      sistemas: [], nome:'', descricao:'', id:''
    };
    this.setNome = this.setNome.bind(this);
    this.setDescricao = this.setDescricao.bind(this);
  }

  carregarSistemas() {
    console.log(process.env);
    $.ajax({
      url: "http://localhost:7070/api/sistemas",
      dataType: 'json',
        success: function(resposta) {
          this.setState({sistemas: resposta});
        }.bind(this),
        error: function(resposta){
          console.log("erro");
          this._showMessage.addNotification({message: resposta, level: 'error'});
        }.bind(this)
    });
  }

  salvarSistema() {

    if (this.state.nome === '') {
      this._showMessage.addNotification({message: 'Campo nome é obrigatório', level: 'warning'});
    }
    if (this.state.descricao === '') {
      this._showMessage.addNotification({message: 'Campo descrição é obrigatório', level: 'warning'});
    }
    if (this.state.nome === '' || this.state.descricao === '') {
      return;
    }

    $.ajax({
      url:'http://localhost:7070/api/sistema',
      contentType:'application/json', dataType:'json', type:'POST',
      data: JSON.stringify({id:this.state.id,
                            nome:this.state.nome,
                            descricao:this.state.descricao}),
        success: function(resposta){
          console.log(resposta);
          this._showMessage.addNotification({message: 'Sistema salvo com sucesso', level: 'success'});
          this.carregarSistemas();
          this.limpar();
        }.bind(this),
        error: function(resposta){
          this._showMessage.addNotification({message: resposta.responseJSON.message, level: 'error'});
          console.log("erro");
        }.bind(this)
    });
  }

  removerSistema(id) {
    let urlPath = 'http://localhost:7070/api/sistema/'+id;
    $.ajax({
      url: urlPath,
      contentType:'application/json',dataType:'json',type:'DELETE',
        success: function(resposta){
          this.carregarSistemas();
        }.bind(this),
        error: function(resposta){
          console.log("erro");
          this._showMessage.addNotification({message: resposta.responseJSON.message, level: 'error'});
        }.bind(this)
    });
  }

  componentDidMount() {
    this.carregarSistemas();
  }

  salvar(evento){
    evento.preventDefault();
    this.salvarSistema();
  }

  remover(id, evento) {
    evento.preventDefault();
    this.removerSistema(id);
  }

  editar(s, evento) {
    this.setState({id:s.id});
    this.setState({nome:s.nome});
    this.setState({descricao:s.descricao});
  }

  limpar() {
    this.setState({id:'', nome:'',descricao:''});
  }

  render() {
    return (
      <div className="App-body">
          <NotificationSystem ref={n => this._showMessage = n} />
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

                <ButtonGroup>
                    <Button bsStyle="primary" type="submit">Salvar</Button>
                    <Button onClick={this.limpar.bind(this)}>Limpar</Button>
                </ButtonGroup>
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
                                  <Button bsStyle="primary" onClick={this.remover.bind(this, s.id)} >
                                    <Glyphicon glyph="trash" />
                                  </Button>
                                  <Button bsStyle="primary" onClick={this.editar.bind(this, s)} >
                                    <Glyphicon glyph="edit" />
                                  </Button>
                                </td>
                              </tr>
                              );
                            }.bind(this))
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

  setId(evento){
    this.setState({id:evento.target.value});
  }

}
export default Sistema;
