import * as React from 'react';
import { IHeader } from './data';
import { Header as Layout } from './Layout';

export default function Header({...props}: IHeader) {
  return (
    <Layout {...props} />
  )
}

  