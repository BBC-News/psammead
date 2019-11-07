import React from 'react';
import { string, number } from 'prop-types';
import Helmet from 'react-helmet';
import { AmpImg } from '@bbc/psammead-image';

const AmpHead = () => (
  <Helmet>
    <script
      async
      custom-element="amp-iframe"
      src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"
    />
  </Helmet>
);

const AmpMediaPlayer = ({
  src,
  placeholderSrc,
  placeholderSrcset,
  title,
  height,
  width,
}) => {
  return (
    <>
      <AmpHead />
      <amp-iframe
        sandbox="allow-scripts allow-same-origin"
        layout="fill"
        frameborder="0"
        src={src}
        title={title}
        allowfullscreen="allowfullscreen"
      >
        <AmpImg
          layout="fill"
          src={placeholderSrc}
          srcset={placeholderSrcset}
          placeholder
          alt=""
          height={height}
          width={width}
        />
      </amp-iframe>
    </>
  );
};

AmpMediaPlayer.propTypes = {
  src: string.isRequired,
  placeholderSrc: string.isRequired,
  placeholderSrcset: string,
  title: string.isRequired,
  height: number.isRequired,
  width: number.isRequired,
};
AmpMediaPlayer.defaultProps = {
  placeholderSrcset: null,
};

export default AmpMediaPlayer;
