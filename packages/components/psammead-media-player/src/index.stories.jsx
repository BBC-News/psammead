import React from 'react';
import { storiesOf } from '@storybook/react';
import { CanonicalMediaPlayer, AmpMediaPlayer } from '.';
import { ampDecorator } from '../../../../.storybook/config';
import notes from '../README.md';

const withDuration = {
  duration: '2:30',
  durationSpoken: '2 minutes 30 seconds',
  datetime: 'PT2M30S',
};

storiesOf('Components|Media Player', module)
  .add(
    'Default',
    () => (
      <CanonicalMediaPlayer
        src="https://www.test.bbc.co.uk/ws/av-embeds/articles/c3wmq4d1y3wo/p01k6msp/en"
        placeholderSrc="https://ichef.bbci.co.uk/news/640/cpsdevpb/4eb7/test/ba7482d0-cca8-11e8-b0bf-f33155223fc4.jpg"
        service="news"
        mediaInfo={{ title: 'Dog chases cat.', ...withDuration }}
        title="Default Video player"
      />
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'Guidance',
    () => (
      <CanonicalMediaPlayer
        src="https://www.test.bbc.co.uk/ws/av-embeds/articles/c3wmq4d1y3wo/p01k6msp/en"
        placeholderSrc="https://ichef.bbci.co.uk/news/640/cpsdevpb/4eb7/test/ba7482d0-cca8-11e8-b0bf-f33155223fc4.jpg"
        service="news"
        title="Video player"
        mediaInfo={{
          title: 'Dog chases cat.',
          guidanceMessage:
            'Guidance: May contain strong language that may offend',
          ...withDuration,
        }}
      />
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'Audio',
    () => (
      <CanonicalMediaPlayer
        src="https://www.test.bbc.co.uk/ws/av-embeds/articles/c3wmq4d1y3wo/p01k6msp/en"
        placeholderSrc="https://ichef.bbci.co.uk/news/640/cpsdevpb/4eb7/test/ba7482d0-cca8-11e8-b0bf-f33155223fc4.jpg"
        service="news"
        mediaInfo={{
          type: 'audio',
          title: 'Dog barks at cat.',
          ...withDuration,
        }}
        title="Video player"
      />
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'Audio Skin',
    () => (
      <CanonicalMediaPlayer
        src="https://www.test.bbc.com/ws/av-embeds/media/bbc_korean_radio/liveradio/ko"
        showPlaceholder={false}
        placeholderSrc="https://news.files.bbci.co.uk/include/articles/public/images/amp_audio_placeholder.png"
        skin="audio"
        service="news"
        mediaInfo={{ type: 'audio', title: 'Live show intro.' }}
        title="Audio player"
      />
    ),
    { notes, knobs: { escapeHTML: false } },
  );

storiesOf('Components|Media Player', module)
  .addDecorator(ampDecorator)
  .add(
    'AMP',
    () => (
      <AmpMediaPlayer
        isAmp
        src="https://www.test.bbc.co.uk/ws/av-embeds/articles/c3wmq4d1y3wo/p01k6msp/en/amp"
        placeholderSrc="https://ichef.bbci.co.uk/news/640/cpsdevpb/4eb7/test/ba7482d0-cca8-11e8-b0bf-f33155223fc4.jpg"
        service="news"
        mediaInfo={{
          type: 'audio',
          title: 'Dog barks at cat.',
          ...withDuration,
        }}
        title="Video player"
      />
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'Audio Skin AMP',
    () => (
      <AmpMediaPlayer
        isAmp
        src="https://www.bbc.com/ws/av-embeds/media/bbc_korean_radio/liveradio/ko/amp"
        placeholderSrc="https://news.files.bbci.co.uk/include/articles/public/images/amp_audio_placeholder.png"
        skin="audio"
        title="Audio player"
      />
    ),
    { notes, knobs: { escapeHTML: false } },
  );
