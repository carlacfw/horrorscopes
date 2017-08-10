import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Form from './Form'

const App = () => (
  <Router>
    <div className='app-container'>
      <h1>Are you ready for your Horrorscope?</h1>
      <Route exact path="/" component={Form} />
    </div>
  </Router>
)

export default App
