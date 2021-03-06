import React from 'react';
import ReactDOM from 'react-dom'; 
import './index.css';
import {Provider, connect } from 'react-redux';
import {createStore,combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import App from './Containers/App.js'
import * as serviceWorker from './serviceWorker'; 
import 'tachyons';
import { searchAutobots, requestAutobots } from './reducers';
 
const logger = createLogger();

const rootReducer = combineReducers({searchAutobots, requestAutobots})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
  <React.StrictMode>
  	<Provider store={store}>
      <App />   
    </Provider>
  </React.StrictMode>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
  