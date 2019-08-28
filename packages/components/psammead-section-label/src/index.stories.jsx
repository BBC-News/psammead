import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import SectionLabel from './index';

storiesOf('Components|SectionLabel', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    inputProvider(
      [{ name: 'title', defaultText: 'Most Read' }],
      ({ slotTexts: [title], script, dir, service }) => (
        <SectionLabel
          script={script}
          dir={dir}
          bar={boolean('show bar?', true)}
          visuallyHidden={boolean(
            'visually hide component when width less than 600px?',
            false,
          )}
          labelId="example-section-label"
          service={service}
        >
          {title}
        </SectionLabel>
      ),
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'with a link',
    inputProvider(
      [{ name: 'title', defaultText: 'Most Read' }],
      ({ slotTexts: [title], script, dir, service }) => (
        <SectionLabel
          script={script}
          dir={dir}
          bar={boolean('show bar?', true)}
          visuallyHidden={boolean(
            'visually hide component when width less than 600px?',
            false,
          )}
          labelId="example-section-label"
          service={service}
          linkText="See All"
          href="https://www.bbc.com/igbo"
        >
          {title}
        </SectionLabel>
      ),
    ),
    { notes, knobs: { escapeHTML: false } },
  );
