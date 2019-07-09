import styled, { css } from 'styled-components';
import { shape } from 'prop-types';
import {
  GEL_SPACING,
  GEL_SPACING_TRPL,
  GEL_MARGIN_ABOVE_400PX,
  GEL_MARGIN_BELOW_400PX,
} from '@bbc/gel-foundations/spacings';
import {
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MAX,
  GEL_GROUP_4_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import {
  getLongPrimer,
  GEL_FF_REITH_SANS,
} from '@bbc/gel-foundations/typography';
import { C_METAL } from '@bbc/psammead-styles/colours';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';

// Defined separately since in future will need to apply
// only when the script supports italic text
const FS_ITALIC = css`
  font-style: italic;
`;

const Caption = styled.figcaption`
  ${props => (props.script ? getLongPrimer(props.script) : '')};
  color: ${C_METAL};
  font-family: ${GEL_FF_REITH_SANS};
  ${FS_ITALIC};
  padding: ${GEL_SPACING} ${GEL_MARGIN_BELOW_400PX} 0;
  width: 100%;
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_3_SCREEN_WIDTH_MAX}) {
    padding: ${GEL_SPACING} ${GEL_MARGIN_ABOVE_400PX} 0;
  }
  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    padding: ${GEL_SPACING} 0 0;
  }
  & > p {
    padding-bottom: ${GEL_SPACING_TRPL};
    margin: 0; /* reset */
  }
  & > p:last-child {
    padding-bottom: 0;
  }
  & i {
    font-style: normal;
  }
`;

Caption.propTypes = {
  script: shape(scriptPropType).isRequired,
};

export default Caption;
