import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import EmbedError from './index';

describe('EmbedError', () => {
  shouldMatchSnapshot(
    'renders a default embed error',
    <EmbedError message="Sorry, we're unable to bring you this media right now." />,
  );

  shouldMatchSnapshot(
    'renders an embed error that fills the viewport',
    <EmbedError
      message="Sorry, we're unable to bring you this media right now."
      fillViewport
    />,
  );
});
