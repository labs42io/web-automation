import { capabilitiesChromeConfig } from './chrome.config';
import { capabilitiesFirefoxConfig } from './firefox.config';
import { hooksConfig } from './hooks.config';
import { loggingConfig } from './logging.config';
import { reportingConfig } from './reporting.config';
import { serverConfig } from './server.config';
import { testsConfig } from './tests.config';

export const config = {
  runner: 'local',
  baseUrl: 'http://localhost',

  framework: 'cucumber',

  maxInstances: process.env.DEBUG_TESTS === 'true' ? 1 : 2,
  capabilities: [
    capabilitiesChromeConfig,
    capabilitiesFirefoxConfig,
  ],

  services: [],

  ...serverConfig,
  ...testsConfig,
  ...loggingConfig,
  ...reportingConfig,
  ...hooksConfig,
};
