/**
 * Handle a modal
 * @param  {String}   action    Action to perform on the modal (accept, dismiss)
 * @param  {String}   modalType Type of modal (alertbox, confirmbox, prompt)
 */
export function handleModal(action: 'accept' | 'dismiss', modalType: 'alertbox' | 'confirmbox' | 'prompt'): void {
  let command = `${action.slice(0, 1).toLowerCase()}${action.slice(1)}Alert`;

  // Alert boxes can't be dismissed, this causes Chrome to crash during tests
  if (modalType === 'alertbox') {
    command = 'acceptAlert';
  }

  browser[command]();
}
