import React from 'react';
import { string } from 'prop-types';

const Podcast = ({ className }) => (
  <svg
    className={className}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
  >
    <g>
      <path
        d="M18.7,31h-5.3l-2.3-10.4C12.3,19.5,14,19,16,19s3.7,0.5,4.9,1.7L18.7,31z M22,8.2c-1.7-1.7-3.9-2.5-6.1-2.5s-4.4,0.9-6,2.5
		l1.7,1.7c1.2-1.2,2.7-1.8,4.3-1.8s3.1,0.6,4.3,1.8L22,8.2z M25.5,4.9c-2.6-2.7-6.1-4-9.5-4S9.1,2.3,6.5,4.9l1.7,1.7
		c2.1-2.1,4.9-3.2,7.7-3.2c2.8,0,5.6,1.1,7.8,3.2L25.5,4.9z M12.4,14c0,2,1.5,3.6,3.6,3.6c2,0,3.6-1.5,3.6-3.6
		c0-2.1-1.5-3.6-3.6-3.6C13.9,10.4,12.4,11.9,12.4,14z"
      />
    </g>
  </svg>
);

Podcast.propTypes = {
  className: string,
};

Podcast.defaultProps = {
  className: '',
};

export default Podcast;
