import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import {
  select,
  number,
  text,
  withKnobs,
  boolean,
} from '@storybook/addon-knobs';
import { inputProvider, dirDecorator } from '@bbc/psammead-storybook-helpers';
import * as svgs from '@bbc/psammead-assets/svgs';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import Brand from '@bbc/psammead-brand';
import Navigation, { NavigationUl, NavigationLi } from './index';
import igboNavData from '../testHelpers/igbo';
import pidginNavData from '../testHelpers/pidgin';
import yorubaNavData from '../testHelpers/yoruba';
import notes from '../README.md';

const navStoriesData = [
  {
    title: 'igbo',
    skipLinkText: 'Wụga n’ọdịnaya',
    currentPageText: 'Current page',
    data: igboNavData,
  },
  {
    title: 'pidgin',
    skipLinkText: 'Waka go wetin de inside',
    currentPageText: 'Current page',
    data: pidginNavData,
  },
  {
    title: 'yoruba',
    skipLinkText: 'Fò kọjá sí nnkan tí ó wà nínú rẹ̀',
    currentPageText: 'Current page',
    data: yorubaNavData,
  },
];

const offScreenText = (
  <>
    <span
      // eslint-disable-next-line jsx-a11y/aria-role
      role="text"
    >
      <span lang="en-GB">BBC News</span>, Ìgbò - Akụkọ
    </span>
  </>
);

const inputs = () => {
  // capitalization is only for presentation purpose on the knob
  const options = Object.keys(svgs)
    .filter(key => key !== 'BBC_BLOCKS')
    .map(key => key.charAt(0).toUpperCase() + key.slice(1));

  const svgChoice = select('Service SVG', options, 'Igbo').toLowerCase();
  const productInput = text('Product', 'BBC News');
  const serviceLocalisedNameInput = text('Localised service name', 'Igbo');
  const svgRatio = svgs[svgChoice].ratio;
  const svgMaxHeight = 24;
  const svgMinHeight = 16;
  const minWidthInput = number('minimum svg width', svgRatio * svgMinHeight);
  const maxWidthInput = number('maximum svg width', svgRatio * svgMaxHeight);
  const svgHeightInput = number('desired height svg', svgMaxHeight);
  const borderBottom = boolean('Border Bottom', false);
  const borderTop = boolean('Border Top', false);

  return {
    productInput,
    serviceLocalisedNameInput,
    svgChoice,
    svgHeightInput,
    minWidthInput,
    maxWidthInput,
    borderTop,
    borderBottom,
  };
};

const getBrand = () => {
  const {
    productInput,
    serviceLocalisedNameInput,
    svgHeightInput,
    minWidthInput,
    maxWidthInput,
    svgChoice,
    borderBottom,
    borderTop,
  } = inputs();

  return (
    <Brand
      product={productInput}
      serviceLocalisedName={serviceLocalisedNameInput}
      svgHeight={svgHeightInput}
      minWidth={minWidthInput}
      maxWidth={maxWidthInput}
      svg={svgs[svgChoice]}
      url="https://www.bbc.com/news"
      borderBottom={borderBottom}
      borderTop={borderTop}
    />
  );
};

const StyledMain = styled.main`
  padding: 0px 1rem;
`;

const navigationStory = (skipLinkText, currentPageText, navData, brand) =>
  inputProvider({
    // eslint-disable-next-line react/prop-types
    componentFunction: ({ script, dir, service }) => (
      <>
        {brand && getBrand()}

        <Navigation
          script={script}
          skipLinkText={skipLinkText}
          service={service}
        >
          <NavigationUl>
            {navData.map((item, index) => {
              const { title, url } = item;
              const active = index === 0;

              return (
                <NavigationLi
                  key={title}
                  url={url}
                  script={script}
                  dir={dir}
                  active={active}
                  currentPageText={currentPageText}
                  service={service}
                >
                  {title}
                </NavigationLi>
              );
            })}
          </NavigationUl>
        </Navigation>
        <StyledMain>
          <VisuallyHiddenText id="content" as="h1" tabIndex="-1">
            {offScreenText}
          </VisuallyHiddenText>
        </StyledMain>
      </>
    ),
  });

const storiesWithoutBrand = storiesOf(
  'Components|Navigation/without brand',
  module,
)
  .addDecorator(withKnobs)
  .addDecorator(dirDecorator);

navStoriesData.map(item => {
  const { title, skipLinkText, currentPageText, data } = item;
  return storiesWithoutBrand.add(
    title,
    navigationStory(skipLinkText, currentPageText, data),
    {
      notes,
    },
  );
});

const storiesWithBrand = storiesOf('Components|Navigation/with brand', module)
  .addDecorator(withKnobs)
  .addDecorator(dirDecorator);

storiesWithBrand.add(
  navStoriesData[0].title,
  navigationStory(
    navStoriesData[0].skipLinkText,
    navStoriesData[0].currentPageText,
    igboNavData,
    true,
  ),
  {
    notes,
  },
);
