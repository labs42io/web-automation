/**
 * Pause execution for a given number of milliseconds
 * @param  {String}   ms   Number of milliseconds to pause
 */
export function pause(ms: string): void {
  const intMs = parseInt(ms, 10);
  browser.pause(intMs);
}
