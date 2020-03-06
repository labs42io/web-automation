import { checkIfElementExists } from '../lib/checkIfElementExists';

/**
 * Perform an click action on the given element
 * @param  {String}   action  The action to perform (click or doubleClick)
 * @param  {String}   type    Type of the element (link or selector)
 * @param  {String}   selector Element selector
 */
export function clickElement(action: string, type: string, selector: string): void {
  const selector2 = (type === 'link') ? `=${selector}` : selector;
  const method = (action === 'click') ? 'click' : 'doubleClick';

  checkIfElementExists(selector2);

  $(selector2)[method]();
}
