import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import styled from 'styled-components';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import ScriptLink from './index';

const Container = styled.div`
  background-color: black;
  padding: 1rem;
  height: 100vh;
`;

storiesOf('Components|ScriptLink', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'default',
    ({ script, service }) => {
      const label = text('Link Label', 'Lat');
      const variant = text('Variant', 'lat');

      return (
        <Container>
          <ScriptLink
            script={script}
            service={service}
            href="https://www.bbc.com/serbian/lat"
            variant={variant}
          >
            {label}
          </ScriptLink>
        </Container>
      );
    },
    {
      notes,
    },
  );
