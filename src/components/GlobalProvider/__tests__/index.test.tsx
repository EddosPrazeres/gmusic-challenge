import React from 'react'
import { mount, shallow } from 'enzyme'
import GlobalProvider from '../index'

const createComponent = (props, useDefault = false) => {
  const componentProps = {    
    ...props,
  }

  const wrapper = useDefault ? mount(<GlobalProvider  {...componentProps} />) : shallow(<GlobalProvider     {...componentProps} />)
  const unmount = () => wrapper.unmount()

  return [wrapper, unmount]
}

describe('GlobalProvider', () => {
  it('should match snapshot', () => {
    const [wrapper, unmount] = createComponent({})

    expect(wrapper).toMatchSnapshot()
    unmount()
  })
})
