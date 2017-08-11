import React from 'react'
import test from 'ava'
import { shallow, mount } from 'enzyme'

import App from '../../client/components/App'
import './setup-dom'

App.prototype.componentDidMount = () => {}

test('Hello World renders on App', t => {
  var wrapper = shallow(<App />)
  t.is(wrapper.find('h1').text(), 'Are you ready for your Horrorscope?')
})
