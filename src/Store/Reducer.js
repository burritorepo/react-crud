import { combineReducers } from 'redux';
import { initialState } from './State';

const User = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_USER': {
      const { payload: { response } } = action;
      return Object.assign({}, state, {
        LastUser: response
      });
    }
    case 'SAVE_ALL_USER': {
      const { payload: { response } } = action;
      return Object.assign({}, state, {
        AllUsers: [...state.AllUsers, Object.assign({}, response)]
      });
    }
    default:
      return state
  }
}

const UserStore = combineReducers({
  User
})

export {
  UserStore
}
