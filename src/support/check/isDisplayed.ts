import { expect } from 'chai';

/**
 * Check if the given element is (not) visible
 * @param  {String}   selector   Element selector
 * @param  {String}   falseCase Check for a visible or a hidden element
 */
export function isDisplayed(selector: string, falseCase: string): void {
  const displayed = $(selector).isDisplayed();

  if (falseCase) {
    expect(displayed).to.not
      .equal(true, `Expected element "${selector}" not to be displayed`);
  } else {
    expect(displayed).to
      .equal(true, `Expected element "${selector}" to be displayed`);
  }
}
