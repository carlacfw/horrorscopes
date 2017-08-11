import React from 'react'
import {connect} from 'react-redux'
import {getStarSigns} from '../actions/star_signs'


const renderStarSigns = (sign) => (
    <option key={sign.id} value={sign.id}>{sign.star_signs}</option>
)

const Form = ({starSigns, dispatch}) => (
  <div>
    <form>
      <input type="text" name="name" value="bob"></input>
      <select name="horoscope_id">
        {starSigns.map(renderStarSigns)}
      </select>
      <input type="submit" value="submit"/>
    </form>
  </div>
)

const mapStateToProps = (state) => {
  console.log({state});
  return {starSigns: state.starSigns}
}


export default connect(mapStateToProps)(Form)
