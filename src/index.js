import 'babel-polyfill';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import allReducers from './reducers';
import Main from './components/Main';
import './css/index.css';
import { getUsers } from './actions';

const finalCreateStore = compose(
  applyMiddleware(thunk, promise, logger),
  window.devToolsExtension(),
)(createStore);

const store = finalCreateStore(allReducers, {});

fetch('https://api.myjson.com/bins/11azkt')
  .then(response => response.json())
  .then(users => {
    store.dispatch(getUsers(users.users));
  })
  .catch(error => new Error(error));

render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router>
        <Main />
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root'),
);
