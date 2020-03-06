/**
 * Wait for the given element to be enabled, displayed, or to exist
 * @param  {String}   selector                  Element selector
 * @param  {String}   ms                       Wait duration (optional, default 3000)
 * @param  {String}   falseState               Check for opposite state
 * @param  {String}   state                    State to check for (default
 *                                             existence)
 */
export function waitFor(selector: string, ms: string, falseState: string, state: string): void {
  // Maximum number of milliseconds to wait, default 3000
  const intMs = parseInt(ms, 10) || 3000;

  // Command to perform on the browser object
  let command = 'waitForExist';

  let boolFalseState = !!falseState;
  let parsedState = '';

  if (falseState || state) {
    parsedState = state.includes(' ')
      ? state.split(/\s/)[state.split(/\s/).length - 1]
      : state;

    if (parsedState) {
      command = `waitFor${parsedState[0].toUpperCase()}`
        + `${parsedState.slice(1)}`;
    }
  }

  if (typeof falseState === 'undefined') {
    boolFalseState = false;
  }

  $(selector)[command](intMs, boolFalseState);
}
