import { expect } from 'chai';

/**
 * Check if the given elements contains text
 * @param  {String}   elementType   Element type (element or button)
 * @param  {String}   selector      Element selector
 * @param  {String}   falseCase     Whether to check if the content contains text or not
 */
export function checkContainsAnyText(elementType: string, selector: string, falseCase?: string | boolean): void {
  let command = 'getValue';

  if (elementType === 'button' || $(selector).getAttribute('value') === null) {
    command = 'getText';
  }

  let boolFalseCase;
  const text = $(selector)[command]();

  if (typeof falseCase === 'undefined') {
    boolFalseCase = false;
  } else {
    boolFalseCase = !!falseCase;
  }

  if (boolFalseCase) {
    expect(text).to.equal('');
  } else {
    expect(text).to.not.equal('');
  }
}
