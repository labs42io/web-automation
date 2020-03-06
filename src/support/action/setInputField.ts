import { checkIfElementExists } from '../lib/checkIfElementExists';

/**
 * Set the value of the given input field to a new value or add a value to the
 * current selector value
 * @param  {String}   method  The method to use (add or set)
 * @param  {String}   value   The value to set the selector to
 * @param  {String}   selector Element selector
 */
export function setInputField(method: 'add' | 'set', value: string, selector: string): void {
  const command = (method === 'add') ? 'addValue' : 'setValue';

  checkIfElementExists(selector, false, 1);
  $(selector)[command](value || '');
}
