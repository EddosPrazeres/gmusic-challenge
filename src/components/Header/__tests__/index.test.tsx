import React from 'react'
import { mount, shallow } from 'enzyme'
import Header from '../index'

const createComponent = (props, useDefault = false) => {
  const componentProps = {    
    ...props,
  }

  const wrapper = useDefault ? mount(<Header  {...componentProps} />) : shallow(<Header     {...componentProps} />)
  const unmount = () => wrapper.unmount()

  return [wrapper, unmount]
}

describe('Header', () => {
  it('should match snapshot', () => {
    const [wrapper, unmount] = createComponent({})

    expect(wrapper).toMatchSnapshot()
    unmount()
  })
})
