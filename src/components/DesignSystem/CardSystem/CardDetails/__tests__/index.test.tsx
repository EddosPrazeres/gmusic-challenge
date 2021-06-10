import React from 'react'
import { mount, shallow } from 'enzyme'
import CardUserName from '../index'

const createComponent = (props, useDefault = false) => {
  const componentProps = {    
    ...props,
  }

  const wrapper = useDefault ? mount(<CardUserName  {...componentProps} />) : shallow(<CardUserName     {...componentProps} />)
  const unmount = () => wrapper.unmount()

  return [wrapper, unmount]
}

describe('CardUserName', () => {
  it('should match snapshot', () => {
    const [wrapper, unmount] = createComponent({})

    expect(wrapper).toMatchSnapshot()
    unmount()
  })
})
