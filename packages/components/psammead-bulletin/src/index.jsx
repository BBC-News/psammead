import React from 'react';
import styled, { css } from 'styled-components';
import {
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MAX,
} from '@bbc/gel-foundations/breakpoints';
import { GEL_SPACING, GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';
import {
  C_WHITE,
  C_POSTBOX,
  C_SHADOW,
  C_EBON,
  C_LUNAR,
} from '@bbc/psammead-styles/colours';
import { string, oneOf, node, bool, shape } from 'prop-types';
import {
  getSansRegular,
  getSerifMedium,
} from '@bbc/psammead-styles/font-styles';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import {
  getPica,
  getGreatPrimer,
  getLongPrimer,
} from '@bbc/gel-foundations/typography';
import { mediaIcons } from '@bbc/psammead-assets/svgs';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import { Link, LiveLabel } from '@bbc/psammead-story-promo';
import ImageGridItem from './ImageStyles';
import TextGridItem from './TextStyles';

const bulletinWrapperStyles = `
  position: relative;
  background-color: ${C_LUNAR};
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: ${GEL_SPACING_DBL};
`;

const RadioBulletinWrapper = styled.div`
  ${bulletinWrapperStyles};
  background-color: ${C_LUNAR};
`;

const TVBulletinWrapper = styled.div`
  ${bulletinWrapperStyles};
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    padding: ${GEL_SPACING_DBL};
  }
`;

const headingStyles = css`
  color: ${C_EBON};
  margin: 0; /* Reset */
  padding: ${GEL_SPACING};
  ${({ service }) => service && getSerifMedium(service)}
`;

const radioHeading = css`
  ${({ script }) => script && getPica(script)}
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_3_SCREEN_WIDTH_MAX}) {
    padding-top: ${GEL_SPACING};
    padding-bottom: ${GEL_SPACING};
    ${({ dir }) => (dir === 'ltr' ? `padding-left: 0;` : `padding-right: 0;`)}
  }
`;

const tvHeading = css`
  ${({ script }) => script && getGreatPrimer(script)}
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    padding: 0 0 ${GEL_SPACING} 0;
  }
`;

const bulletinHeadinStyles = {
  radio: radioHeading,
  tv: tvHeading,
};

const BulletinHeading = styled.h3`
  ${headingStyles}
  ${({ bulletinType }) => bulletinHeadinStyles[bulletinType]}
`;

const radioSummary = css`
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_3_SCREEN_WIDTH_MAX}) {
    ${({ dir }) => (dir === 'ltr' ? 'padding-left: 0;' : 'padding-right: 0;')}
  }
`;

const tvSummary = css`
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    ${({ dir, bulletinType }) =>
      dir === 'ltr'
        ? css`
            padding-left: 0;
            ${bulletinType === 'tv' && 'padding-right: 0;'}
          `
        : css`
            padding-right: 0;
            ${bulletinType === 'tv' && 'padding-left: 0;'}
          `}
  }
`;

const bulletinSummaryStyles = {
  radio: radioSummary,
  tv: tvSummary,
};

const BulletinSummary = styled.p`
  color: ${C_SHADOW};
  margin: 0; /* Reset */
  padding: 0 ${GEL_SPACING} ${GEL_SPACING_DBL};
  ${({ script }) => script && getLongPrimer(script)}
  ${({ service }) => service && getSansRegular(service)} 
  ${({ bulletinType }) => bulletinSummaryStyles[bulletinType]}
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  > svg {
    color: ${C_WHITE};
    fill: currentColor;
    width: 1.0625rem;
    height: ${GEL_SPACING_DBL};
    margin: 0;
  }
  ${({ dir }) =>
    dir === 'ltr'
      ? `padding-right: ${GEL_SPACING};`
      : `padding-left: ${GEL_SPACING};`}
`;

const radioPlayCta = css`
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_3_SCREEN_WIDTH_MAX}) {
    display: inline-flex;
    padding: ${GEL_SPACING} ${GEL_SPACING_DBL};
    margin-bottom: ${GEL_SPACING_DBL};
  }
`;

const tvPlayCta = css`
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    display: inline-flex;
    padding: ${GEL_SPACING} ${GEL_SPACING_DBL};
  }
`;

const playCtaStyles = {
  radio: radioPlayCta,
  tv: tvPlayCta,
};

const PlayCTA = styled.div.attrs({ 'aria-hidden': true })`
  background-color: ${({ isLive }) => (isLive ? C_POSTBOX : C_EBON)};
  border: 0.0625rem solid transparent;
  color: ${C_WHITE};
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ script }) => script && getPica(script)};
  ${({ service }) => service && getSansRegular(service)};
  ${({ bulletinType }) => playCtaStyles[bulletinType]}
`;

const Bulletin = ({
  script,
  service,
  isLive,
  headlineText,
  summaryText,
  image,
  mediaType,
  ctaText,
  ctaLink,
  liveText,
  dir,
  lang,
  offScreenText,
}) => {
  const isAudio = mediaType === 'audio';
  const bulletinType = isAudio ? 'radio' : 'tv';
  const BulletinWrapper = isAudio ? RadioBulletinWrapper : TVBulletinWrapper;

  return (
    <BulletinWrapper>
      {image && (
        <ImageGridItem bulletinType={bulletinType}>{image}</ImageGridItem>
      )}
      <TextGridItem bulletinType={bulletinType} fullWidth={!image} dir={dir}>
        <BulletinHeading
          script={script}
          service={service}
          bulletinType={bulletinType}
          dir={dir}
        >
          <Link href={ctaLink}>
            {/* eslint-disable jsx-a11y/aria-role */}
            <span role="text">
              {offScreenText && (
                <VisuallyHiddenText lang={lang}>
                  {`${offScreenText}, `}
                </VisuallyHiddenText>
              )}
              {isLive && (
                <LiveLabel service={service} dir={dir} ariaHidden>
                  {`${liveText} `}
                </LiveLabel>
              )}
              <span>{headlineText}</span>
            </span>
          </Link>
        </BulletinHeading>
        <BulletinSummary
          script={script}
          service={service}
          bulletinType={bulletinType}
          dir={dir}
        >
          {summaryText}
        </BulletinSummary>
        <PlayCTA
          isLive={isLive}
          service={service}
          script={script}
          bulletinType={bulletinType}
          dir={dir}
        >
          <IconWrapper dir={dir}>{mediaIcons[mediaType]}</IconWrapper>
          {ctaText}
        </PlayCTA>
      </TextGridItem>
    </BulletinWrapper>
  );
};

Bulletin.propTypes = {
  mediaType: oneOf(['video', 'audio']).isRequired,
  isLive: bool,
  service: string.isRequired,
  script: shape(scriptPropType).isRequired,
  ctaText: string.isRequired,
  ctaLink: string.isRequired,
  image: node,
  summaryText: string.isRequired,
  headlineText: string.isRequired,
  liveText: string,
  dir: oneOf(['ltr', 'rtl']),
  lang: string,
  offScreenText: string.isRequired,
};

Bulletin.defaultProps = {
  isLive: false,
  image: null,
  liveText: 'LIVE',
  dir: 'ltr',
  lang: 'en-GB',
};

export default Bulletin;
