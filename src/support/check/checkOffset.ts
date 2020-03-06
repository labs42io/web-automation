import { expect } from 'chai';

/**
 * Check the offset of the given element
 * @param  {String}   selector          Element selector
 * @param  {String}   falseCase         Whether to check if the offset matches or not
 * @param  {String}   expectedPosition  The position to check against
 * @param  {String}   axis              The axis to check on (x or y)
 */
export function checkOffset(selector: string, falseCase: string, expectedPosition: string, axis: 'x' | 'y'): void {
  const location = $(selector).getLocation(axis);
  const intExpectedPosition = parseFloat(expectedPosition);

  if (falseCase) {
    expect(location).to.not
      .equal(
        intExpectedPosition,
        `Element "${selector}" should not be positioned at `
        + `${intExpectedPosition}px on the ${axis} axis`,
      );
  } else {
    expect(location).to
      .equal(
        intExpectedPosition,
        `Element "${selector}" should be positioned at `
        + `${intExpectedPosition}px on the ${axis} axis, but was found `
        + `at ${location}px`,
      );
  }
}
