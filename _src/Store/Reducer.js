import { combineReducers } from 'redux';

// import { createUserReducer } from '../Page/CreateUser/Store/Reducer'; 

// const rootReducer = combineReducers({
//   createUserReducer
// });

// export {
//   rootReducer
// }
import { initialState } from './State';
import {
  SAVE_USER,
  SAVE_ALL_USER
} from './Const';

const User = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER: {
      const { payload: { response } } = action;
      return Object.assign({}, state, {
        LastUser: response
      });
    }
    case SAVE_ALL_USER: {
      const { payload: { response } } = action;
      return Object.assign({}, state, {
        AllUser: [...state.AllUser, response]
      });
    }
    default:
      return state
  }
}

export {
  User
}
