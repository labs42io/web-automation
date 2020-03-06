/**
 * Perform a key press
 * @param  {String}   key  The key to press
 */
export function pressButton(key: string): void {
  browser.keys(key);
}
