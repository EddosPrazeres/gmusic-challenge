import * as React from 'react';
import { IAncor } from './data';
import { Ancor as Layout } from './Layout';

export default function Ancor({...props}: IAncor) {
  return (
    <Layout {...props} />
  )
}

  