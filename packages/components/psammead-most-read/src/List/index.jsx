import React from 'react';
import styled from 'styled-components';
import { oneOf, number, node } from 'prop-types';
import {
  GEL_GROUP_1_SCREEN_WIDTH_MAX,
  GEL_GROUP_5_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import Grid from '@bbc/psammead-grid';
import { mostReadListGridProps } from '../testHelpers/gridProps';

const StyledOl = styled.ol.attrs({
  role: 'list',
})`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const StyledGrid = styled(Grid)`
  grid-auto-flow: column;
  grid-template-rows: repeat(
    ${props => Math.ceil(props.numberOfItems / 2)},
    [col-start] auto [col-end]
  );
  @media (max-width: ${GEL_GROUP_1_SCREEN_WIDTH_MAX}) {
    grid-template-rows: repeat(
      ${props => props.numberOfItems},
      [col-start] auto [col-end]
    );
  }
  @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
    grid-auto-flow: row;
    grid-template-rows: repeat(
      ${props => Math.floor(props.numberOfItems / 2)},
      [col-start] auto [col-end]
    );
  }
`;

const MostReadList = ({ numberOfItems, dir, children }) => (
  <StyledOl>
    <StyledGrid
      {...mostReadListGridProps}
      dir={dir}
      numberOfItems={numberOfItems}
    >
      {children}
    </StyledGrid>
  </StyledOl>
);

MostReadList.propTypes = {
  numberOfItems: number.isRequired,
  children: node.isRequired,
  dir: oneOf(['rtl', 'ltr']),
};

MostReadList.defaultProps = {
  dir: 'ltr',
};

export default MostReadList;
