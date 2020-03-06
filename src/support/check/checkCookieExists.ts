import { expect } from 'chai';

/**
 * Check if a cookie with the given name exists
 * @param  {String}   name      The name of the cookie
 * @param  {String}   falseCase Whether or not to check if the cookie exists or not
 */
export function checkCookieExists(name: string, falseCase: string): void {
  const cookie = browser.getCookies([name]);

  if (falseCase) {
    expect(cookie.length).to.equal(
      0,
      `Expected cookie "${name}" not to exists but it does`,
    );
  } else {
    expect(cookie.length).to.not.equal(
      0,
      `Expected cookie "${name}" to exists but it does not`,
    );
  }
}
