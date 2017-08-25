import 'babel-polyfill';
import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
// https://github.com/reactjs/react-router-redux
//import { routerMiddleware, push } from 'react-router-redux';
import allReducers from './reducers';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './components/Main';
import { BrowserRouter as Router } from 'react-router-dom';
import './css/index.css';

const finalCreateStore = compose(
    applyMiddleware(thunk, promise),
    window.devToolsExtension()
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
  document.getElementById('root')
);

registerServiceWorker();
