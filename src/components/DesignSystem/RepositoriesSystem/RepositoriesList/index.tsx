import * as React from 'react';
import { IRepositoriesList } from './data';
import { RepositoriesList as Layout } from './Layout';

export default function RepositoriesList(props: IRepositoriesList) {
  return (
    <Layout {...props}/>
  )
}

  