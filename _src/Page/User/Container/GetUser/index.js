import React, { Component } from "react";
import { connect } from 'react-redux';
import UserService from '../../../../Api/UserService';
import { saveAllUser } from '../../../../Store/Actions';
import { CardUser } from '../../Component/CardUser';

class GetUser extends Component {
  constructor(props) {
    console.log('getUser', props)
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
    const { AllUser } = this.props;
    // if (!AllUser.length) {
    //   UserService
    //     .getAllUser()
    //     .then(response => {
    //       const { dispatch, history } = this.props;
    //       dispatch(saveAllUser(response));
    //       this.setState({ users: response });
    //     })
    // } else {
    //   this.setState({ users: AllUser });
    // }
    UserService
      .getAllUser()
      .then(response => {
        const { dispatch } = this.props;
        dispatch(saveAllUser(response));
        this.setState({ users: response });
      })
  }

  render() {
    const users = this.state.users;
    return (
      users.map((user) => <CardUser key={user.id} {...user} {...this.props} handleDeleteUser={this.handleDeleteUser} />)
    )
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    AllUser: state.AllUser
  }
}

const PageGetUser = connect(mapStateToProps)(GetUser)

export {
  PageGetUser
}
