import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import logger from 'redux-logger'

import { reducer } from './reducer'
import Info from './Info'

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

          </header>
          <p className="App-intro">
            <Info/>
          </p>
        </div>
      </Provider>
    )
  }
}

export default App
