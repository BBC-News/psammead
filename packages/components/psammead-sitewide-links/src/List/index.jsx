import React from 'react';
import styled from 'styled-components';
import { string, arrayOf, shape } from 'prop-types';
import nanoid from 'nanoid';
import { C_WHITE } from '@bbc/psammead-styles/colours';
import { GEL_SPACING, GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';
import {
  GEL_GROUP_2_SCREEN_WIDTH_MAX,
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MAX,
  GEL_GROUP_4_SCREEN_WIDTH_MIN,
  GEL_GROUP_4_SCREEN_WIDTH_MAX,
  GEL_GROUP_5_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';

import Link from '../Link';

const StyledList = styled.ul`
  border-bottom: 1px solid ${C_WHITE};
  display: grid;
  grid-auto-flow: column;
  list-style-type: none;
  margin: 0;
  padding: 0 0 ${GEL_SPACING};
  @media (max-width: ${GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
    grid-column-gap: ${GEL_SPACING};
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, auto);
  }
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_3_SCREEN_WIDTH_MAX}) {
    grid-column-gap: ${GEL_SPACING_DBL};
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, auto);
  }
  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_4_SCREEN_WIDTH_MAX}) {
    grid-column-gap: ${GEL_SPACING_DBL};
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, auto);
  }
  @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
    grid-column-gap: ${GEL_SPACING_DBL};
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, auto);
  }
  > li:first-child {
    border-bottom: 1px solid ${C_WHITE};
    padding: ${GEL_SPACING} 0;
    margin-bottom: ${GEL_SPACING};
    grid-column: 1/-1;
    @supports not (display: grid) {
      width: 100%;
    }
  }
`;

const StyledListItem = styled.li`
  min-width: 50%;
  @supports not (display: grid) {
    display: inline-block;
  }
`;

const List = ({ links }) => (
  <StyledList role="list">
    {links.map(link => (
      <StyledListItem key={nanoid()} role="listitem">
        <Link text={link.text} href={link.href} />
      </StyledListItem>
    ))}
  </StyledList>
);

const linkPropTypes = shape({
  href: string.isRequired,
  text: string.isRequired,
});

List.propTypes = {
  links: arrayOf(linkPropTypes.isRequired).isRequired,
};

export default List;
