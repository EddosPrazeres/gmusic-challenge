import * as React from 'react';
import { ICardWrapper } from './data';
import { CardWrapper as Layout } from './Layout';

export default function CardWrapper(props: ICardWrapper) {
  return (
    <Layout {...props}/>
  )
}

  