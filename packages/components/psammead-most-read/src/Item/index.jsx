import React from 'react';
import { shape, string, oneOf, arrayOf, number, node } from 'prop-types';
import styled from 'styled-components';
import { getFoolscap, getDoublePica } from '@bbc/gel-foundations/typography';
import { GEL_SPACING_TRPL } from '@bbc/gel-foundations/spacings';
import {
  GEL_GROUP_5_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_1_SCREEN_WIDTH_MIN,
  GEL_GROUP_0_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import { C_EBON, C_POSTBOX } from '@bbc/psammead-styles/colours';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import {
  getSerifLight,
  getSerifMedium,
} from '@bbc/psammead-styles/font-styles';

// This is to handle the padding between the rank and the link for both ltr and rtl stories.
const paddingStart = ({ dir }) => `padding-${dir === 'ltr' ? 'left' : 'right'}`;

// This is to make where the link ends consistent for both columns
const paddingEnd = ({ dir }) => `padding-${dir === 'ltr' ? 'right' : 'left'}`;

// Bengali uses the Shonar Bangalar font which has smaller glyphs than every other font,
// hence Bengali has its own special spacings.
const isBengali = (service, yes, no) => (service === 'bengali' ? yes : no);

// For additional spacing for numerals in the right column because of '10' being double digits
const isOnRightColumn = ({ listIndex, items }, supportsGrid) =>
  supportsGrid
    ? listIndex + 1 > Math.ceil(items.length / 2)
    : (listIndex + 1) % 2 === 0;

// To add padding to the right of the link in order to make it consistent with the links in the right column
const isOnLeftColumn = ({ listIndex, items }, supportsGrid) =>
  supportsGrid
    ? listIndex + 1 <= Math.ceil(items.length / 2)
    : (listIndex + 1) % 2 === 1;

const rightColumnHasDoubleDigits = ({ items }) => items.length >= 9;

const StyledLink = styled.a`
  ${({ script }) => script && getDoublePica(script)};
  ${({ service }) => getSerifMedium(service)}

  color: ${C_EBON};
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

const StyledWrapper = styled.div`
  @media (min-width: ${GEL_GROUP_0_SCREEN_WIDTH_MIN}) {
    min-width: ${props =>
      rightColumnHasDoubleDigits(props) ? '2rem' : 'auto'};
  }

  @media (min-width: ${GEL_GROUP_1_SCREEN_WIDTH_MIN}) {
    min-width: ${props =>
      rightColumnHasDoubleDigits(props)
        ? isBengali(props.service, '2rem', '3rem')
        : 'auto'};
  }

  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    min-width: ${props =>
      isOnRightColumn(props, false) && rightColumnHasDoubleDigits(props)
        ? isBengali(props.service, '2rem', '3rem')
        : 'auto'};
  }

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    min-width: ${props =>
      isOnRightColumn(props, false) && rightColumnHasDoubleDigits(props)
        ? isBengali(props.service, '3rem', '4rem')
        : 'auto'};
  }

  @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
    min-width: ${props =>
      props.listIndex === 4 && rightColumnHasDoubleDigits(props)
        ? isBengali(props.service, '3rem', '4.2rem')
        : 'auto'};
  }

  @supports (display: grid) {
    @media (min-width: ${GEL_GROUP_0_SCREEN_WIDTH_MIN}) {
      min-width: ${props =>
        rightColumnHasDoubleDigits(props) ? '2rem' : 'auto'};
    }

    @media (min-width: ${GEL_GROUP_1_SCREEN_WIDTH_MIN}) {
      min-width: ${props =>
        rightColumnHasDoubleDigits(props)
          ? isBengali(props.service, '2rem', '3rem')
          : 'auto'};
    }

    @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
      min-width: ${props =>
        isOnRightColumn(props, true) && rightColumnHasDoubleDigits(props)
          ? isBengali(props.service, '2rem', '3rem')
          : 'auto'};
    }

    @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
      min-width: ${props =>
        isOnRightColumn(props, true) && rightColumnHasDoubleDigits(props)
          ? isBengali(props.service, '3rem', '4rem')
          : 'auto'};
    }

    @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
      min-width: ${props =>
        props.listIndex === 4 && rightColumnHasDoubleDigits(props)
          ? isBengali(props.service, '3rem', '4.2rem')
          : 'auto'};
    }
  }
`;

const StyledItem = styled.div`
  ${paddingStart}: 16px;
  padding-bottom: ${GEL_SPACING_TRPL};
  ${paddingEnd}: ${props =>
  isOnLeftColumn(props, true) && rightColumnHasDoubleDigits(props)
    ? '2rem;'
    : '0rem;'}

  @media (min-width: ${GEL_GROUP_0_SCREEN_WIDTH_MIN}) {
    ${paddingEnd}: 0rem;
  }

  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    ${paddingEnd}: ${props =>
  isOnLeftColumn(props, false) && rightColumnHasDoubleDigits(props)
    ? '1.5rem;'
    : '0rem;'}
  }

  @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
    ${paddingEnd}: 1rem;
  }


  @supports (display: grid) {
    @media (min-width: ${GEL_GROUP_0_SCREEN_WIDTH_MIN}) {
      ${paddingEnd}: 0rem;
    }

    @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
      ${paddingEnd}: ${props =>
  isOnLeftColumn(props, true) && rightColumnHasDoubleDigits(props)
    ? '1.5rem;'
    : '0rem;'}
    }

    @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
      ${paddingEnd}: 0rem;
    }
  }
`;

export const MostReadRank = styled.span`
  ${({ service }) => getSerifLight(service)}
  ${({ script }) => script && getFoolscap(script)};
  color: ${C_POSTBOX};
  margin: 0; /* Reset */
  padding: 0;
  float: ${props => (props.dir === 'rtl' ? 'right' : 'left')};
`;

export const MostReadRankWrapper = ({
  service,
  script,
  rank,
  listIndex,
  items,
  dir,
}) => (
  <StyledWrapper
    listIndex={listIndex}
    service={service}
    items={items}
    dir={dir}
  >
    <MostReadRank service={service} script={script} dir={dir}>
      {rank}
    </MostReadRank>
  </StyledWrapper>
);

export const MostReadLink = ({
  service,
  script,
  lastUpdated,
  listIndex,
  items,
  link: { title, href },
  dir,
}) => (
  <StyledItem dir={dir} listIndex={listIndex} items={items}>
    <StyledLink href={href} script={script} service={service}>
      {title}
    </StyledLink>
    {lastUpdated}
  </StyledItem>
);

MostReadRank.propTypes = {
  service: string.isRequired,
  script: shape(scriptPropType).isRequired,
  dir: oneOf(['rtl', 'ltr']),
};

MostReadRank.defaultProps = {
  dir: 'ltr',
};

export const itemPropTypes = shape({
  title: string.isRequired,
  href: string.isRequired,
});

MostReadRankWrapper.propTypes = {
  service: string.isRequired,
  script: shape(scriptPropType).isRequired,
  rank: string,
  listIndex: number.isRequired,
  items: arrayOf(itemPropTypes).isRequired,
  dir: oneOf(['rtl', 'ltr']),
};

MostReadRankWrapper.defaultProps = {
  rank: null,
  dir: 'ltr',
};

MostReadLink.propTypes = {
  service: string.isRequired,
  script: shape(scriptPropType).isRequired,
  lastUpdated: node,
  listIndex: number,
  items: arrayOf(itemPropTypes),
  link: shape({
    title: string.isRequired,
    href: string.isRequired,
  }).isRequired,
  dir: oneOf(['rtl', 'ltr']),
};

MostReadLink.defaultProps = {
  lastUpdated: null,
  listIndex: 0,
  items: null,
  dir: 'ltr',
};
