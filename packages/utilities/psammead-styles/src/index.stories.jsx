import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { GEL_SPACING, GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';
import {
  getBodyCopy,
  GEL_FF_REITH_SANS,
} from '@bbc/gel-foundations/typography';
import { latin } from '@bbc/gel-foundations/scripts';
import notes from '../README.md';
import * as colours from './colours';
import { grid } from './detection';

const ColourContainer = styled.div`
  padding: ${GEL_SPACING_DBL};
  font-family: ${GEL_FF_REITH_SANS};
`;

const ColourRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${GEL_SPACING_DBL};
`;

const ColourBox = styled.div`
  background: ${props => props.colour};
  color: #000;
  padding: ${GEL_SPACING_DBL} ${GEL_SPACING};
  border-radius: 0.3125rem;
  display: inline-block;
  ${getBodyCopy(latin)};
`;

const ColourValue = styled.div`
  padding-left: ${GEL_SPACING};
  display: inline-block;
  ${getBodyCopy(latin)};
`;

const Detects = styled.li`
  color: red;
  &::after {
    content: ' = NO';
  }

  @supports (${props => props.detector}) {
    color: green;
    &::after {
      content: ' = YES';
    }
  }
`;

const detectionExamples = ['display: grid', grid];

storiesOf('Utilities|Psammead Styles', module)
  .add(
    'colours',
    () => (
      <ColourContainer>
        {Object.keys(colours).map(colour => (
          <ColourRow key={colours[colour]}>
            <ColourBox colour={colours[colour]}>{colours[colour]}</ColourBox>
            <ColourValue>{colour}</ColourValue>
          </ColourRow>
        ))}
      </ColourContainer>
    ),
    { notes },
  )
  .add(
    'CSS feature detection',
    () => (
      <ul>
        {detectionExamples.map(ex => (
          <Detects key={ex} detector={ex}>
            <pre>@supports ({ex})</pre>
          </Detects>
        ))}
      </ul>
    ),
    { notes },
  );
