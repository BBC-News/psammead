import React from 'react';
import styled from '@emotion/styled';
import { string, number } from 'prop-types';
import { GEL_SPACING, GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';
import { C_WHITE } from '@bbc/psammead-styles/colours';
import {
  GEL_GROUP_1_SCREEN_WIDTH_MAX,
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';

const Wrapper = styled.div`
  display: inline-block;
  width: ${props => props.size};
  height: ${props => props.size};
  @media (max-width: ${GEL_GROUP_1_SCREEN_WIDTH_MAX}) {
    margin-left: ${props => (props.dir === 'ltr' ? 0 : GEL_SPACING_DBL)};
    margin-right: ${props => (props.dir === 'ltr' ? GEL_SPACING_DBL : 0)};
    padding-top: ${props => (props.dir === 'ltr' ? 0 : '0.25rem')};
  }
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    margin-left: ${props =>
      props.dir === 'ltr' ? GEL_SPACING : GEL_SPACING_DBL};
    margin-right: ${props =>
      props.dir === 'ltr' ? GEL_SPACING_DBL : GEL_SPACING};
    padding-top: ${props => (props.dir === 'ltr' ? 0 : '0.25rem')};
  }
  vertical-align: top;
`;

const MediaIndicator = ({ size, dir }) => (
  <Wrapper
    aria-hidden="true"
    size={size}
    dir={dir}
    dangerouslySetInnerHTML={{
      __html: `
      <svg class="rounded-play-button" focusable="false" width=${size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}">
          <path class="rounded-play-button__outer-circle" d="M20,0C8.954,0,0,8.954,0,20s8.954,20,20,20s20-8.954,20-20S31.046,0,20,0z"/>
          <path class="rounded-play-button__inner-circle" fill=${C_WHITE} d="M20,1.765C9.929,1.765,1.765,9.929,1.765,20S9.929,38.235,20,38.235S38.235,30.071,38.235,20
          S30.071,1.765,20,1.765z"/>
          <polygon class="rounded-play-button__triangle" points="15.799,26.94 27.062,20.009 15.799,13.078 "/>
      </svg>
      `,
    }}
  />
);

MediaIndicator.propTypes = {
  size: number.isRequired,
  dir: string.isRequired,
};

export default MediaIndicator;
