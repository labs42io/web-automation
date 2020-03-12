import { checkIfElementExists } from '../lib/checkIfElementExists';

/**
 * Check if the given element exists
 * @param  {String}   isExisting Whether the element should be existing or not (an or no)
 * @param  {String}   selector   Element selector
 */
export function checkElementExists(isExisting: string, selector: string): void {
  let falseCase = true;

  if (isExisting === 'an') {
    falseCase = false;
  }

  checkIfElementExists(selector, falseCase);
}
