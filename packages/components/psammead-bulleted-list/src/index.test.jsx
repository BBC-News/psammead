import React from 'react';
import { render } from '@testing-library/react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { arabic, latin } from '@bbc/gel-foundations/scripts';
import BulletedList from './index';

const ltrProps = {
  dir: 'ltr',
  script: latin,
  service: 'news',
};

const rtlProps = {
  dir: 'rtl',
  script: arabic,
  service: 'arabic',
};

describe('PsammeadBulletedList', () => {
  it('should confirm that the list-style is none, so that screen-readers do not read out "bullet"', () => {
    const { getByText } = render(
      <BulletedList {...ltrProps}>
        <li>First item on the list</li>
      </BulletedList>,
    );
    const listEl = getByText('First item on the list').parentNode;
    const style = window.getComputedStyle(listEl);
    expect(style.listStyleType).toBe('none');
  });

  shouldMatchSnapshot(
    'should render correctly from ltr',
    <BulletedList {...ltrProps}>
      <li>First item on the list</li>
      <li>Second item on the list</li>
      <li>Final list item</li>
    </BulletedList>,
  );

  shouldMatchSnapshot(
    'should render correctly from rtl',
    <BulletedList {...rtlProps}>
      <li>العنصر الأول في القائمة</li>
      <li>البند الثاني في القائمة</li>
      <li>عنصر القائمة النهائية</li>
    </BulletedList>,
  );
});
