import { expect } from 'chai';

/**
 * Check the title of the current browser window contains expected text/title
 * @param  {Type}     falseCase     Whether to check if the title contains the
 *                                  expected value or not
 * @param  {Type}     expectedTitle The expected title
 */
export function checkTitleContains(falseCase: string, expectedTitle: string): void {
  const title = browser.getTitle();

  if (falseCase) {
    expect(title).to.not
      .contain(
        expectedTitle,
        `Expected title not to contain "${expectedTitle}"`,
      );
  } else {
    expect(title).to
      .contain(
        expectedTitle,
        `Expected title to contain "${expectedTitle}" but found "${title}"`,
      );
  }
}
