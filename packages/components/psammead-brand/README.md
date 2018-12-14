# Brand &middot; [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/BBC-News/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-brand.svg)](https://www.npmjs.com/package/@bbc/psammead-brand) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/BBC-News/psammead/blob/latest/CONTRIBUTING.md)

## Description

The `Brand` component provides the BBC News logo (as SVG), nested inside a styled span, link and div. The link is currently hardcoded to "https://www.bbc.co.uk/news". `Brand` takes a `brandName` as a prop. This prop is passed to a [VisuallyHiddenText](../VisuallyHiddenText) component, nested inside Brand. Note that this does not currently affect the branding itself, which always renders as `BBC NEWS`.

## Usage

| Prop    | Description     |
| ------- | --------------- |
| `brandName`  | Text equivalent of the Brand name, e.g. `BBC News`. Should be literal translation of the SVG text. Used for visually hidden text for users of Assistive Technologies. |
| `children`   | React elements for Brand SVG paths, with all relevant SVG attributes as camel-cased (e.g. `stroke-width` as `strokeWidth`, [see React Docs](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)) |
| `svgWidth` | A number representing the width of the SVG, given that the height is fixed to 24px. Used for the viewbox width and width attribute of the SVG.  |

```jsx
import Brand from '@bbc/psammead-brand';

const Header = () => (
  <header role="banner">
    <Brand brandName="BBC News" svgWidth={167.95}>
      <g fill="#fff" fillRule="evenodd">
        <path d="M84.32,0V24H58.82V0ZM79.26,16l-.41.25a11.91,11.91,0,0,1-6.07,1.85c-4.18,0-6.93-2.49-6.94-6.09s2.88-6.13,6.83-6.14a12,12,0,0,1,6,1.71l.4.22V4.6l-.17-.07A16.54,16.54,0,0,0,72.7,3.14a10.56,10.56,0,0,0-7.19,2.57,8.68,8.68,0,0,0-2.85,6.54A8.46,8.46,0,0,0,65,17.93a10,10,0,0,0,7.5,2.94h0a14,14,0,0,0,6.56-1.5l.15-.07Z M54.94,0V24H29.43V0ZM48.88,15.91a4.62,4.62,0,0,0-3.77-4.47,4.25,4.25,0,0,0,1.49-1.19,3.75,3.75,0,0,0,.72-2.34,4.17,4.17,0,0,0-1.39-3.13,6.33,6.33,0,0,0-4.36-1.41H36.12V20.65H42.5a7.18,7.18,0,0,0,4.9-1.53A4.27,4.27,0,0,0,48.88,15.91Z M45.7,15.57A2,2,0,0,1,45,17.16a4.22,4.22,0,0,1-2.85.79H39.22V13.23H42a4.89,4.89,0,0,1,2.82.68A1.93,1.93,0,0,1,45.7,15.57Z M43.32,9.92a2,2,0,0,0,.82-1.79,1.82,1.82,0,0,0-.58-1.43,3.33,3.33,0,0,0-2.26-.63H39.22v4.47h1.43A4.62,4.62,0,0,0,43.32,9.92Z M25.55,0V24H0V0ZM19.49,15.91a4.62,4.62,0,0,0-3.77-4.47,4.24,4.24,0,0,0,1.49-1.19,3.75,3.75,0,0,0,.72-2.34,4.18,4.18,0,0,0-1.39-3.13,6.33,6.33,0,0,0-4.36-1.41H6.74V20.65h6.38A7.18,7.18,0,0,0,18,19.12,4.27,4.27,0,0,0,19.49,15.91Z M13.93,9.92a2,2,0,0,0,.82-1.79,1.82,1.82,0,0,0-.58-1.43,3.33,3.33,0,0,0-2.26-.63H9.83v4.47h1.43A4.62,4.62,0,0,0,13.93,9.92Z M15.47,13.91a4.89,4.89,0,0,0-2.82-.68H9.83V18h2.94a4.23,4.23,0,0,0,2.85-.79,2,2,0,0,0,.69-1.59A1.93,1.93,0,0,0,15.47,13.91Z" />
        <path d="M111,3.36h2.36V20.7h-2.13L99.66,7.35V20.7H97.33V3.36h2L111,16.83Z" />
        <path d="m117.86 3.36h9.83v2.21h-7.35v5.29h7.1v2.22h-7.1v5.39h7.58v2.21h-10.06z M154.18,3.36h2.48l-7,17.41h-.55l-5.67-14.1-5.73,14.1h-.53l-7-17.41h2.5l4.78,12,4.81-12h2.35l4.83,12Z M163.38,13.43l-1.89-1.15A8.57,8.57,0,0,1,159,10.16a4,4,0,0,1-.75-2.41,4.26,4.26,0,0,1,1.42-3.33,5.31,5.31,0,0,1,3.69-1.28,7,7,0,0,1,4,1.22V7.17a5.74,5.74,0,0,0-4-1.8,3.34,3.34,0,0,0-2,.56,1.71,1.71,0,0,0-.78,1.44,2.22,2.22,0,0,0,.58,1.46,7.25,7.25,0,0,0,1.85,1.43l1.9,1.12Q168,13.28,168,16.21a4.42,4.42,0,0,1-1.4,3.39A5.11,5.11,0,0,1,163,20.9a7.63,7.63,0,0,1-4.68-1.58V16.17a5.84,5.84,0,0,0,4.65,2.55,2.93,2.93,0,0,0,1.94-.65,2,2,0,0,0,.78-1.63Q165.67,14.85,163.38,13.43Z" />
      </g>
    </Brand>
  </header>
);
```

## When to use this component

The `Brand` component is designed to be used where a BBC logo is required as SVG. `Brand` is used in the [BrandContainer](../../containers/Brand), which consumes a service context it passes to the `Brand`.

## Accessibility notes

- Visually hidden text is provided (e.g. for screen reader users)
- `Brand` is keyboard-accessible and provides hover and focus styles

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead respository](https://github.com/BBC-News/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/BBC-News/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/BBC-News/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/BBC-News/psammead/blob/latest/LICENSE).
