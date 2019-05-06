import React, { Component } from "react";

import CardUser from '../../components/CardUser'

export class DetailUser extends Component {
  constructor(props) {
    console.log('detail', props)
    super(props);
    this.state = { user: '' }

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
    fetch(`http://localhost:3000/users/${this.props.match.params.id}`)
      .then(data => data.json())
      .then(data => {
        this.setState({ user: data })
      })
  }

  render() {
    return (
      <CardUser deleteUser={this.deleteUser} {...this.state.user} />
    );
  }
}

