import UserService from '../Api/UserService';

import {
  SAVE_USER,
  SAVE_ALL_USER
} from './Const';

const saveUser = (response) => {
  return {
    type: SAVE_USER,
    payload: {
      response
    }
  }
}

const saveAllUser = (response) => {
  return {
    type: SAVE_ALL_USER,
    payload: {
      response
    }
  }
}

const error = (err) => {
  return {
    type: SAVE_ALL_USER,
    payload: {
      err
    }
  }
}

const requestCreateUser = (body) => {
  return (dispatch, getState) => {
    console.log('getState', getState())
    UserService
      .createUser(JSON.stringify(body))
      .then(response => {
        dispatch(saveUser(response));
        dispatch(saveAllUser(response))

      }).catch((err) => {
        dispatch(error(err))
      })
  }
}

export {
  saveUser,
  saveAllUser,
  requestCreateUser
}


// const requestCreateUser = (body) => {
//   return (dispatch, getState) => {
//     console.log('body', body)
//     console.log('getState', getState())
//     UserService
//       .createUser(JSON.stringify(body))
//       .then(response => {
//         dispatch(saveUser(response));
//       })
//   }
// }



// export {
//   SAVE_USER,
//   requestCreateUser
// }




