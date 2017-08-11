import request from 'superagent'

export const receiveStarSigns = (signs) => {
  return {
    type: 'RECEIVE_STAR_SIGNS',
    signs
  }
}

export function getStarSigns () {
  return (dispatch) => {
    request
      .get("/v1/api/horoscopes/starSigns")
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveStarSigns(res.body))
      })
  }
}

// export function createUser () {
//   return (dispatch) => {
//     request
//       .post(`/v1/api/users`)
//       .send(/*get form from state somehow*/)
//       .end((err, res) => {
//         if (err) {
//           console.error(err.message)
//           return
//         }
//         dispatch(/*here maybe get response from server to do redirect later???*/())
//       })
//   }
// }
