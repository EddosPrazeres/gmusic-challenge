import * as React from 'react';
import { IListWrapper } from './data';
import { ListWrapper as Layout } from './Layout';

export default function ListWrapper(props: IListWrapper) {
  return (
    <Layout {...props}/>
  )
}

  