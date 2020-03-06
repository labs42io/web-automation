/**
 * Select a option from a select element by it's index
 * @param  {String}   index      The index of the option
 * @param  {String}   obsolete   The ordinal indicator of the index (unused)
 * @param  {String}   selector Element selector
 *
 * @todo  merge with selectOption
 */
export function selectOptionByIndex(index: string, obsolete: string, selector: string): void {
  const optionIndex = parseInt(index, 10);
  $(selector).selectByIndex(optionIndex);
}
