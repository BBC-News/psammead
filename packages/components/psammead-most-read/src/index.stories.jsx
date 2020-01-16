/* eslint-disable react/prop-types */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import {
  getItem,
  getItemWrapperArray,
  getItems,
  getServiceVariant,
} from './testHelpers';
import {
  MostReadRank,
  MostReadLink,
  MostReadTitle,
  MostReadList,
  MostRead,
} from './index';
import notes from '../README.md';

const arabicServiceDecorator = withServicesKnob({
  defaultService: 'arabic',
  services: ['arabic', 'pashto', 'persian', 'urdu'],
});

const bengaliServiceDecorator = withServicesKnob({
  defaultService: 'bengali',
  services: ['bengali'],
});

const burmeseServiceDecorator = withServicesKnob({
  defaultService: 'burmese',
  services: ['burmese'],
});

const newsServiceDecorator = withServicesKnob({
  defaultService: 'news',
});

const renderMostReadTitle = ({ header, service, script, dir }) => (
  <MostReadTitle
    header={header}
    script={script}
    service={service}
    dir={{ dir }}
  />
);

const renderList = ({ numberOfItems, dir, service, script }) => (
  <MostReadList numberOfItems={numberOfItems} dir={dir}>
    {getItemWrapperArray({
      numberOfItems,
      service,
      script,
      dir,
    }).map(item => item)}
  </MostReadList>
);

const renderLink = ({ dir, service, script, withTimestamp }) => {
  const item = getItem({ service, withTimestamp });
  return (
    <MostReadLink
      dir={dir}
      href={item.href}
      service={service}
      script={script}
      title={item.title}
    >
      {item.timestamp}
    </MostReadLink>
  );
};

const renderRank = ({ dir, service, script, listIndex, numberOfItems }) => (
  <MostReadRank
    service={service}
    script={script}
    listIndex={listIndex}
    numberOfItems={numberOfItems}
    dir={dir}
  />
);

storiesOf('Components|MostRead/Rank', module)
  .addDecorator(withKnobs)
  .add(`MostReadRank LTR`, () =>
    newsServiceDecorator(
      ({ dir, script, service }) =>
        renderRank({ dir, service, script, listIndex: 5, numberOfItems: 5 }),
      {
        notes,
      },
    ),
  )
  .add(`MostReadRank LTR double digits`, () =>
    newsServiceDecorator(
      ({ script, service, dir }) =>
        renderRank({ dir, service, script, listIndex: 10, numberOfItems: 10 }),
      {
        notes,
      },
    ),
  )
  .add(`MostReadRank RTL`, () =>
    arabicServiceDecorator(
      ({ dir, script, service }) =>
        renderRank({ dir, service, script, listIndex: 5, numberOfItems: 5 }),
      {
        notes,
      },
    ),
  )
  .add(`MostReadRank RTL double digits`, () =>
    arabicServiceDecorator(
      ({ dir, script, service }) =>
        renderRank({ dir, service, script, listIndex: 10, numberOfItems: 10 }),
      {
        notes,
      },
    ),
  );

storiesOf('Components|MostRead/Item', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    `MostReadLink`,
    ({ dir, script, service, variant }) =>
      renderLink({
        dir,
        script,
        service: getServiceVariant({ service, variant }),
        withTimestamp: false,
      }),
    {
      notes,
    },
  )
  .add(
    `MostReadLink with last updated date`,
    ({ dir, script, service, variant }) =>
      renderLink({
        dir,
        script,
        service: getServiceVariant({ service, variant }),
        withTimestamp: true,
      }),
    {
      notes,
    },
  );

storiesOf('Components|MostRead/List', module)
  .addDecorator(withKnobs)
  .add(
    `News LTR`,
    () =>
      newsServiceDecorator(({ dir, script, service, variant }) =>
        renderList({
          numberOfItems: 10,
          dir,
          service: getServiceVariant({ service, variant }),
          script,
        }),
      ),
    {
      notes,
    },
  )
  .add(
    `News LTR 5 items`,
    () =>
      newsServiceDecorator(({ dir, script, service, variant }) =>
        renderList({
          numberOfItems: 5,
          dir,
          service: getServiceVariant({ service, variant }),
          script,
        }),
      ),
    {
      notes,
    },
  )
  .add(
    `Bengali LTR`,
    () =>
      bengaliServiceDecorator(({ dir, script, service, variant }) =>
        renderList({
          numberOfItems: 10,
          dir,
          service: getServiceVariant({ service, variant }),
          script,
        }),
      ),
    {
      notes,
    },
  )
  .add(
    `Bengali LTR 5 items`,
    () =>
      bengaliServiceDecorator(({ dir, script, service, variant }) =>
        renderList({
          numberOfItems: 5,
          dir,
          service: getServiceVariant({ service, variant }),
          script,
        }),
      ),
    {
      notes,
    },
  )
  .add(
    `Burmese LTR`,
    () =>
      burmeseServiceDecorator(({ dir, script, service, variant }) =>
        renderList({
          numberOfItems: 10,
          dir,
          service: getServiceVariant({ service, variant }),
          script,
        }),
      ),
    {
      notes,
    },
  )
  .add(
    `Burmese LTR 5 items`,
    () =>
      burmeseServiceDecorator(({ dir, script, service, variant }) =>
        renderList({
          numberOfItems: 5,
          dir,
          service: getServiceVariant({ service, variant }),
          script,
        }),
      ),
    {
      notes,
    },
  );

storiesOf('Components|MostRead/List/RTL', module)
  .addDecorator(withKnobs)
  .add(
    `Arabic RTL`,
    () =>
      arabicServiceDecorator(({ dir, script, service, variant }) =>
        renderList({
          numberOfItems: 10,
          dir,
          service: getServiceVariant({ service, variant }),
          script,
        }),
      ),
    {
      notes,
    },
  )
  .add(
    `Arabic RTL 5 items`,
    () =>
      arabicServiceDecorator(({ dir, script, service, variant }) =>
        renderList({
          numberOfItems: 5,
          dir,
          service: getServiceVariant({ service, variant }),
          script,
        }),
      ),
    {
      notes,
    },
  );

storiesOf('Components|MostRead/Title', module)
  .addDecorator(withKnobs)
  .add(
    'LTR',
    () =>
      newsServiceDecorator(({ dir, script, service }) =>
        renderMostReadTitle({ header: 'Most Read', dir, service, script }),
      ),
    {
      notes,
    },
  )
  .add(
    'RTL',
    () =>
      arabicServiceDecorator(({ dir, script, service }) =>
        renderMostReadTitle({ header: 'الأكثر قراءة', dir, service, script }),
      ),
    {
      notes,
    },
  );

storiesOf('Components|MostRead', module)
  .addDecorator(withKnobs)
  .add(
    'default LTR',
    () =>
      newsServiceDecorator(({ script, service, dir, variant }) => (
        <MostRead
          items={getItems({
            service: getServiceVariant({ service, variant }),
            arraySize: 10,
          })}
          script={script}
          service={service}
          header="Most Read"
          dir={dir}
        />
      )),
    {
      notes,
    },
  )
  .add(
    'default LTR with timestamp',
    () =>
      newsServiceDecorator(({ script, service, dir, variant }) => (
        <MostRead
          items={getItems({
            service: getServiceVariant({ service, variant }),
            arraySize: 10,
            withTimestamp: true,
          })}
          script={script}
          service={service}
          header="Most Read"
          dir={dir}
        />
      )),
    {
      notes,
    },
  )
  .add(
    'default RTL',
    () =>
      arabicServiceDecorator(({ script, service, dir, variant }) => (
        <MostRead
          items={getItems({
            service: getServiceVariant({ service, variant }),
            arraySize: 10,
          })}
          script={script}
          service={service}
          header="الأكثر قراءة"
          dir={dir}
        />
      )),
    {
      notes,
    },
  );
