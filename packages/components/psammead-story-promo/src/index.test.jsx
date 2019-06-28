import React, { Fragment } from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { latin } from '@bbc/gel-foundations/scripts';
import MediaIndicator from '@bbc/psammead-media-indicator';
import { render } from '@testing-library/react';
import StoryPromo, { Headline, Summary, Link } from './index';

const Image = <img src="https://foobar.com/image.png" alt="Alt text" />;

// eslint-disable-next-line react/prop-types
const Info = ({ topStory }) => (
  <Fragment>
    <Headline script={latin} topStory={topStory}>
      <Link href="https://www.bbc.co.uk/news">The headline of the promo</Link>
    </Headline>
    <Summary script={latin} topStory={topStory}>
      The summary of the promo
    </Summary>
    <time>12 March 2019</time>
  </Fragment>
);

const mediaInfo = (
  <MediaIndicator
    duration="2:15"
    datetime="PT2M15S"
    offscreenText="Video 2 minutes 15 seconds"
  />
);

describe('StoryPromo', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <StoryPromo image={Image} info={Info({ topStory: false })} />,
  );
});

describe('StoryPromo with Media Indicator', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <StoryPromo
      image={Image}
      info={Info({ topStory: false })}
      mediaIndicator={mediaInfo}
    />,
  );
});

describe('StoryPromo - Top Story', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <StoryPromo image={Image} info={Info({ topStory: true })} topStory />,
  );
});

describe('StoryPromo - Top Story with Media Indicator', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <StoryPromo
      image={Image}
      info={Info({ topStory: true })}
      mediaIndicator={mediaInfo}
      topStory
    />,
  );
});

describe('assertions', () => {
  it('should render h3, a, p, time', () => {
    const { container, getAllByText } = render(
      <StoryPromo
        image={Image}
        info={Info({ topStory: true })}
        mediaIndicator={mediaInfo}
      />,
    );

    expect(container.querySelector('h3 a').textContent).toEqual(
      'The headline of the promo',
    );
    expect(container.querySelector('p').textContent).toEqual(
      'The summary of the promo',
    );

    expect(getAllByText('Video 2 minutes 15 seconds')[0]).toBeTruthy();
    expect(getAllByText('2:15')[0]).toBeTruthy();

    const image = container.querySelector('img');

    expect(image.getAttribute('src')).toEqual('https://foobar.com/image.png');
    expect(image.getAttribute('alt')).toEqual('Alt text');
  });
});
