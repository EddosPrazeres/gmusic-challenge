import React, { useState} from 'react';
import { ISearchSystem } from './data';
import { SearchSystem as Layout } from './Layout';

export default function SearchSystem({...props}: ISearchSystem) {
  const [value, setValue] = useState("");

  const onChange = (e: any) => {
    setValue(e.target.value)
  }
  const onSubmit = (e: any) => {
    e.preventDefault()
  }

  return (
    <Layout {...props} value={value} onChange={onChange} onSubmit={onSubmit}/>
  )
}

  