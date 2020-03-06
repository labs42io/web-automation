import { expect } from 'chai';

/**
 * Check if the given element has the given class
 * @param  {String}   selector          Element selector
 * @param  {String}   falseCase         Whether to check for the class to exist
 *                                      or not ('has', 'does not have')
 * @param  {String}   expectedClassName The class name to check
 */
export function checkClass(selector: string, falseCase: string, expectedClassName: string): void {
  const classesList = $(selector).getAttribute('class').split(' ');

  if (falseCase === 'does not have') {
    expect(classesList).to.not
      .include(expectedClassName,
        `Element ${selector} should not have the class `
        + `${expectedClassName}`);
  } else {
    expect(classesList).to
      .include(
        expectedClassName,
        `Element ${selector} should have the class ${expectedClassName}`,
      );
  }
}
