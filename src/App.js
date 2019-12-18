import React, { Component } from 'react'
import Layout from 'pages/Layout.jsx'
import store from './store/index.js'
import {Provider} from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout></Layout>
        </Router>
      </Provider>
    )
  }
}
export default App
