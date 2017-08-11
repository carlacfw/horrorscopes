import React from 'react'
import {connect} from 'react-redux'
import {getStarSigns} from '../actions/star_signs'
import {addUserRequest} from '../actions/users'


class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newUser: {
        horoscope_id: 1,
        name: ''
      }
    }
  }

  updateDetails = (e) => {
    let {newUser} = this.state
    newUser[e.target.name]= e.target.value
    this.setState({newUser})
  }

  submitDetails = (e) => {
    let {newUser} = this.state
    e.preventDefault()
    this.props.dispatch(addUserRequest(newUser))
  }

  render() {
    const renderStarSigns = (sign) => <option key={sign.id} value={sign.id}>{sign.star_signs}</option>
    let {starSigns, dispatch} = this.props
    return (
      <div>
        <form onSubmit={this.submitDetails.bind(this)}>
          <input onChange={this.updateDetails.bind(this)} type="text" name="name" value={this.state.newUser.name}></input>
          <select onChange={this.updateDetails.bind(this)} name="horoscope_id">
            {starSigns.map(renderStarSigns)}
          </select>
          <input type="submit" value="submit"/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log({state});
  return {starSigns: state.starSigns}
}


export default connect(mapStateToProps)(Form)
