import renderer from 'react-test-renderer';
import 'jest-styled-components';
import ShallowRenderer from 'react-test-renderer/shallow';

export const shouldMatchSnapshot = (title, component) => {
  it(title, () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
};

export const shallowRender = component => {
  const shallowRenderer = new ShallowRenderer();
  shallowRenderer.render(component);
  const result = shallowRenderer.getRenderOutput();

  return result;
};

export const shouldShallowMatchSnapshot = (title, component) => {
  it(title, () => {
    const tree = shallowRender(component);
    expect(tree).toMatchSnapshot();
  });
};

export const isNull = (title, component) => {
  it(title, () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toBeNull();
  });
};

const errorIfMissingKey = (keys, object, message) => {
  keys.forEach(key => {
    if (!(key in object)) {
      throw new Error(`Missing value '${key}' in ${message}.`);
    }
  });
};

const checkKeysExistInBothObjects = (object1, object2, message1, message2) => {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  errorIfMissingKey(object1Keys, object2, message2);
  errorIfMissingKey(object2Keys, object1, message1);
};

const checkTypesOfExports = (
  actualExportsByName,
  actualExports,
  expectedExports,
  utilityName,
) => {
  actualExportsByName.forEach(actualExportName => {
    const actualExportValue = actualExports[utilityName][actualExportName];
    const expectedExport = expectedExports[utilityName][actualExportName];
    const typeCheck = typeof actualExportValue === expectedExport; // eslint-disable-line valid-typeof

    // if this fails it is likely that an export is missing from the unit test expectation
    expect(typeCheck).toBe(true);
  });
};

export const testUtilityPackages = (
  actualExports,
  expectedExports,
  packageName,
) => {
  const actualUtilities = Object.keys(actualExports);

  // check if the actual exported file has defined expected values to match and that the expected values are actually exported
  checkKeysExistInBothObjects(
    actualExports,
    expectedExports,
    `the actual utilities for '${packageName}'`,
    `the expected utilities for '${packageName}'`,
  );

  actualUtilities.forEach(utilityName => {
    const actualExportsByName = Object.keys(actualExports[utilityName]);

    // check if each of the actual exported consts have an expected value to match and that the expected values are actually exported
    checkKeysExistInBothObjects(
      actualExports[utilityName],
      expectedExports[utilityName],
      `the actual export for '${packageName}/${utilityName}'`,
      `the expected export for '${packageName}/${utilityName}'`,
    );

    checkTypesOfExports(
      actualExportsByName,
      actualExports,
      expectedExports,
      utilityName,
    );
  });
};
