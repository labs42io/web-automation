// https://github.com/mozilla/geckodriver/blob/master/README.md#firefox-capabilities

export const capabilitiesFirefoxConfig = {
  'maxInstances': 1,
  'browserName': 'firefox',
  'moz:firefoxOptions': {
    args: [].concat(
      process.env.VNC_SUPPORT === 'true' ? [
        // When debugging with VNC support headless mode is not enabled
        // to allow viewing actions in the browser.
      ] : [

          '-headless',
        ]),
  },
  'acceptInsecureCerts': true,
  'cjson:metadata': {
    device: process.env.SELENIUM_VERSION,
  },
};
