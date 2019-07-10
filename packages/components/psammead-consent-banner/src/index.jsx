import React from 'react';
import { string, element, bool, shape } from 'prop-types';
import styled from 'styled-components';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import {
  C_CONSENT_BACKGROUND,
  C_CONSENT_ACTION,
  C_CONSENT_CONTENT,
  C_WHITE,
} from '@bbc/psammead-styles/colours';
import {
  getGreatPrimer,
  getLongPrimer,
  GEL_FF_REITH_SANS,
} from '@bbc/gel-foundations/typography';
import {
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_5_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import {
  GEL_MARGIN_BELOW_400PX,
  GEL_MARGIN_ABOVE_400PX,
  GEL_SPACING_DBL,
  GEL_SPACING,
} from '@bbc/gel-foundations/spacings';

const Wrapper = styled.div`
  font-family: ${GEL_FF_REITH_SANS};
  background-color: ${C_CONSENT_BACKGROUND};
  padding: ${GEL_SPACING_DBL} ${GEL_MARGIN_BELOW_400PX};

  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    padding: ${GEL_MARGIN_ABOVE_400PX};
  }
`;

/*
 * The '&::after' below is to ensure that the background colour covers the
 * banner as the inner elements are float. The alernative is to have
 * another div inside. This implementation mirrors the current orbit banner.
 */
const CenterWrapper = styled.div`
  max-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN};
  margin: 0 auto;

  &::after {
    content: '\\0020';
    display: block;
    height: 0;
    clear: both;
    overflow: hidden;
    visibility: hidden;
  }
`;

const Title = styled.h2`
  ${props => (props.script ? getGreatPrimer(props.script) : '')};
  color: ${C_WHITE};
  font-weight: 700;
  padding: 0;
  margin: 0;

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    width: 22%;
    margin-right: 3.5%;
    float: left;
  }
`;

/*
 * The '& li + li' below allows for styling every `li` element except the first.
 */
const Options = styled.ul`
  ${props => (props.script ? getLongPrimer(props.script) : '')};
  color: ${C_CONSENT_ACTION};
  font-weight: 600;
  padding: 0;
  margin: 0;
  list-style-type: none;

  & li + li {
    padding-top: ${GEL_SPACING};
  }

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    width: 18%;
    float: right;
  }
`;

const hoverFocusStyles = `
  &:focus,
  &:hover {
    color: ${C_WHITE};
  }
`;

export const ConsentBannerText = styled.p`
  ${props => (props.script ? getLongPrimer(props.script) : '')};
  color: ${C_CONSENT_CONTENT};

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    margin: 0;
    float: left;
    width: 53%;
  }

  a {
    color: ${C_CONSENT_ACTION};
    text-decoration: none;

    ${hoverFocusStyles}
  }
`;

// Style `button` and `a` as children due to inability to set `on`
// prop on styled component as required for the amp useage
const ListItem = styled.li`
  & button {
    ${props => (props.script ? getGreatPrimer(props.script) : '')};
    color: ${C_CONSENT_ACTION};
    font-weight: 700;
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;

    ${hoverFocusStyles}
  }

  & a {
    color: ${C_CONSENT_ACTION};
    text-decoration: none;

    ${hoverFocusStyles}
  }
`;

export const ConsentBanner = ({
  title,
  text,
  accept,
  reject,
  id,
  hidden,
  script,
}) => (
  <Wrapper id={id} hidden={hidden}>
    <CenterWrapper>
      <Title script={script}>{title}</Title>
      {text}
      <Options script={script}>
        <ListItem script={script}>{accept}</ListItem>
        <ListItem script={script}>{reject}</ListItem>
      </Options>
    </CenterWrapper>
  </Wrapper>
);

ConsentBanner.propTypes = {
  title: string.isRequired,
  text: element.isRequired,
  accept: element.isRequired,
  reject: element.isRequired,
  id: string,
  hidden: bool,
  script: shape(scriptPropType).isRequired,
};

ConsentBanner.defaultProps = {
  id: null,
  hidden: null,
};
