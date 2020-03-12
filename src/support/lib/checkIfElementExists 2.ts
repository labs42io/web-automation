import { expect } from 'chai';

/**
 * Check if the given element exists in the DOM one or more times
 * @param  {String}  selector  Element selector
 * @param  {Boolean} falseCase Check if the element (does not) exists
 * @param  {Number}  exactly  Check if the element exists exactly this number
 *                            of times
 */
export function checkIfElementExists(selector: string, falseCase?: boolean, exactly?: number): void {
  const nrOfElements = $$(selector);

  if (falseCase === true) {
    expect(nrOfElements).to.have.lengthOf(
      0,
      `Element with selector "${selector}" should not exist on the page`,
    );
  } else if (exactly) {
    expect(nrOfElements).to.have.lengthOf(
      exactly,
      `Element with selector "${selector}" should exist exactly ${exactly} time(s)`,
    );
  } else {
    expect(nrOfElements).to.have.length.of.at.least(
      1,
      `Element with selector "${selector}" should exist on the page`,
    );
  }
}
