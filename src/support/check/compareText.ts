import { expect } from 'chai';

/**
 * Compare the contents of two elements with each other
 * @param  {String}   selector1  Element selector for the first element
 * @param  {String}   falseCase Whether to check if the contents of both
 *                              elements match or not
 * @param  {String}   selector2  Element selector for the second element
 */
export function compareText(selector1: string, falseCase: string, selector2: string): void {
  const text1 = $(selector1).getText();
  const text2 = $(selector2).getText();

  if (falseCase) {
    expect(text1).to.not.equal(
      text2,
      `Expected text not to be "${text1}"`,
    );
  } else {
    expect(text1).to.equal(
      text2,
      `Expected text to be "${text1}" but found "${text2}"`,
    );
  }
}
