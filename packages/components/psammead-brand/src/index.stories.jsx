import React from 'react';
import { storiesOf } from '@storybook/react';
import notes from '../README.md';
import Brand from './index';

storiesOf('Brand', module).add(
  'default',
  () => <Brand brandName="Default Brand Name" />,
  { notes },
);
