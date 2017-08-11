import request from 'superagent'

export const getUsersAction = (users) => {
  return {
    type: 'RECEIVE_USERS',
    users
  }
}

export const addUserAction = (user) => {
  return {
    type: 'ADD_USER',
    user
  }
}

export function getUsersRequest() {
  return (dispatch) => {
    request
      .get('/v1/api/users')
      .end((err, res) => {
        if (err) console.log(err.message)
        dispatch(getUsersAction(res.body))
      })
  }
}

export function addUserRequest(user) {
  return (dispatch) => {
    request
      .post('/v1/api/users')
      .send(user)
      .end((err, res) => {
        if (err) console.log(err.message)
        dispatch(addUserAction(res.body))
      })
  }
}
