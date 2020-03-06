export const testsConfig = {
  specs: [
    './src/features/**/*.feature',
  ],
  exclude: [
  ],

  // If you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don't bail, run all tests).
  bail: 0,

  // Default timeout for all waitFor* commands.
  waitforTimeout: 20000,

  // Default timeout in milliseconds for request
  // if Selenium Grid doesn't send response
  connectionRetryTimeout: 90000,

  // Default request retries count
  connectionRetryCount: 3,
};
