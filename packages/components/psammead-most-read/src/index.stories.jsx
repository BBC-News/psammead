/* eslint-disable react/prop-types */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, boolean, text, withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import { getItem, getItemWrapperArray, getServiceVariant } from './utilities';
import { MostReadRank, MostReadLink, MostReadList } from './index';
import notes from '../README.md';

const newsServiceDecorator = withServicesKnob({
  defaultService: 'news',
});

const pageTypes = ['oneColumn', 'twoColumn', 'multiColumn'];

const renderList = ({
  numberOfItems,
  dir,
  service,
  script,
  withTimestamp,
  columnLayout,
  small,
}) => (
  <MostReadList
    numberOfItems={numberOfItems}
    dir={dir}
    columnLayout={columnLayout}
  >
    {getItemWrapperArray({
      numberOfItems,
      service,
      script,
      dir,
      withTimestamp,
      columnLayout,
      small,
    }).map(item => item)}
  </MostReadList>
);

const renderLink = ({ dir, service, script, withTimestamp, small }) => {
  const item = getItem({ service, withTimestamp });
  return (
    <MostReadLink
      dir={dir}
      href={item.href}
      service={service}
      script={script}
      title={item.title}
      small={small}
    >
      {item.timestamp}
    </MostReadLink>
  );
};

const renderRank = ({
  dir,
  service,
  script,
  listIndex,
  numberOfItems,
  columnLayout,
}) => (
  <MostReadRank
    service={service}
    script={script}
    listIndex={listIndex}
    numberOfItems={numberOfItems}
    dir={dir}
    columnlayout={columnLayout}
  />
);

storiesOf('Components|MostRead/Rank', module)
  .addDecorator(withKnobs)
  .add(`default`, () =>
    newsServiceDecorator(
      ({ dir, script, service }) =>
        renderRank({
          dir,
          service,
          script,
          listIndex: text('Number (1 - 10)', '5'),
          numberOfItems: 10,
        }),
      {
        notes,
      },
    ),
  );

storiesOf('Components|MostRead/Item', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    `default`,
    ({ dir, script, service, variant }) =>
      renderLink({
        dir,
        script,
        service: getServiceVariant({ service, variant }),
        withTimestamp: boolean('Timestamp', false),
        small: boolean('Small Text', false),
      }),
    {
      notes,
    },
  );

storiesOf('Components|MostRead/List', module)
  .addDecorator(withKnobs)
  .add(
    `default`,
    () =>
      newsServiceDecorator(({ dir, script, service, variant }) =>
        renderList({
          numberOfItems: 10,
          columnLayout: select('Page Type (columns)', pageTypes, 'multiColumn'),
          withTimestamp: boolean('Timestamp', false),
          service: getServiceVariant({ service, variant }),
          small: boolean('Small Text', false),
          dir,
          script,
        }),
      ),
    {
      notes,
    },
  );
