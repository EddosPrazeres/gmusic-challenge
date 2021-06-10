import * as React from 'react';
import { IRepositoryElement } from './data';
import { RepositoryElement as Layout } from './Layout';

export default function RepositoryElement(props: IRepositoryElement) {
  return (
    <Layout {...props}/>
  )
}

  