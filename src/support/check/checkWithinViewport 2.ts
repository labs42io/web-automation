import { expect } from 'chai';

/**
 * Check if the given element is visible inside the current viewport
 * @param  {String}   selector   Element selector
 * @param  {String}   falseCase Whether to check if the element is visible
 *                              within the current viewport or not
 */
export function checkWithinViewport(selector: string, falseCase: string): void {
  const isDisplayed = $(selector).isDisplayedInViewport();

  if (falseCase) {
    expect(isDisplayed).to.not
      .equal(
        true,
        `Expected element "${selector}" to be outside the viewport`,
      );
  } else {
    expect(isDisplayed).to
      .equal(
        true,
        `Expected element "${selector}" to be inside the viewport`,
      );
  }
}
