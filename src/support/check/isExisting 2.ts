import { expect } from 'chai';

/**
 * Check if the given element exists in the current DOM
 * @param  {String}   selector  Element selector
 * @param  {String}   falseCase Whether to check if the element exists or not
 */
export function isExisting(selector: string, falseCase: string): void {
  const elements = $$(selector);

  if (falseCase) {
    expect(elements).to.have
      .lengthOf(0, `Expected element "${selector}" not to exist`);
  } else {
    expect(elements).to.have.length
      .above(0, `Expected element "${selector}" to exist`);
  }
}
