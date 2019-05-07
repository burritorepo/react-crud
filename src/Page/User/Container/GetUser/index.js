import React, { Component } from "react";

import UserService from '../../../../Api/UserService';
import { CardUser } from '../../Component/CardUser';

class GetUser extends Component {
  constructor(props) {
    console.log('getUser')
    super(props);
    this.state = { users: [] }

    this.getUsers = this.getUsers.bind(this);
    this.handleDeleteUser = this.handleDeleteUser.bind(this);
  }

  componentDidMount() {
    this.getUsers();
  }

  handleDeleteUser(id) {
    UserService
      .deleteUser(id)
      .then(() => {
        this.getUsers();
      })
  }

  getUsers() {
    UserService
      .getAllUser()
      .then(response => {
        this.setState({ users: response })
      })
  }

  render() {
    const users = this.state.users;
    return (
      users.map((user) => <CardUser key={user.id} {...user} {...this.props} handleDeleteUser={this.handleDeleteUser} />)
    )
  }
}

export {
  GetUser
}
