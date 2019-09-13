import { createStore, applyMiddleware, compose } from 'redux';
import mainReducer from './reducer/mainReducer';
import thunk from 'redux-thunk';


const store = createStore(
  mainReducer,
  compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() || compose)
);

export default store;