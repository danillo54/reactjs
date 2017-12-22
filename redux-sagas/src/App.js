import React, { Component } from 'react';


import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {Provider} from 'react-redux'
import reducers from './reducers/index'
import indexSaga from './sagas/index'
import Info from './Info'
import UserAgent from './UserAgent'

import './App.css';

const sagaMiddleware = createSagaMiddleware()

const store  = createStore(
    reducers, 
    applyMiddleware(sagaMiddleware))


sagaMiddleware.run(indexSaga)
    
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">         
          <h1 className="App-title">Welcome to Redux-Saga</h1>
        </header>
        <Provider store={store}>  
            <div>        
            <Info/>
            <UserAgent/>
            </div>
        </Provider>
      </div>
    );
  }
}

export default App;
