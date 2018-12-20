import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import Readme from '../README.md';
import ImagePlaceholder from '.';

const landscapeImageRatio = 56.25;
const squareImageRatio = 100;
const portraitImageRatio = 177.78;

storiesOf('ImagePlaceholder', module)
  .addDecorator(withReadme(Readme))
  .add('16x9 image placeholder', () => (
    <ImagePlaceholder ratio={landscapeImageRatio} />
  ))
  .add('1x1 image placeholder', () => (
    <ImagePlaceholder ratio={squareImageRatio} />
  ))
  .add('9x16 image placeholder', () => (
    <ImagePlaceholder ratio={portraitImageRatio} />
  ));
