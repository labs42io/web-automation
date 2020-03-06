import { expect } from 'chai';

/**
 * Check if the given selector is enabled
 * @param  {String}   selector   Element selector
 * @param  {String}   falseCase Whether to check if the given selector is enabled or not
 */
export function isEnabled(selector: string, falseCase: string): void {
  const enabled = $(selector).isEnabled();

  if (falseCase) {
    expect(enabled).to.not
      .equal(true, `Expected element "${selector}" not to be enabled`);
  } else {
    expect(enabled).to
      .equal(true, `Expected element "${selector}" to be enabled`);
  }
}
