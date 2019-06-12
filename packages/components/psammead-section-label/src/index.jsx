import React from 'react';
import styled, { css } from 'styled-components';
import { bool, oneOf, shape, string } from 'prop-types';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import {
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  MEDIA_QUERY_TYPOGRAPHY,
} from '@bbc/gel-foundations/breakpoints';
import {
  GEL_SPACING,
  GEL_SPACING_DBL,
  GEL_SPACING_TRPL,
  GEL_SPACING_QUAD,
} from '@bbc/gel-foundations/spacings';
import {
  getDoublePica,
  GEL_FF_REITH_SANS,
} from '@bbc/gel-foundations/typography';
import { C_EBON, C_PEBBLE, C_WHITE } from '@bbc/psammead-styles/colours';

const halfLineHeightRem = group => group.lineHeight / 2 / 16;

const top = script => `
  // place at middle of text line height
  top: ${halfLineHeightRem(script.doublePica.groupA)}rem;

  ${MEDIA_QUERY_TYPOGRAPHY.SMART_PHONE_ONLY} {
    top: ${halfLineHeightRem(script.doublePica.groupB)}rem;
  }

  ${MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER} {
    top: ${halfLineHeightRem(script.doublePica.groupD)}rem;
  }
`;

const Wrapper = styled.div`
  position: relative;
  margin-top: ${GEL_SPACING_TRPL};
  margin-bottom: ${GEL_SPACING_DBL};

  ${MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER} {
    margin-top: ${GEL_SPACING_QUAD};
    margin-bottom: ${GEL_SPACING_TRPL};
  }

  ${({ bar }) =>
    bar &&
    css`
      &::before {
        content: '';
        position: absolute;
        border-top: 0.0625rem solid ${C_PEBBLE};
        left: 0;
        right: 0;
        ${({ script }) => (script ? top(script) : 'top: 0')};
        @media screen and (-ms-high-contrast: active) {
          border-color: windowText;
        }
      }
    `}
`;

Wrapper.propTypes = {
  bar: bool.isRequired,
  script: shape(scriptPropType).isRequired,
};

const paddingDir = ({ dir }) => `padding-${dir === 'ltr' ? 'right' : 'left'}`;

const Title = styled.h2`
  ${({ script }) => script && getDoublePica(script)};
  color: ${C_EBON};
  background-color: ${C_WHITE};
  font-family: ${GEL_FF_REITH_SANS};
  font-weight: normal;
  display: inline-block;
  position: relative;

  /* Unset the browser's default margins. */
  margin: 0;

  ${paddingDir}: ${GEL_SPACING};

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    ${paddingDir}: ${GEL_SPACING_DBL};
  }
`;

Title.propTypes = {
  dir: oneOf(['ltr', 'rtl']).isRequired,
  script: shape(scriptPropType).isRequired,
};

const SectionLabel = ({ bar, children: title, dir, labelId, script }) => (
  <Wrapper script={script} bar={bar}>
    <Title script={script} dir={dir} id={labelId}>
      {title}
    </Title>
  </Wrapper>
);

SectionLabel.defaultProps = {
  bar: true,
  dir: 'ltr',
};

SectionLabel.propTypes = {
  bar: bool,
  children: string.isRequired,
  dir: oneOf(['ltr', 'rtl']),
  labelId: string.isRequired,
  script: shape(scriptPropType).isRequired,
};

export default SectionLabel;
