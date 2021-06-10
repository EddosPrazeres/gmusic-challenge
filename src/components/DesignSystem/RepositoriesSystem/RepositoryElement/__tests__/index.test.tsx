import React from 'react'
import { mount, shallow } from 'enzyme'
import SearchSystem from '../index'

const createComponent = (props, useDefault = false) => {
  const componentProps = {    
    ...props,
  }

  const wrapper = useDefault ? mount(<SearchSystem  {...componentProps} />) : shallow(<SearchSystem     {...componentProps} />)
  const unmount = () => wrapper.unmount()

  return [wrapper, unmount]
}

describe('SearchSystem', () => {
  it('should match snapshot', () => {
    const [wrapper, unmount] = createComponent({})

    expect(wrapper).toMatchSnapshot()
    unmount()
  })
})
