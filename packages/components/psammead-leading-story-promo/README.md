# ⛔️ This is an alpha component ⛔️

This component is currently tagged as alpha and is not suitable for production use. Following the passing of an accessibility review this component will be marked as ready for production and the alpha tag removed.

# psammead-leading-story-promo - [![Known Vulnerabilities](https://snyk.io/test/github/bbc/psammead/badge.svg?targetFile=packages%2Fcomponents%2Fpsammead-leading-story-promo%2Fpackage.json)](https://snyk.io/test/github/bbc/psammead?targetFile=packages%2Fcomponents%2Fpsammead-leading-story-promo%2Fpackage.json) [![Dependency Status](https://david-dm.org/bbc/psammead.svg?path=packages/components/psammead-leading-story-promo)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-leading-story-promo) [![peerDependencies Status](https://david-dm.org/bbc/psammead/peer-status.svg?path=packages/components/psammead-leading-story-promo)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-leading-story-promo&type=peer) [![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg?sanitize=true)](https://bbc.github.io/psammead/?path=/story/leading-story-promo--containing-image) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-leading-story-promo.svg)](https://www.npmjs.com/package/@bbc/psammead-leading-story-promo) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)

## Description

The `LeadingStoryPromo` component is designed to be used on 'index' pages, which are pages that contain a list or collection of stories. Examples of index pages include front pages, feature index pages, topic pages. The `LeadingStoryPromo` component displays both an image and info, where `info` can be a collection of any nodes.

## Installation

`npm install @bbc/psammead-leading-story-promo`

## Props

| Argument  | Type | Required | Default | Example |
| --------- | ---- | -------- | ------- | ------- |
| image     | node | Yes      | N/A     | `<img />` |
| info      | node | Yes      | N/A     | `<h2>Title</h2>` |
| dir      | string | No      | `'ltr'` | `'rtl'` |

## Usage

The typical usage of this component is as described below. For LTR services an image sits on the right side of the promo with info elements on the left, while for RTL services an image sits on the left side of the promo with info elements on the right.

```jsx
import LeadingStoryPromo from '@bbc/psammead-leading-story-promo';

const WrappingComponent = () => (
  <div>
    <LeadingStoryPromo image={image} info={info} />
  </div>
);
```

### When to use this component

The `LeadingStoryPromo` component is designed to be used within a link element to allow the user to navigate to the featured story on another page.

### When not to use this component

<!-- Description of the where the component shouldn't be used -->

### Accessibility notes
This component is still in its initial alpha stages, and requires a full and extensive accessibility review.

### Roadmap

<!-- Known future changes of the component -->

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead repository](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/bbc/psammead/blob/latest/LICENSE).
