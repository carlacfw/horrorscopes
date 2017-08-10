function starSigns (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_STAR_SIGNS':
      return [...action.signs]
    default:
      return state
  }
}

export default starSigns
