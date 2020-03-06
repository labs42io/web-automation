/**
 * Open the given URL
 * @param  {String}   type Type of navigation (url or site)
 * @param  {String}   page The URL to navigate to
 */
export function openWebsite(type: 'url' | 'site', page: string): void {
  const url = (type === 'url') ? page : browser.options.baseUrl + page;
  browser.url(url);
}
