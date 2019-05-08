// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';


// import { rootReducer } from './Reducer';

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// export {
//   store
// }

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { User } from './Reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(User, composeWithDevTools(applyMiddleware(thunk)));

export {
  store
}
