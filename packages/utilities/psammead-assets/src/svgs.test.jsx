import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import * as svgs from './svgs';

const svgExceptions = [
  'BBC_BLOCKS',
  'coreIcons',
  'mediaIcons',
  'navigationIcons',
  'plainIcons',
];

Object.keys(svgs)
  .filter(svgName => !svgExceptions.includes(svgName))
  .forEach(svgName => {
    describe(`${svgName} SVG`, () => {
      shouldMatchSnapshot(
        'should render correctly',
        <svg
          viewBox={`${svgs[svgName].viewbox.width} ${svgs[svgName].viewbox.height}`}
        >
          {svgs[svgName].group}
        </svg>,
      );
    });
  });
