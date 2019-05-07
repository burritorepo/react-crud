import React, { Component } from "react";
import { FormUser } from '../../../../Component/FormUser'

class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
    this.createUser = this.createUser.bind(this);
  }

  createUser() {
    fetch(`http://localhost:3000/users`, {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => this.props.history.push(`/users/`))
  }

  handleSubmit(e) {
    e.preventDefault();
    this.createUser();
  }

  handleChange(e) {
    e.preventDefault
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
        <h1 className="title">Crear</h1>
        <FormUser {...this.state} onSubmit={this.handleSubmit} onChange={this.handleChange}   />
        <br /><br />
      </React.Fragment>
    );
  }
}

export {
  CreateUser
}

