import React, { Component } from "react";
import { connect } from 'react-redux';
import { FormUser } from '../../../../Component/FormUser';
import { requestCreateUser } from '../../Store/Action'
class CreateUser extends Component {
  constructor(props) {

    console.log('props', props)
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
    const { dispatch } = this.props;
    // requestCreateUser(dispatch, this.state);
    dispatch(requestCreateUser(this.state));
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
        <FormUser {...this.state} onSubmit={this.handleSubmit} onChange={this.handleChange} />
        <br /><br />
      </React.Fragment>
    );
  }
}

const PageCreateUser = connect()(CreateUser)

export {
  PageCreateUser
}
