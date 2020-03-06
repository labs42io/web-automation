import { expect } from 'chai';

/**
 * Set the text of the current prompt
 * @param  {String}   modalText The text to set to the prompt
 */
export function setPromptText(modalText: string): void {
  try {
    browser.sendAlertText(modalText);
  } catch (e) {
    expect.fail('A prompt was not open when it should have been open');
  }
}
