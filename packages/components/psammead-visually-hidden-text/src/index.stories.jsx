import React from 'react';
import { storiesOf } from '@storybook/react';
import notes from '../README.md';
import VisuallyHiddenText from './index';

storiesOf('VisuallyHiddenText', module).add(
  'default',
  () => <VisuallyHiddenText>Some offscreen text</VisuallyHiddenText>,
  { notes },
);
