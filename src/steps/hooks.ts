import { After, Before, HookScenarioResult } from 'cucumber';
import { addObject, addScreenshot } from '../support/lib/context';

Before({ tags: '@OnlyChrome' }, () => {
  if (browser.capabilities.browserName !== 'chrome') {
    return 'skipped';
  }

  return undefined;
});

Before({ tags: '@OnlyFirefox' }, () => {
  if (browser.capabilities.browserName !== 'firefox') {
    return 'skipped';
  }

  return undefined;
});

After({ tags: '@Verbose' }, (scenario: HookScenarioResult) => {
  addObject({
    browser: {
      url: browser.getUrl(),
      title: browser.getTitle(),
    },
    duration: scenario.result.duration,
    status: scenario.result.status,
    error: scenario.result.exception,
  });

  addScreenshot();
});
