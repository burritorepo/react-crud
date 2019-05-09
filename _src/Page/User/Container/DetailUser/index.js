import React, { Component } from "react";

import UserService from '../../../../Api/UserService';
import { CardUser } from '../../Component/CardUser';

class DetailUser extends Component {
  constructor(props) {
    super(props);

    console.log('detail!!')

    this.state = { user: [] }

    this.getUser = this.getUser.bind(this);
    this.handleDeleteUser = this.handleDeleteUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  handleDeleteUser(id) {
    UserService
      .deleteUser(id)
      .then(() => {

      })
  }

  getUser() {
    const { match: { params: { id } } } = this.props;
    UserService
      .getUser(id)
      .then(data => {
        this.setState({ user: data })
      })
  }

  render() {
    const users = this.state.users;
    return (
      <CardUser {...users} {...this.props} handleDeleteUser={this.handleDeleteUser} />
    );
  }
}

export {
  DetailUser as PageDetailUser
}

