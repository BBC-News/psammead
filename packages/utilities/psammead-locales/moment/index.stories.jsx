import React, { Fragment } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { storiesOf } from '@storybook/react';
import { C_PEBBLE } from '@bbc/psammead-styles/colours';
import {
  GEL_SPACING_HLF,
  GEL_SPACING,
  GEL_SPACING_DBL,
} from '@bbc/gel-foundations/spacings';
import { GEL_FF_REITH_SANS } from '@bbc/gel-foundations/typography';
import notes from '../README.md';
import './ig';
import './pcm';
import './yo';

const stories = storiesOf('Utilities|Psammead Locales', module);

const locales = [
  { name: 'Igbo', locale: 'ig' },
  { name: 'Pidgin', locale: 'pcm' },
  { name: 'Yoruba', locale: 'yo' },
];

/* eslint-disable prettier/prettier */
const funcs = [
  locale => moment().locale(locale).format('MMMM Do YYYY, h:mm:ss a'),
  locale => moment().locale(locale).format('dddd'),
  locale => moment().locale(locale).format("MMM Do YY"),
  locale => moment().locale(locale).format('YYYY [escaped text] YYYY'),
  locale => moment().locale(locale).format(),
  locale => moment("20111031", "YYYYMMDD").locale(locale).fromNow(),
  locale => moment("20120620", "YYYYMMDD").locale(locale).fromNow(),
  locale => moment().locale(locale).startOf('day').fromNow(),
  locale => moment().locale(locale).endOf('day').fromNow(),
  locale => moment().locale(locale).startOf('hour').fromNow(),
  locale => moment().locale(locale).subtract(10, 'days').calendar(),
  locale => moment().locale(locale).subtract(6, 'days').calendar(),
  locale => moment().locale(locale).subtract(3, 'days').calendar(),
  locale => moment().locale(locale).subtract(1, 'days').calendar(),
  locale => moment().locale(locale).calendar(),
  locale => moment().locale(locale).add(1, 'days').calendar(),
  locale => moment().locale(locale).add(3, 'days').calendar(),
  locale => moment().locale(locale).add(10, 'days').calendar(),
  locale => moment().locale(locale).format('LT'),
  locale => moment().locale(locale).format('LTS'),
  locale => moment().locale(locale).format('L'),
  locale => moment().locale(locale).format('l'),
  locale => moment().locale(locale).format('LL'),
  locale => moment().locale(locale).format('ll'),
  locale => moment().locale(locale).format('LLL'),
  locale => moment().locale(locale).format('lll'),
  locale => moment().locale(locale).format('LLLL'),
  locale => moment().locale(locale).format('llll'),
];
/* eslint-enable prettier/prettier */

const Table = styled.table`
  margin: ${GEL_SPACING_DBL};
  border: 1px solid ${C_PEBBLE};
  font-family: ${GEL_FF_REITH_SANS};

  & td,
  th {
    padding: ${GEL_SPACING_HLF} ${GEL_SPACING};
    border: 1px solid ${C_PEBBLE};
  }
`;

const Paragraph = styled.p`
  font-family: ${GEL_FF_REITH_SANS};
  margin: ${GEL_SPACING_DBL};
`;

const issueHref = localeName =>
  `https://github.com/bbc/psammead/issues/new?labels=bug&title=Moment+translation+correction+for+${localeName}&projects=bbc/20`;

locales.forEach(({ name, locale }) => {
  stories.add(
    `Moment - ${name}(${locale})`,
    () => (
      <Fragment>
        <Table>
          <tbody>
            <tr>
              <th>British English</th>
              <th>{name}</th>
            </tr>
            {funcs.map((func, index) => (
              /* eslint-disable react/no-array-index-key */
              <tr key={index}>
                <td>{func('en-gb')}</td>
                <td>{func(locale)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Paragraph>
          Spot an incorrect translation? Please write us a github issue{' '}
          <a href={issueHref(name)}>here</a> so we can fix it!
        </Paragraph>
      </Fragment>
    ),
    {
      notes,
    },
  );
});
