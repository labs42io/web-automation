import { expect } from 'chai';

/**
 * Check if the given URL was opened in a new window
 * @param  {String}   expectedUrl The URL to check for
 * @param  {String}   obsolete    Indicator for the type (window or tab) unused
 */
/* eslint @typescript-eslint/no-unused-vars: "off" */
export function checkIsOpenedInNewWindow(expectedUrl: string, obsolete: string): void {
  const windowHandles = browser.getWindowHandles();

  expect(windowHandles).length.to.not.equal(1, 'A popup was not opened');

  const lastWindowHandle = windowHandles.slice(-1);

  // Make sure we focus on the last opened window handle
  browser.switchToWindow(lastWindowHandle[0]);

  const windowUrl = browser.getUrl();

  expect(windowUrl).to
    .contain(expectedUrl, 'The popup has a incorrect getUrl');

  browser.closeWindow();
}
