# ⛔️ This is an alpha component ⛔️

This component is currently tagged as alpha and is not suitable for production use. Following the passing of an accessibility review this component will be marked as ready for production and the alpha tag removed.

# psammead-radio-schedule - [![Known Vulnerabilities](https://snyk.io/test/github/bbc/psammead/badge.svg?targetFile=packages%2Fcomponents%2Fpsammead-radio-schedule%2Fpackage.json)](https://snyk.io/test/github/bbc/psammead?targetFile=packages%2Fcomponents%2Fpsammead-radio-schedule%2Fpackage.json) [![Dependency Status](https://david-dm.org/bbc/psammead.svg?path=packages/components/psammead-radio-schedule)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-radio-schedule) [![peerDependencies Status](https://david-dm.org/bbc/psammead/peer-status.svg?path=packages/components/psammead-radio-schedule)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-radio-schedule&type=peer) [![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg?sanitize=true)](https://bbc.github.io/psammead/?path=/story/radio-schedule--containing-image) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-radio-schedule.svg)](https://www.npmjs.com/package/@bbc/psammead-radio-schedule) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)

## Description

The `RadioSchedule` component is designed to display radio schedule programs in their different states. Currently, the component comprises of a `ProgramCard` which is comprised of a link to the radio-schedule, a state label, brand and episode titles, a summary, and a duration.

## Exports

`/startTime` - Adds a starting time of the program with a clock icon, timestamp and horizontal line.

## Installation

```jsx
npm install @bbc/psammead-radio-schedule --save
```

## Components (WIP)

## ProgramCard

### Props

<!-- prettier-ignore -->
| Argument | Type | Required | Default | Example |
| -------- | ---- | -------- | ------- | ------- |
| brandTitle | string | yes | N/A | `'This is a brand title'` |
| summary | string | yes | N/A | `'This is a summary'` |
| episodeTitle | string | yes | N/A | `'29/01/1990'` |
| duration | string | yes | N/A | `'30:00'` |
| durationLabel | string | yes | N/A | `'duration'` |
| state | string | yes | N/A | `'live'` |
| stateLabel | string | yes | N/A | `'مباشر'` |
| link | string | yes | N/A | `'https://bbc.com/arabic/articles/c1er5mjnznzo'` |
| startTime | string | yes | N/A | `13:00` |
| service | string | yes | N/A | `'news'` |
| script | object | yes | N/A | `{ canon: { groupA: { fontSize: '28', lineHeight: '32',}, groupB: { fontSize: '32', lineHeight: '36', }, groupD: { fontSize: '44', lineHeight: '48', }, }, trafalgar: { groupA: { fontSize: '20', lineHeight: '24', }, groupB: { fontSize: '24', lineHeight: '28', }, groupD: { fontSize: '32', lineHeight: '36', }, }, }` |
| dir | string | no | `"ltr"` | `"rtl"` |

### Usage

This component displays a single link as program card with a brand title, an episode title, a summary and a duration.

```jsx
import React from 'react';
import { latin } from '@bbc/gel-foundations/scripts';
import ProgramCard from '@bbc/psammead-radio-schedule/ProgramCard';

<ProgramCard
  service="news"
  script={latin}
  dir="ltr"
  startTime="13:00"
  brandTitle="This is a brand title"
  summary="Could a computer ever create better art than a human?"
  episodeTitle="29/01/1990"
  duration="30:00"
  durationLabel="duration"
  state="live"
  stateLabel="Live"
  link="https://bbc.com/arabic/articles/c1er5mjnznzo"
/>;
```

## StartTime

### Props

<!-- prettier-ignore -->
| Argument  | Type | Required | Default | Example |
| --------- | ---- | -------- | ------- | ------- |
| timestamp | number | yes   | N/A | `1530947227000` |
| timezone | string | no | `'Europe/London'` | `'Europe/Vienna'` |
| locale | string | no | `'en-gb'` | `'fa'` |
| script | object | yes | N/A | `{ canon: { groupA: { fontSize: '28', lineHeight: '32',}, groupB: { fontSize: '32', lineHeight: '36', }, groupD: { fontSize: '44', lineHeight: '48', }, }, trafalgar: { groupA: { fontSize: '20', lineHeight: '24', }, groupB: { fontSize: '24', lineHeight: '28', }, groupD: { fontSize: '32', lineHeight: '36', }, }, }` |
| service | string | yes | N/A | `news` |
| dir | string | no | `'ltr'` | `'rtl'` |

### Usage

```jsx
import React from 'react';
import StartTime from '@bbc/psammead-radio-schedule/startTime';
import { latin } from '@bbc/gel-foundations/scripts';

<StartTime
      script={latin}
      service="news"
      timestamp={1566914061212}
      timezone="Europe/London"
      locale="en-gb"
      dir="ltr"
    />
```

### When to use this component

This component is to be used initially on the `front pages`, and media pages.

### When not to use this component

<!-- Description of the where the component shouldn't can be used -->

### Accessibility notes

Currently this component is in alpha. This is because it has not yet been tested with various assistive technologies. After it has had an accessibility swarm, this will be published under a standard version.

### Roadmap

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead repository](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/bbc/psammead/blob/latest/LICENSE).
