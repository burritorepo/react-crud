import React, { Component } from "react";

import FormUser from '../../components/FormUser'

export class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      lastname: '',
      git: '',
      email: '',
      phone: '',
      avatar: '',
      about: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  saveUser() {
    fetch(`http://localhost:3000/users/${this.props.match.params.id}`, {
      method: 'PUT',
      body: JSON.stringify(this.state),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => {
        this.props.history.push(`/users/`)
      })
  }

  getUser() {
    fetch(`http://localhost:3000/users/${this.props.match.params.id}`)
      .then(data => data.json())
      .then(data => {
        this.setState((state, props) => (Object.assign({}, data)));
      })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.saveUser()
  }

  handleChange(e) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <React.Fragment>
        <br />
        <h1 className="title">Editar</h1>
        <FormUser onSubmit={this.handleSubmit} handleChange={this.handleChange}  {...this.state} />
        <br />
        <br />
      </React.Fragment>
    );
  }
}

