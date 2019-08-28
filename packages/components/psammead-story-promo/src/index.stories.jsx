import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import Image from '@bbc/psammead-image';
import Timestamp from '@bbc/psammead-timestamp';
import MediaIndicator from '@bbc/psammead-media-indicator';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import StoryPromo, { Headline, Summary, Link, LiveLabel } from './index';
import relatedItems from '../testHelpers/relatedItems';
import IndexAlsosContainer from '../testHelpers/IndexAlsosContainer';
import notes from '../README.md';

const buildImg = () => (
  <Image
    alt={text('Image alt text', 'Robert Downey Junior in Iron Man')}
    src={text(
      'Image src',
      'https://ichef.bbci.co.uk/news/660/cpsprodpb/11897/production/_106613817_999_al_.jpg',
    )}
    width="640"
  />
);

const MediaIndicatorComponent = (type, service) => {
  return (
    <MediaIndicator
      duration={type !== 'photogallery' && '2:15'}
      datetime="PT2M15S"
      service={service}
      type={type}
    />
  );
};

/* eslint-disable-next-line react/prop-types */
const LiveComponent = ({ headline, service, dir }) => (
  /* eslint-disable-next-line jsx-a11y/aria-role */
  <span role="text">
    <LiveLabel service={service} dir={dir}>
      LIVE
    </LiveLabel>
    <VisuallyHiddenText lang="en-GB">Live, </VisuallyHiddenText>
    {headline}
  </span>
);

/* eslint-disable react/prop-types */
const InfoComponent = ({
  headlineText,
  summaryText,
  script,
  topStory,
  service,
  isLive,
  dir,
  alsoItems,
}) => (
  <Fragment>
    <Headline script={script} topStory={topStory} service={service}>
      <Link href="https://www.bbc.co.uk/news">
        {isLive ? (
          <LiveComponent service={service} dir={dir} headline={headlineText} />
        ) : (
          headlineText
        )}
      </Link>
    </Headline>
    <Summary script={script} topStory={topStory} service={service}>
      {summaryText}
    </Summary>
    <Timestamp
      datetime={text('Timestamp datetime', '2019-03-01T14:00+00:00')}
      script={script}
      padding={false}
      service={service}
    >
      {text('Timestamp', '12 March 2019')}
    </Timestamp>
    {topStory && alsoItems && (
      <IndexAlsosContainer
        alsoItems={alsoItems}
        script={script}
        service={service}
        dir={dir}
      />
    )}
  </Fragment>
);

const generateStory = ({ topStory, alsoItems = null }) =>
  inputProvider(
    [{ name: 'Headline' }, { name: 'Summary' }],
    ({ slotTexts: [headlineText, summaryText], script, service, dir }) => {
      const Info = (
        <InfoComponent
          headlineText={headlineText}
          summaryText={summaryText}
          script={script}
          topStory={topStory}
          service={service}
          isLive={boolean('isLive', false)}
          dir={dir}
          alsoItems={alsoItems}
        />
      );

      const mediaType = select(
        'Media Type',
        ['No media', 'video', 'audio', 'photogallery'],
        'No media',
      );

      const Img = buildImg();

      return (
        <StoryPromo
          image={Img}
          info={Info}
          mediaIndicator={
            mediaType !== 'No media' &&
            MediaIndicatorComponent(mediaType, service)
          }
          topStory={topStory}
        />
      );
    },
  );

storiesOf('Components|StoryPromo/StoryPromo', module)
  .addDecorator(withKnobs)
  .add('default', generateStory({ topStory: false }), {
    notes,
    knobs: { escapeHTML: false },
  })
  .add('Top story', generateStory({ topStory: true }), {
    notes,
    knobs: { escapeHTML: false },
  })
  .add(
    'Index Alsos - multiple',
    generateStory({ topStory: true, alsoItems: relatedItems }),
    {
      notes,
      knobs: { escapeHTML: false },
    },
  )
  .add(
    'Index Alsos - one',
    generateStory({ topStory: true, alsoItems: [relatedItems[0]] }),
    {
      notes,
      knobs: { escapeHTML: false },
    },
  );
