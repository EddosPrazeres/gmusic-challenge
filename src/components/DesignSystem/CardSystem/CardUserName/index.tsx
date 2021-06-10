import * as React from 'react';
import { ICardUserName } from './data';
import { CardUserName as Layout } from './Layout';

export default function CardUserName(props: ICardUserName){
  return (
    <Layout {...props}/>
  )
}

  