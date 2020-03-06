/**
 * Close all but the first tab
 * @param  {String}   obsolete Type of object to close (window or tab)
 */
/* eslint @typescript-eslint/no-unused-vars: "off" */
export function closeAllButFirstTab(obsolete: string): void {
  const windowHandles = browser.getWindowHandles();

  // Close all tabs but the first one
  windowHandles.reverse();
  windowHandles.forEach((handle, index) => {
    browser.switchToWindow(handle);
    if (index < windowHandles.length - 1) {
      browser.closeWindow();
    }
  });
}
