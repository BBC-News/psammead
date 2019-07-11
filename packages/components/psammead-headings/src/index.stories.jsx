import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import { Headline, SubHeading } from './index';

storiesOf('Components|Headline', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    inputProvider(
      [{ name: 'Headline' }],
      ({ slotTexts: [headline], script }) => (
        <Headline script={script}>{headline}</Headline>
      ),
    ),
    { notes, knobs: { escapeHTML: false } },
  );

storiesOf('Components|SubHeading', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    inputProvider(
      [{ name: 'SubHeading' }],
      ({ slotTexts: [subheader], script }) => (
        <SubHeading script={script}>{subheader}</SubHeading>
      ),
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'with optional ID',
    inputProvider(
      [{ name: 'SubHeading' }],
      ({ slotTexts: [subheader], script }) => {
        const id = text('ID', 'foo', 'Other');
        return (
          <SubHeading id={id} script={script}>
            {subheader}
          </SubHeading>
        );
      },
    ),
    { notes, knobs: { escapeHTML: false } },
  );
