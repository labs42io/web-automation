import { expect } from 'chai';
import { isNumber } from 'util';

/**
 * Check the given property of the given element
 * @param  {String}   isCSS         Whether to check for a CSS property or an attribute
 * @param  {String}   attrName      The name of the attribute to check
 * @param  {String}   selector      Element selector
 * @param  {String}   falseCase     Whether to check if the value of the
 *                                  attribute matches or not
 * @param  {String}   expectedValue The value to match against
 */
export function checkProperty(
  isCSS: string,
  attrName: string,
  selector: string,
  falseCase: string,
  expectedValue: string,
): void {
  const command = isCSS ? 'getCSSProperty' : 'getAttribute';
  const attrType = (isCSS ? 'CSS attribute' : 'Attribute');
  let attributeValue = $(selector)[command](attrName);

  const value = isNumber(expectedValue) ? parseFloat(expectedValue) : expectedValue;

  // when getting something with a color or font-weight WebdriverIO returns a
  // object but we want to assert against a string
  if (/(color|font-weight)/.exec(attrName)) {
    attributeValue = (attributeValue as WebdriverIO.CSSProperty).value;
  }
  if (falseCase) {
    expect(attributeValue).to.not
      .equal(value,
        `${attrType}: ${attrName} of element "${selector}" should `
        + `not contain "${attributeValue}"`);
  } else {
    expect(attributeValue).to
      .equal(value,
        `${attrType}: ${attrName} of element "${selector}" should `
        + `contain "${attributeValue}", but "${expectedValue}"`);
  }
}
