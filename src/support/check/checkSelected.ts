import { expect } from 'chai';

/**
 * Check the selected state of the given element
 * @param  {String}   selector   Element selector
 * @param  {String}   falseCase Whether to check if the element is elected or not
 */
export function checkSelected(selector: string, falseCase: string): void {
  const isSelected = $(selector).isSelected();

  if (falseCase) {
    expect(isSelected).to.not
      .equal(true, `"${selector}" should not be selected`);
  } else {
    expect(isSelected).to
      .equal(true, `"${selector}" should be selected`);
  }
}
