import { createStore } from 'redux';
import { UserStore } from './Reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(UserStore, composeWithDevTools());

export {
  store
}
