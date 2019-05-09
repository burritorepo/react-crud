import { createStore } from 'redux';
import { User } from './Reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(User, composeWithDevTools());

export {
  store
}
