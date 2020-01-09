import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import {
  color,
  select,
  number,
  text,
  withKnobs,
  boolean,
} from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import * as svgs from '@bbc/psammead-assets/svgs';
import { C_POSTBOX, C_WHITE } from '@bbc/psammead-styles/colours';
import Brand from '@bbc/psammead-brand';
import { ampDecorator } from '../../../../.storybook/config';
import Navigation, { NavigationUl, NavigationLi } from './index';
import {
  CanonicalMenuButton,
  AmpMenuButton,
  CanonicalDropdown,
  DropdownUl,
  DropdownLi,
} from './DropdownNavigation';
import { ScrollableNavigation } from './ScrollableNavigation';
import igboNavData from '../testHelpers/igbo';
import pidginNavData from '../testHelpers/pidgin';
import yorubaNavData from '../testHelpers/yoruba';
import arabicNavData from '../testHelpers/arabic';

import notes from '../README.md';

const navStoriesData = [
  {
    title: 'igbo',
    currentPageText: 'Current page',
    data: igboNavData,
  },
  {
    title: 'pidgin',
    currentPageText: 'Current page',
    data: pidginNavData,
  },
  {
    title: 'yoruba',
    currentPageText: 'Current page',
    data: yorubaNavData,
  },
  {
    title: 'arabic',
    currentPageText: 'Current page',
    data: arabicNavData,
    dir: 'rtl',
  },
];

const BackgroundContainer = styled.div`
  background-color: #000000;
  height: 100vh;
`;

const ToggledContainer = styled.div`
  background-color: #ffffff;
  float: left;
  clear: both;
  margin-top: 10px;
`;

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
  const backgroundColour = color('Background colour', `${C_POSTBOX}`);
  const logoColour = color('Logo colour', `${C_WHITE}`);

  return {
    productInput,
    serviceLocalisedNameInput,
    svgChoice,
    svgHeightInput,
    minWidthInput,
    maxWidthInput,
    borderTop,
    borderBottom,
    backgroundColour,
    logoColour,
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
    backgroundColour,
    logoColour,
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
      backgroundColour={backgroundColour}
      logoColour={logoColour}
    />
  );
};

const navigationStory = (currentPageText, navData, dir, brand) => ({
  script,
  service,
}) => {
  return (
    <>
      {brand && getBrand()}

      <Navigation script={script} service={service} dir={dir}>
        <ScrollableNavigation dir={dir}>
          <NavigationUl>
            {navData.map((item, index) => {
              const { title, url } = item;
              const active = index === 0;

              return (
                <NavigationLi
                  key={title}
                  url={url}
                  script={script}
                  active={active}
                  currentPageText={currentPageText}
                  service={service}
                  dir={dir}
                >
                  {title}
                </NavigationLi>
              );
            })}
          </NavigationUl>
        </ScrollableNavigation>
      </Navigation>
    </>
  );
};

const animationStory = () => ({ dir, script, service }) => {
  const isOpen = boolean('Open', false);
  return (
    <Navigation script={script} service={service} dir={dir}>
      <CanonicalDropdown isOpen={isOpen}>
        <DropdownUl>
          {pidginNavData.map((item, index) => {
            const active = index === 3;
            const { title, url } = item;
            return (
              <DropdownLi
                script={script}
                service={service}
                key={title}
                dir={dir}
                url={url}
                active={active}
                currentPageText="Current page"
              >
                {title}
              </DropdownLi>
            );
          })}
        </DropdownUl>
      </CanonicalDropdown>
    </Navigation>
  );
};

const canonicalStories = storiesOf('Components|Navigation/Canonical', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob());

navStoriesData.map(item => {
  const { title, currentPageText, data, dir } = item;
  const isAmp = false;

  return canonicalStories.add(
    title,
    navigationStory(currentPageText, data, dir, false, isAmp),
    {
      notes,
    },
  );
});

canonicalStories.add(
  'Canonical Menu Button',
  ({ dir, script }) => {
    const isOpen = boolean('Open', false);
    return (
      <BackgroundContainer>
        <CanonicalMenuButton
          announcedText="Menu"
          onClick={() => {}}
          isOpen={isOpen}
          dir={dir}
          script={script}
        />
      </BackgroundContainer>
    );
  },
  {
    notes,
  },
);

canonicalStories.add('Dropdown animation', animationStory(), {
  notes,
});

canonicalStories.add(
  'Igbo with brand',
  navigationStory(
    navStoriesData[0].currentPageText,
    igboNavData,
    navStoriesData[0].dir,
    true,
    false,
  ),
  {
    notes,
  },
);

const ampStories = storiesOf('Components|Navigation/AMP', module)
  .addDecorator(ampDecorator)
  .addDecorator(withKnobs)
  .addDecorator(ampDecorator)
  .addDecorator(withServicesKnob());

navStoriesData.map(item => {
  const { title, currentPageText, data, dir } = item;
  const isAmp = true;

  return ampStories.add(
    title,
    navigationStory(currentPageText, data, dir, false, isAmp),
    {
      notes,
    },
  );
});

ampStories.add(
  'AMP Menu Button',
  ({ dir, script }) => (
    <BackgroundContainer>
      <AmpMenuButton
        announcedText="Menu"
        onToggle="other-element.toggleVisibility"
        dir={dir}
        script={script}
      />
      <ToggledContainer id="other-element">
        Toggled with AMP action
      </ToggledContainer>
    </BackgroundContainer>
  ),
  {
    notes,
  },
);
