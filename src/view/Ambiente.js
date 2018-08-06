import React, { Component } from 'react';
import NotificationSystem from 'react-notification-system';
import { Button, FormGroup, Form, ControlLabel, FormControl,
  Col, Checkbox, Panel, Table, Glyphicon, ButtonGroup } from 'react-bootstrap';
import $ from 'jquery';

class Ambiente extends Component {

  constructor() {
    super();
    this.state = {
      ambientes: [], sistemas: [], nome:'', descricao:'', id:'', sistema:{}, sistemaId:''
    };
    this.setNome = this.setNome.bind(this);
    this.setDescricao = this.setDescricao.bind(this);
    this.setSistema = this.setSistema.bind(this);
  }

  carregarAmbientes() {
    $.ajax({
      url: "http://localhost:7070/api/ambientes",
      dataType: 'json',
        success: function(resposta) {
          this.setState({ambientes: resposta});
        }.bind(this),
        error: function(resposta){
          console.log("erro");
          this._showMessage.addNotification({message: resposta.responseJSON.message, level: 'error'});
        }.bind(this)
    });
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
          this._showMessage.addNotification({message: resposta.responseJSON.message, level: 'error'});
        }.bind(this)
    });
  }

  salvarAmbiente() {
    $.ajax({
      url:'http://localhost:7070/api/ambiente',
      contentType:'application/json', dataType:'json', type:'POST',
      data: JSON.stringify({id:this.state.id,
                            nome:this.state.nome,
                            descricao:this.state.descricao,
                            sistema:this.state.sistema}),
        success: function(resposta){
          console.log(resposta);
          this.carregarAmbientes();
          this.limpar();
          this._showMessage.addNotification({message: 'Ambiente salvo com sucesso', level: 'success'});
        }.bind(this),
        error: function(resposta){
          console.log("erro");
          this._showMessage.addNotification({message: resposta.responseJSON.message, level: 'error'});
        }.bind(this)
    });
  }

  removerAmbiente(id) {
    let urlPath = 'http://localhost:7070/api/ambiente/'+id;
    $.ajax({
      url: urlPath,
      contentType:'application/json',dataType:'json',type:'DELETE',
        success: function(resposta){
          this.carregarAmbientes();
          this._showMessage.addNotification({message: 'Ambiente removido com sucesso', level: 'success'});
        }.bind(this),
        error: function(resposta){
          console.log("erro");
          this._showMessage.addNotification({message: resposta.responseJSON.message, level: 'error'});
        }.bind(this)
    });
  }

  componentDidMount() {
    this.carregarAmbientes();
    this.carregarSistemas();
  }

  salvar(evento){
    evento.preventDefault();
    this.salvarAmbiente();
  }

  remover(id, evento) {
    evento.preventDefault();
    this.removerAmbiente(id);
  }

  editar(a, evento) {
    this.setState({id:a.id, nome:a.nome, descricao:a.descricao, sistema:a.sistema, sistemaId:a.sistema.id});
  }

  limpar() {
    this.setState({id:'', nome:'',descricao:'',sistema:'', sistemaId:''});
  }

  render() {
    return (
      <div className="App-body">
          <NotificationSystem ref={n => this._showMessage = n} />
          <h3 className="page-header">Ambiente</h3>

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

                  <Col componentClass={ControlLabel} sm={3}>
                    Sistema
                  </Col>
                  <Col sm={8}>
                    <FormControl componentClass="select" placeholder="Selecionar"
                       onChange={this.setSistema}>
                      {
                        this.state.sistemas.map(function(s, index){
                          return (
                            <option key={s.id} value={index}>
                                {s.nome}
                            </option>
                            );
                          }.bind(this))
                      }
                    </FormControl>
                  </Col>

                </FormGroup>

                <FormGroup>
                    <Button bsStyle="primary" type="submit">Salvar</Button>
                    <Button onClick={this.limpar.bind(this)}>Limpar</Button>
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
                          <th>Sistema</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          this.state.ambientes.map(function(a){
                            return (
                              <tr key={a.id}>
                                <td>{a.id}</td>
                                <td>{a.nome}</td>
                                <td>{a.descricao}</td>
                                <td>{a.sistema.nome}</td>
                                <td>
                                  <Button bsStyle="primary" onClick={this.remover.bind(this, a.id)} >
                                    <Glyphicon glyph="trash" />
                                  </Button>
                                  <Button bsStyle="primary" onClick={this.editar.bind(this, a)} >
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

  setSistema(evento){
    this.setState({sistema:this.state.sistemas[evento.target.value],
                  sistemaId:this.state.sistemas[evento.target.value].id});
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

export default Ambiente;
