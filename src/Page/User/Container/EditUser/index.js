import React, { Component } from "react";

import UserService from '../../../../Api/UserService';
import { FormUser } from '../../../../Component/FormUser';


class EditUser extends Component {
  constructor(props) {
    super(props);

    console.log('edit!!')
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
    const { match: { params: { id } } } = this.props;

    UserService
      .saveUser({
        id,
        body: JSON.stringify(this.state),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }).then(response => {
        const { history } = this.props;
        history.push(`/users/`)
      });

  }

  getUser() {
    const { match: { params: { id } } } = this.props;

    UserService
      .getUser(id)
      .then(data => {
        this.setState((state) => (Object.assign(state, data)));
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
        <FormUser {...this.state} onSubmit={this.handleSubmit} onChange={this.handleChange} />
        <br />
        <br />
      </React.Fragment>
    );
  }
}

export {
  EditUser as PageEditUser
}
