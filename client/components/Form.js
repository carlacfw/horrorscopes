import React from 'react'
import {connect} from 'react-redux'
import {getStarSigns} from '../actions/star_signs'


const renderStarSigns = (sign) => (
    <option key={sign.id} value={sign.id}>{sign.star_signs}</option>
)

const Form = ({starSigns, dispatch}) => (
  <div>
    <form>
      <input type="text" name="name" />
      <select onClick={() => dispatch(getStarSigns())} name="horoscope_id">
        {starSigns.map(renderStarSigns)}
      </select>
      <input type="submit" value="submit"/>
    </form>
    <button>get options</button>
  </div>
)

const mapStateToProps = (state) => {
  return {starSigns: state.starSigns}
}


export default connect(mapStateToProps)(Form)
