import * as React from 'react';
import { IText } from './data';
import { Text as Layout } from './Layout';

export default function Text(props: IText) {
    return <Layout {...props} />;
  }

  