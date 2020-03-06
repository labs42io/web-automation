/**
 * Scroll the page to the given element
 * @param  {String}   selector Element selector
 */
export function scroll(selector: string): void {
  $(selector).scrollIntoView();
}
