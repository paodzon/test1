import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';

import './index.scss';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducers from './reducers';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(reduxThunk)));

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>
,
  document.getElementById('root')
);
