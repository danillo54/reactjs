import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import logger from 'redux-logger'

import reducer  from './reducers/index'
import Info from './Info'
import UserAgent from './UserAgent'

import './App.css'

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger)
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <div className="App-title">
              Redux - Thunk Sample
              </div>
          </header>
          <p className="App-intro">
            <Info /><br></br>
            <UserAgent/>
          </p>
        </div>
      </Provider>
    )
  }
}

export default App
