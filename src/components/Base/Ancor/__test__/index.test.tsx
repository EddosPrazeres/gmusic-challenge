import React from 'react'
import { mount, shallow } from 'enzyme'
import Ancor from '../index'

const createComponent = (props, useDefault = false) => {
  const componentProps = {    
    ...props,
  }

  const wrapper = useDefault ? mount(<Ancor  {...componentProps} />) : shallow(<Ancor     {...componentProps} />)
  const unmount = () => wrapper.unmount()

  return [wrapper, unmount]
}

describe('Ancor', () => {
  it('should match snapshot', () => {
    const [wrapper, unmount] = createComponent({})

    expect(wrapper).toMatchSnapshot()
    unmount()
  })
})
