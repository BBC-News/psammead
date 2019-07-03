import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { render } from '@testing-library/react';
import Brand from './index';

const svg = {
  group: (
    <g fillrule="evenodd">
      <path d="M84.32" />
    </g>
  ),
  viewbox: {
    height: 24,
    width: 167.95,
  },
  ratio: 6.9979,
};

describe('Brand', () => {
  shouldMatchSnapshot(
    'should render correctly with link provided',
    <Brand
      product="Default Brand Name"
      serviceLocalisedName="Service"
      svgHeight={24}
      maxWidth={280}
      minWidth={180}
      svg={svg}
      url="https://www.bbc.co.uk/news"
    />,
  );

  shouldMatchSnapshot(
    'should render correctly with link not provided',
    <Brand
      product="Default Brand Name"
      serviceLocalisedName="Service"
      svg={svg}
      svgHeight={24}
      maxWidth={280}
      minWidth={180}
    />,
  );

  shouldMatchSnapshot(
    'should render correctly with no service Localised Name',
    <Brand
      product="BBC News"
      svg={svg}
      svgHeight={24}
      maxWidth={280}
      minWidth={180}
    />,
  );

  shouldMatchSnapshot(
    'should render correctly with transparent borders',
    <Brand
      product="BBC News"
      svg={svg}
      svgHeight={24}
      maxWidth={280}
      minWidth={180}
      borderTop
      borderBottom
    />,
  );

  describe('assertions - visually hidden text', () => {
    it('should have role of text when serviceLocalisedName is provided', () => {
      const { container } = render(
        <Brand
          product="Default Brand Name"
          serviceLocalisedName="Service"
          svgHeight={24}
          maxWidth={280}
          minWidth={180}
          svg={svg}
          url="https://www.bbc.co.uk/news"
        />,
      );

      expect(container.querySelector('span').getAttribute('role')).toEqual(
        'text',
      );
    });

    it('should not have role of text when serviceLocalisedName is not provided', () => {
      const { container } = render(
        <Brand
          product="Default Brand Name"
          svgHeight={24}
          maxWidth={280}
          minWidth={180}
          svg={svg}
          url="https://www.bbc.co.uk/news"
        />,
      );

      expect(container.querySelector('span').getAttribute('role')).toBeNull();
    });
  });
});
