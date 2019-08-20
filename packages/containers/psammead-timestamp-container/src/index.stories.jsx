import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import {
  boolean,
  button,
  number,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import moment from 'moment-timezone';
import Timestamp from '.';

import '@bbc/psammead-locales/moment/ig';
import '@bbc/psammead-locales/moment/pcm';
import '@bbc/psammead-locales/moment/yo';

let timestamp = moment();

const date = name => {
  button('now', () => {
    timestamp = moment();
  });
  button('5 seconds ago', () => {
    timestamp = moment().subtract(5, 'seconds');
  });
  button('30 seconds ago', () => {
    timestamp = moment().subtract(30, 'seconds');
  });
  button('59 seconds ago', () => {
    timestamp = moment().subtract(59, 'seconds');
  });
  button('1 minute ago', () => {
    timestamp = moment().subtract(1, 'minute');
  });
  button('24 minutes ago', () => {
    timestamp = moment().subtract(24, 'minutes');
  });
  button('59 minutes ago', () => {
    timestamp = moment().subtract(59, 'minutes');
  });
  button('63 minutes ago', () => {
    timestamp = moment().subtract(63, 'minutes');
  });
  button('95 minutes ago', () => {
    timestamp = moment().subtract(95, 'minutes');
  });
  button('2 hours ago', () => {
    timestamp = moment().subtract(2, 'hours');
  });
  button('23 hours ago', () => {
    timestamp = moment().subtract(23, 'hours');
  });
  button('1 day ago', () => {
    timestamp = moment().subtract(1, 'day');
  });
  button('30 hours ago', () => {
    timestamp = moment().subtract(30, 'hours');
  });
  button('20 days ago', () => {
    timestamp = moment().subtract(20, 'days');
  });
  button('21 days ago', () => {
    timestamp = moment().subtract(21, 'days');
  });
  button('8.9999... months ago', () => {
    timestamp = moment()
      .subtract(9, 'months')
      .add(2, 'second');
  });
  button('9 months ago', () => {
    timestamp = moment().subtract(9, 'months');
  });

  return number(name, timestamp.valueOf());
};

storiesOf('Containers|TimestampContainer', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    inputProvider([], object => {
      const { locale, script, service /* localeData, timezoneData */ } = object;
      return (
        <Timestamp
          timestamp={date('timestamp')}
          dateTimeFormat="YYYY-MM-DD"
          format="D MMMM YYYY"
          isRelative={boolean('isRelative', false)}
          script={script}
          locale={locale}
          service={service}
          // localeData={localeData}
          // timezoneData={timezoneData}
        />
      );
    }),
  )
  .add(
    'with prefix',
    inputProvider(
      [],
      ({ locale, script, service /* localeData, timezoneData */ }) => {
        return (
          <Timestamp
            timestamp={date('timestamp')}
            dateTimeFormat="YYYY-MM-DD"
            format="D MMMM YYYY, HH:mm z"
            isRelative={boolean('isRelative', true)}
            prefix={text('Prefix text', 'Updated')}
            script={script}
            locale={locale}
            service={service}
            // localeData={localeData}
            // timezoneData={timezoneData}
          />
        );
      },
    ),
  )
  .add(
    'with prefix and suffix',
    inputProvider(
      [],
      ({ locale, script, service /* localeData, timezoneData */ }) => (
        <Timestamp
          timestamp={date('timestamp')}
          dateTimeFormat="YYYY-MM-DD"
          format="D MMMM YYYY, HH:mm z"
          isRelative={boolean('isRelative', false)}
          prefix={text('Prefix text', 'This')}
          suffix={text('Suffix text', 'is date of last update')}
          script={script}
          locale={locale}
          service={service}
          // localeData={localeData}
          // timezoneData={timezoneData}
        />
      ),
    ),
  );
