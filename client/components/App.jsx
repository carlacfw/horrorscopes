import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Form from './Form'
import UserList from './UserList'
import SingleUser from './SingleUser'

import {connect} from 'react-redux'
import {getStarSigns} from '../actions/star_signs'
import {getUsersRequest} from '../actions/users'

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(getStarSigns())
    this.props.dispatch(getUsersRequest())
  }
  render() {
    return (
      <Router>
        <div className='app-container'>
          <h1>Are you ready for your Horrorscope?</h1>
          <Route exact path="/" component={UserList} />
          <Route exact path="/" component={Form} />
          <Route path='/users/:id' component={(props) => <SingleUser  {...props} />} />
        </div>
      </Router>
    )
  }
}

export default connect()(App)
