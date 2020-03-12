/**
 * Clear a given input field (placeholder for WDIO's clearValue)
 * @param  {String}   selector Element selector
 */
export function clearInputField(selector: string): void {
  $(selector).clearValue();
}
