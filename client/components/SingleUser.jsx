import React from 'react'
import {connect} from 'react-redux'
import request from 'superagent'

class SingleUser extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        horrorScope: null,
        user: this.props.users.find((user) => user.id == this.props.match.params.id) || {name: 'not found'}
      }
    }
    getHoroscopeForUser(id) {
      //request for horrorscope by user

    }
    saveHorrorScope(horrorScope) {
      this.setState({horrorScope})
    }
    componentDidMount() {
      //request for starsig for user id
      this.getHoroscopeForUser(this.props.match.params.id)
      let id = this.props.match.params.id
    }
    render() {
      return (
        <div>{this.state.user.name}</div>
      )
    }
}

const mapStateToProps = ({users}) => {
  return {users}
}

export default connect(mapStateToProps)(SingleUser)
