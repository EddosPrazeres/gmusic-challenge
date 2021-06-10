import React from 'react'
import { mount, shallow } from 'enzyme'
import Details from '../index'

const createComponent = (props, useDefault = false) => {
  const componentProps = {  
    ...props,
  }

  const wrapper = useDefault ? mount(<Details  {...componentProps} />) : shallow(<Details     {...componentProps} />)
  const unmount = () => wrapper.unmount()

  return [wrapper, unmount]
}

describe('Details View', () => {
  it.skip('should match snapshot', () => {
    const [wrapper, unmount] = createComponent({})

    expect(wrapper).toMatchSnapshot()
    unmount()
  })
})
