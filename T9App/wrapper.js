import React from 'react'
import ReactNative from 'react-native'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './app/reducers/index'
import LookupApp from './app/containers/lookupApp'

const logger = createLogger()
const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore)
const store = createStoreWithMiddleware(reducer)

export default class Wrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <LookupApp />
      </Provider>
    )
  }
}