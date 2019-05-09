import React, { Component } from "react";
import { connect } from 'react-redux';

import { FormUser } from '../components/Form';
import { CardUser } from '../components/Card';

import {
  saveUser,
  saveAllUser
} from '../store/Action'

function PageCreate(props) {
  return (
    <div className="page-user">
      <h1>Pagina crear usuario</h1>
      <FormUser {...props.state} onSubmit={props.onSubmit} onChange={props.onChange} />
      <br />
      <br />
    </div>
  )
}

function PageUser(props) {
  return {

  }
}

class User extends Component {
  constructor(props) {
    super(props);

    console.log('props', props)

    this.state = {
      name: '',
      lastname: '',
      git: '',
      email: '',
      phone: '',
      avatar: '',
      about: '',
      url: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  createUser() {
    const { dispatch, history } = this.props;
    dispatch(saveUser(this.state));
    dispatch(saveAllUser(this.state));

    history.replace('/users/')
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
    const { match: { path }, users } = this.props;

    const render = (path === '/users') ? <CardUser {...this.props.users} />
      : <PageCreate state={this.state} onSubmit={this.handleSubmit} onChange={this.handleChange} />
    return (
      <div>
        {render}
      </div>
    )
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    users: state.AllUsers
  }
}

const ModuleUser = connect(mapStateToProps)(User)

export {
  ModuleUser
}
