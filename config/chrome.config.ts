export const capabilitiesChromeConfig = {
  'maxInstances': 1,
  'browserName': 'chrome',
  'goog:chromeOptions': {
    args: [
      '--no-sandbox',
    ].concat(
      process.env.VNC_SUPPORT === 'true' ? [
        // When debugging with VNC support headless mode is not enabled
        // to allow viewing actions in the browser.
      ] : [
          '--headless',
          '--disable-gpu',
        ],
    ),
  },
  'cjson:metadata': {
    device: process.env.SELENIUM_VERSION,
  },
};
