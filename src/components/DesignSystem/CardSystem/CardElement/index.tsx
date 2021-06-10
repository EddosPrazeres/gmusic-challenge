import * as React from 'react';
import { ICardElement } from './data';
import { CardElement as Layout } from './Layout';

export default function CardElement(props: ICardElement) {
  return (
    <Layout {...props}/>
  )
}

  