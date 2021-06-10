import * as React from 'react';
import { useUser } from '../../../../hooks';
import { IRepositoriesList } from './data';
import { RepositoriesList as Layout } from './Layout';

export default function RepositoriesList(props: IRepositoriesList) {
  const { userRepositories } = useUser()
  return (
    <Layout ListElements={userRepositories}/>
  )
}

  