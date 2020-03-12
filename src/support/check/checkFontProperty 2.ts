import { expect } from 'chai';

/**
 * Check the given property of the given element
 * @param  {String}   isCSS         Whether to check for a CSS property or an
 *                                  attribute
 * @param  {String}   attrName      The name of the attribute to check
 * @param  {String}   elem          Element selector
 * @param  {String}   falseCase     Whether to check if the value of the
 *                                  attribute matches or not
 * @param  {String}   expectedValue The value to match against
 */
export function checkFontProperty(
  isCSS: string,
  attrName: string,
  elem: string,
  falseCase: string,
  expectedValue: string,
): void {
  const command = isCSS ? 'getCssProperty' : 'getAttribute';
  const attrType = (isCSS ? 'CSS attribute' : 'Attribute');
  let attributeValue = browser[command](elem, attrName);

  // when getting something with a color or font-weight WebdriverIO returns a
  // object but we want to assert against a string
  if (/(font-size|line-height|display|font-weight)/.exec(attrName)) {
    attributeValue = attributeValue.value;
  }

  if (falseCase) {
    expect(attributeValue).to.not
      .equal(
        expectedValue,
        `${attrType}: ${attrName} of element "${elem}" should not `
        + `contain "${attributeValue}"`,
      );
  } else {
    expect(attributeValue).to
      .equal(
        expectedValue,
        `${attrType}: ${attrName} of element "${elem}" should contain `
        + `"${attributeValue}", but "${expectedValue}"`,
      );
  }
}
