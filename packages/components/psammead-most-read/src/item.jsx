import React, { Fragment } from 'react';
import { node, oneOf, shape, string } from 'prop-types';
import styled from 'styled-components';
import { getFoolscap, getDoublePica } from '@bbc/gel-foundations/typography';
import { C_EBON, C_POSTBOX } from '@bbc/psammead-styles/colours';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { GEL_SPACING } from '@bbc/gel-foundations/spacings';
import {
  getSerifLight,
  getSerifMedium,
} from '@bbc/psammead-styles/font-styles';

export const StyledCountSpan = styled.span`
  ${({ script }) => script && getFoolscap(script)};
  ${({ service }) => getSerifLight(service)}
  color: ${C_POSTBOX};
  margin: 0; /* Reset */
  padding-bottom: ${GEL_SPACING};
  display: inline-block;
  min-width: 3rem;
`;

const StyledLink = styled.a`
  ${({ script }) => script && getDoublePica(script)};
  ${({ service }) => getSerifMedium(service)}
  color: ${C_EBON};
  text-decoration: none;
  padding-bottom: ${GEL_SPACING};
  
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const MostReadItem = ({
  dir,
  lastUpdated,
  script,
  service,
  item: { title, href },
}) => (
  <Fragment dir={dir}>
    <StyledLink href={href} script={script} service={service}>
      {title}
    </StyledLink>
    {lastUpdated}
  </Fragment>
);

StyledCountSpan.propTypes = {
  service: string.isRequired,
  script: shape(scriptPropType).isRequired,
};

MostReadItem.propTypes = {
  dir: string,
  service: string.isRequired,
  script: shape(scriptPropType).isRequired,
  lastUpdated: node,
  item: shape({
    title: string.isRequired,
    href: string.isRequired,
  }).isRequired,
};

MostReadItem.defaultProps = {
  dir: oneOf(['rtl', 'ltr']),
  lastUpdated: null,
};
