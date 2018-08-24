import React, { Component } from 'react';
import NotificationSystem from 'react-notification-system';
import { Button, FormGroup, Form, ControlLabel, FormControl,
  Col, Panel, Table, Glyphicon } from 'react-bootstrap';

const URL = 'http://localhost:7070/api';

const headers = {
  "Content-Type": "application/json"
};


class Ambiente extends Component {


  constructor() {
    super();
    this.state = {
      ambientes: [], sistemas: [], nome:'', descricao:'', id:'', sistema:{id:''}
    };
    this.setNome = this.setNome.bind(this);
    this.setDescricao = this.setDescricao.bind(this);
    this.setSistema = this.setSistema.bind(this);
  }

  carregarAmbientes() {
    fetch(URL+"/ambientes")
    .then(res => res.json())
    .then(
      (resposta) => {
        this.setState({ ambientes: resposta });
      }
    )
    .catch(
      (error) => {
        console.log("erro");
        this._showMessage.addNotification({message: error.responseJSON.message, level: 'error'});
      }
    );
  }

  carregarSistemas() {
    fetch(URL+"/sistemas")
    .then(res => res.json())
    .then(
      (resposta) => {
        this.setState({sistemas: resposta});
      }
    )
    .catch(
      (error) => {
        console.log("erro");
          this._showMessage.addNotification({message: error.responseJSON.message, level: 'error'});
      }
    );
  }

  salvarAmbiente() {

    if (this.state.nome === '') {
      this._showMessage.addNotification({message: 'Campo nome é obrigatório', level: 'warning'});
    }
    if (this.state.descricao === '') {
      this._showMessage.addNotification({message: 'Campo descrição é obrigatório', level: 'warning'});
    }
    if (this.state.sistema === '' ||this.state.sistema.id === '') {
      this._showMessage.addNotification({message: 'Campo Sistema é obrigatório', level: 'warning'});
    }
    if (this.state.nome === '' || this.state.descricao === '' || this.state.sistema === '' ||this.state.sistema.id === '') {
      return;
    }

    var s;
    for (s in this.state.sistemas) {
      if (this.state.sistemas[s].id === Number(this.state.sistema)) {
        this.state.sistema = this.state.sistemas[s];
      }
    }

    s = this.state.sistemas.find(e => e.id === Number(this.state.sistema))


    fetch(URL+"/ambiente", {
      method: "POST",
      body: JSON.stringify({id:this.state.id,
        nome:this.state.nome,
        descricao:this.state.descricao,
        sistema:this.state.sistema}), headers
    })
    .then(res => res.json())
    .then(
      (resposta) => {
        this.carregarAmbientes();
        this.limpar();
        this._showMessage.addNotification({message: 'Ambiente salvo com sucesso', level: 'success'});
      }
    )
    .catch(
      (resposta) => {
        console.log("erro");
        this._showMessage.addNotification({message: resposta.responseJSON.message, level: 'error'});
      }
    );
  }

  removerAmbiente(id) {
    let urlPath = URL+'/ambiente/'+id;
    fetch(urlPath, {
      method: "DELETE", headers
    })
    .then(
      (resposta) => {
        this.carregarAmbientes();
        this._showMessage.addNotification({message: 'Ambiente removido com sucesso', level: 'success'});
      }
    )
    .catch(
      (resposta) => {
        console.log("erro");
        this._showMessage.addNotification({message: resposta.responseJSON.message, level: 'error'});
      }
    );
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
    this.setState({id:a.id, nome:a.nome, descricao:a.descricao, sistema:a.sistema});
  }

  limpar() {
    this.setState({id:'', nome:'',descricao:'',sistema:{id:''}});
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
                    <FormControl componentClass="select" value={this.state.sistema.id} onChange={this.setSistema}>
                      <option value=''> Selecionar </option>
                      {
                        this.state.sistemas.map(function(s, index){
                          return (
                              <option key={index} value={s.id}> {s.nome} </option>
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
    this.setState({sistema:evento.target.value});
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
