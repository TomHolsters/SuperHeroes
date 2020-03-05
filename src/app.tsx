import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './state/hero/store'
import { BrowserRouter as Router } from 'react-router-dom'
import Menu from './components/Parts/Menu/Menu'
import Page from './components/Page/Page'
import './app.css'

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className='container'>
        <Menu />
        <Page />
      </div>
    </Router>
    </Provider>
  )
}
ReactDOM.render(<App />, document.getElementById('app'))
