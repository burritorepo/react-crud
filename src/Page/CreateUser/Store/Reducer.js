import { combineReducers } from 'redux';

/**
 * Create Reducer
 */
import { initialState } from './State';
import { SAVE_USER } from './Action';

const addUser = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER: {
      const { payload: { response } } = action;
      return Object.assign(state, response);
    }
    default:
      return state
  }
}

const createUserReducer = combineReducers({
  addUser
})

export {
  createUserReducer
}
