import { combineReducers } from 'redux';

import { createUserReducer } from '../Page/CreateUser/Store/Reducer'; 

const rootReducer = combineReducers({
  createUserReducer
});

export {
  rootReducer
}
