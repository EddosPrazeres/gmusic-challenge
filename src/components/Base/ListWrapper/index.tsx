import * as React from 'react';
import { useUser } from '../../../hooks';
import { IListWrapper } from './data';
import { ListWrapper as Layout } from './Layout';
import { Empty as EmptyList } from './Layout/Empty'

export default function ListWrapper(props: IListWrapper) {
  const { hasNotFound } = useUser()
  const { ListElements } = props

  if (!!!ListElements.length || hasNotFound) return <EmptyList />
  return (
    <Layout {...props}/>
  )
}

  