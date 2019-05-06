import React, { Component } from "react";

import CardUser from '../../components/CardUser'

export class GetUser extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] }

    this.getUsers = this.getUsers.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  componentDidMount() {
    this.getUsers();
  }

  deleteUser(id) {
    fetch(`http://localhost:3000/users/${id}`, {
      method: 'DELETE'
    }).then(() => {
      this.getUsers();
    })
  }

  getUsers() {
    fetch('http://localhost:3000/users')
      .then(data => data.json())
      .then(data => {
        this.setState({ users: data })
      })
  }

  render() {
    const users = this.state.users;
    return (
      users.map((user) => <CardUser deleteUser={this.deleteUser} key={user.id} {...user} />)
    )
  }
}
