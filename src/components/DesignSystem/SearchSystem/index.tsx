import React, { useEffect, useState} from 'react';
import { ISearchSystem } from './data';
import { SearchSystem as Layout } from './Layout';
import { useUser } from '../../../hooks'

export default function SearchSystem({...props}: ISearchSystem) {
  const [value, setValue] = useState("");
  const { getSpecificUser, clearSpecificUser } = useUser()

  useEffect(()=> {
    clearSpecificUser(value)
  }, [value, clearSpecificUser])

  const onChange = (e: any) => {
    setValue(e.target.value);
  }
  const onSubmit = (e: any) => {
    e.preventDefault();
    getSpecificUser(value);
  }

  return (
    <Layout {...props} value={value} onChange={onChange} onSubmit={onSubmit}/>
  )
}

  