import { expect } from 'chai';

/**
 * Check if the given elements text is the same as the given text
 * @param  {String}   elementType   Element type (element or button)
 * @param  {String}   selector       Element selector
 * @param  {String}   falseCase     Whether to check if the content equals the
 *                                  given text or not
 * @param  {String}   expectedText  The text to validate against
 */
export function checkEqualsText(elementType: string, selector: string, falseCase: string, expectedText: string): void {
  let command = 'getValue';

  if (
    elementType === 'button'
    || $(selector).getAttribute('value') === null
  ) {
    command = 'getText';
  }

  let parsedExpectedText = expectedText;
  let boolFalseCase = !!falseCase;

  // Check for empty element
  if (typeof parsedExpectedText === 'function') {
    parsedExpectedText = '';

    boolFalseCase = !boolFalseCase;
  }

  if (parsedExpectedText === undefined && falseCase === undefined) {
    parsedExpectedText = '';
    boolFalseCase = true;
  }

  const text = $(selector)[command]();

  if (boolFalseCase) {
    expect(parsedExpectedText).to.not.equal(text);
  } else {
    expect(parsedExpectedText).to.equal(text);
  }
}
