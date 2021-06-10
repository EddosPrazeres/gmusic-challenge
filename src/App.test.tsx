import React from 'react'
import { mount, shallow } from 'enzyme'
import App from './App'

import Routes from './routes';
import { GlobalProvider } from './components'

const createComponent = (props, useDefault = false) => {
  const componentProps = {    
    ...props,
  }

  const wrapper = useDefault ? mount(<App {...componentProps} />) : shallow(<App {...componentProps} />)
  const unmount = () => wrapper.unmount()

  return [wrapper, unmount]
}

describe('App', () => {
  it('should match snapshot', () => {
    const [wrapper, unmount] = createComponent({})

    expect(wrapper).toMatchSnapshot()
    unmount()
  })

  it('should render Routes', () => {
    const [wrapper, unmount] = createComponent({})
    expect(wrapper.find(Routes).length).toBe(1)
    unmount()
  })

  it('should render GlobalProvider', () => {
    const [wrapper, unmount] = createComponent({})
    expect(wrapper.find(GlobalProvider).length).toBe(1)
    unmount()
  })
})
