import { expect } from 'chai';

/**
 * Check if the given elements contains text
 * @param  {String}   elementType   Element type (element or button)
 * @param  {String}   selector      Element selector
 * @param  {String}   falseCase     Whether to check if the content contains the given text or not
 * @param  {String}   expectedText  The text to check against
 */
export function checkContainsText(
  elementType: string,
  selector: string,
  falseCase: string,
  expectedText: string,
): void {
  let command = 'getValue';

  if (
    ['button', 'container'].includes(elementType)
    || $(selector).getAttribute('value') === null
  ) {
    command = 'getText';
  }

  let boolFalseCase;
  let stringExpectedText = expectedText;

  const elem = $(selector);
  elem.waitForDisplayed();
  const text = elem[command]();

  if (typeof expectedText === 'undefined') {
    stringExpectedText = falseCase;
    boolFalseCase = false;
  } else {
    boolFalseCase = (falseCase === ' not');
  }

  if (boolFalseCase) {
    expect(text).to.not.contain(stringExpectedText);
  } else {
    expect(text).to.contain(stringExpectedText);
  }
}
