import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);
// const store = createStore(reducers)

const root = document.getElementById('root')
root ? ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , root) : false