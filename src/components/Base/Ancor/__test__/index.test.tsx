import React from 'react'
import { mount, shallow } from 'enzyme'
import Ancor from '../index'
import { Ancor as Layout } from '../Layout'

const mockedProps = {
  title: "Título",
  target: "_blank",
  link: "wwww.google.com",
  onClick: jest.fn(),
}

const createComponent = (props, useDefault = false) => {
  const componentProps = {   
    ...mockedProps,
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

  describe('Props', () => {
    it('should call Layout Component with all Menu Component Ancor', () => {
      const [wrapper, unmount] = createComponent({})
      
      expect(wrapper.find(Layout).props()).toEqual(mockedProps)      
      unmount()
    })

    it('should call Layout Component with all Menu Component Ancor', () => {
      const [wrapper, unmount] = createComponent({title: undefined})
      
      expect(wrapper.find(Layout).props().title).toBeDefined()
      unmount()
    })
  })  
})
