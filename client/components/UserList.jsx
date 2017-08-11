import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const renderUser = (user, key) => (
  <Link key={key} to={'/users/' + user.id}><li>{user.name}</li></Link>
)

const UserList = ({users, dispatch}) => {
  return (
    <div className="userList">
      <ul>
        {users.map(renderUser)}
      </ul>
    </div>
  )
}
const mapStateToProps = ({users}) => {
  return {users}
}

export default connect(mapStateToProps)(UserList)
