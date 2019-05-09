import UserService from '../../../Api/UserService';

const SAVE_USER = '[PAGE_USER] SAVE_USER';
const saveUser = (response) => {
  return {
    type: SAVE_USER,
    payload: {
      response
    }
  }
}

// const requestCreateUser = (dispatch, body) => {
//   return UserService
//     .createUser(JSON.stringify(body))
//     .then(response => {
//       dispatch(saveUser(response));
//     })
// }
const requestCreateUser = (body) => {
  return (dispatch, getState) => {
    console.log('body', body)
    console.log('getState', getState())
    UserService
      .createUser(JSON.stringify(body))
      .then(response => {
        dispatch(saveUser(response));
      })
  }
}



export {
  SAVE_USER,
  requestCreateUser
}


