import React from 'react';
import styled from 'styled-components';
import { string, func, shape, oneOf } from 'prop-types';
import Image from '@bbc/psammead-image';
import PlayButton from '@bbc/psammead-play-button';
import { C_POSTBOX } from '@bbc/psammead-styles/colours';
import Guidance from '../Guidance';

const StyledPlaceholder = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const StyledPlayButton = styled(PlayButton)`
  position: absolute;
  bottom: 0;

  /* stylelint-disable */
  /* https://www.styled-components.com/docs/advanced#referring-to-other-components */
  ${StyledPlaceholder}:hover &,
  ${StyledPlaceholder}:focus & {
    background-color: ${C_POSTBOX};
  }
  /* stylelint-enable */
`;

const Placeholder = ({ onClick, service, src, srcset, mediaInfo }) => {
  const {
    title,
    datetime,
    duration,
    durationSpoken,
    type,
    guidanceMessage,
  } = mediaInfo;

  return (
    <StyledPlaceholder onClick={onClick}>
      {guidanceMessage && (
        <Guidance service={service} guidanceMessage={guidanceMessage} />
      )}
      <StyledPlayButton
        title={title}
        service={service}
        onClick={() => {}}
        datetime={datetime}
        duration={duration}
        durationSpoken={durationSpoken}
        type={type}
        guidanceMessage={guidanceMessage}
      />
      <Image alt="" src={src} srcset={srcset} />
    </StyledPlaceholder>
  );
};

Placeholder.propTypes = {
  onClick: func.isRequired,
  service: string.isRequired,
  src: string.isRequired,
  srcset: string,
  mediaInfo: shape({
    title: string.isRequired,
    datetime: string,
    duration: string,
    durationSpoken: string,
    type: oneOf(['audio', 'video']),
    guidanceMessage: string,
  }),
};
Placeholder.defaultProps = {
  srcset: null,
  mediaInfo: shape({
    datetime: null,
    duration: null,
    durationSpoken: null,
    type: 'video',
    guidanceMessage: null,
  }),
};

export default Placeholder;
