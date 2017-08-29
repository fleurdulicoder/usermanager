import 'babel-polyfill';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import allReducers from './reducers';
import Main from './components/Main';
import './css/index.css';

const finalCreateStore = compose(
  applyMiddleware(thunk, promise),
  window.devToolsExtension(),
)(createStore);

const store = finalCreateStore(allReducers, {});

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
