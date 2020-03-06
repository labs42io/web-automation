import { expect } from 'chai';

/**
 * Check the text of a modal
 * @param  {String}   modalType     The type of modal that is expected
 *                                  (alertbox, confirmbox or prompt)
 * @param  {String}   falseState    Whether to check if the text matches or not
 * @param  {String}   expectedText  The text to check against
 */
export function checkModalText(modalType: string, falseState: string, expectedText: string): void {
  try {
    const text = browser.getAlertText();

    if (falseState) {
      expect(text).to.not.equal(
        expectedText,
        `Expected the text of ${modalType} not to equal `
        + `"${expectedText}"`,
      );
    } else {
      expect(text).to.equal(
        expectedText,
        `Expected the text of ${modalType} to equal `
        + `"${expectedText}", instead found "${text}"`,
      );
    }
  } catch (e) {
    expect.fail(`A ${modalType} was not opened when it should have been opened`);
  }
}
