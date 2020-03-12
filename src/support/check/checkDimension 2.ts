import { expect } from 'chai';

/**
 * Check the dimensions of the given element
 * @param  {String}   selector     Element selector
 * @param  {String}   falseCase    Whether to check if the dimensions match or not
 * @param  {String}   expectedSize Expected size
 * @param  {String}   dimension    Dimension to check (broad or tall)
 */
export function checkDimension(selector: string, falseCase: string, expectedSize: string, dimension: string): void {
  const elementSize = $(selector).getSize();
  const intExpectedSize = parseInt(expectedSize, 10);
  let originalSize = elementSize.height;
  let label = 'height';

  if (dimension === 'broad') {
    originalSize = elementSize.width;
    label = 'width';
  }

  if (falseCase) {
    expect(originalSize).to.not
      .equal(
        intExpectedSize,
        `Element "${selector}" should not have a ${label} of `
        + `${intExpectedSize}px`,
      );
  } else {
    expect(originalSize).to
      .equal(
        intExpectedSize,
        `Element "${selector}" should have a ${label} of `
        + `${intExpectedSize}px, but is ${originalSize}px`,
      );
  }
}
