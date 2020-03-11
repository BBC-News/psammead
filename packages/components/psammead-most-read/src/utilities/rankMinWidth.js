import {
  GEL_SPACING_DBL,
  GEL_SPACING_TRPL,
  GEL_SPACING_QUAD,
  GEL_SPACING_QUIN,
  GEL_SPACING_SEXT,
} from '@bbc/gel-foundations/spacings';

// Services with fonts that have glyphs thinner than the majority of other fonts.
// This was mainly based on the old overrides (ie. Any group0 value < 2rem).
export const thinFontServices = [
  'arabic',
  'bengali',
  'pashto',
  'persian',
  'tamil',
  'telegu',
  'urdu',
];

// If numberOfItems < 10, no extra spacing needs to be accounted for.
export const singleDigitDefault = {
  group0: GEL_SPACING_TRPL,
  group1: GEL_SPACING_TRPL,
  group2: GEL_SPACING_TRPL,
  group3: GEL_SPACING_QUAD,
  group5: GEL_SPACING_QUAD,
};

// If numberOfItems >= 10, extra spacing needs to be accounted for.
export const doubleDigitDefault = {
  group3: GEL_SPACING_QUAD,
  group5: GEL_SPACING_QUAD,
  // These values are used to align the rank when a double digit exists in the column
  group0WithOneColumn: GEL_SPACING_QUIN,
  group1WithOneColumn: GEL_SPACING_QUIN,
  group2WithOneColumn: GEL_SPACING_SEXT,
  group3WithOneColumn: '4rem',
  group3WithTwoColumns: '4rem',
  group5WithFiveColumns: '4rem',
};

export const singleDigitThin = {
  group0: GEL_SPACING_DBL,
  group1: GEL_SPACING_DBL,
  group2: GEL_SPACING_DBL,
  group3: GEL_SPACING_TRPL,
  group5: GEL_SPACING_TRPL,
};

export const doubleDigitThin = {
  group3: GEL_SPACING_TRPL,
  group5: GEL_SPACING_TRPL,
  // These values are used to align the rank when a double digit exists in the column
  group0WithOneColumn: GEL_SPACING_QUAD,
  group1WithOneColumn: GEL_SPACING_QUAD,
  group2WithOneColumn: GEL_SPACING_QUAD,
  group3WithOneColumn: GEL_SPACING_SEXT,
  group3WithTwoColumns: GEL_SPACING_SEXT,
  group5WithFiveColumns: GEL_SPACING_SEXT,
};
