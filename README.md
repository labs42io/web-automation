# Web Automation Framework

[![CircleCI](https://circleci.com/gh/labs42io/web-automation/tree/master.svg?style=svg)](https://circleci.com/gh/labs42io/web-automation/tree/master) 
[![CI](https://github.com/labs42io/web-automation/workflows/CI/badge.svg)](https://github.com/labs42io/web-automation/actions) 
[![Build Status](https://travis-ci.org/labs42io/web-automation.svg?branch=master)](https://travis-ci.org/labs42io/web-automation)  

Boilerplate project to write BDD tests with [Cucumber](https://cucumber.io/) and execute with [docker selenium](https://github.com/SeleniumHQ/docker-selenium).
Tests are written in an ordinary language that bridges the gap between business and technical people.
The docker selenium simplifies the setup and avoids any local installation of browser specific dependencies.

## Features

- Simple setup, no need for local preinstalled Selenium Grid and browser drivers
- Test with *Chrome* and *Firefox* with zero configuration
- Integrated with [WebdriverIO](https://webdriver.io/)
- BDD tests with [Cucumber](https://cucumber.io/docs/cucumber/) and over 150 predefined steps
- Implement custom steps with [TypeScript](https://www.typescriptlang.org/)
- Support for debugging tests
- Possibility to visually see the execution in browser with *VNC*
- Detailed report generation ([example](https://wswebcreation.github.io/multiple-cucumber-html-reporter/browsers/index.html))
- Integration with CI tools

## Requirements

- To run *Firefox* and *Chrome* browsers with docker selenium you need:
  - `docker`
  - `docker-compose`

- Tests are executed with Node.js, requires:
  - `Node.js` version 10 or higher
  - `npm` version 6 or higher

## Quick start

1. Install dependencies required to run the tests:

```sh
npm install
```

2. Start docker selenium containers with `docker-compose`:

```sh
# starts the selenium hub and browser nodes in docker containers
npm run selenium
```

3. Run the tests and view the report:

```sh
# run tests and open the report
npm run test
```

To stop all the docker containers from step 2:

```sh
npm run selenium:stop
```

Note that selenium containers can be started once and then used across multiple sessions of running and debugging tests.

## Test examples

|File||
|--|--|
|`./src/features/google.search.feature`|An example of testing the Google search|
|`./src/features/sample.snippets.feature`|Samples of using the existing test snippets. Credits [Christian Bromann](https://github.com/christian-bromann)|

## Adding tests

Tests are written using [Gherkin syntax](https://cucumber.io/docs/gherkin/) in a fashion that can be used as feature documentation:

```gherkin
# This is a single line comment
Feature: Performing a Google Search

    As a user on the Google search page
    I want to search for Selenium-Webdriver
    Because I want to learn more about it

    Background:
        Given I open the url "https://google.com"

    Scenario: Searching for Selenium Webdriver
        When I set "Selenium Webdriver" to the inputfield "[name=q]"
        And  I press "Enter"
        Then I expect that element "#search" becomes displayed
```

All tests should be located in `./src/features/*` directory with extension `.feature` (configured in `./config/tests.config.ts`).  
For a list of predefined and supported steps see files:
- `./src/steps/given.ts` 
- `./src/steps/when.ts` 
- `./src/steps/then.ts`.  

The steps are inspired from [cucumber-boilerplate](https://github.com/webdriverio/cucumber-boilerplate#list-of-predefined-steps) repository.

### Implementing custom steps
There are over 150 predefined steps, but in case you need an extra step you can add it in one of the `./src/steps` file.  
The snippets are defined using regular expressions. It allows to implement powerful and complex sentences.
Everything that's within `"([^"]*)?"` gets captured and appended to the callback.  
To access browser functionality, reference the global variable `browser` which is a *WebdriverIO* browser instance.
See the [documentation](https://webdriver.io/docs/api.html) for a list of supported methods.  
Assertions are written using [chai](https://www.chaijs.com/). 

### Browser specific tests
To run a test against a specific browser use predefined [tags](https://cucumber.io/docs/cucumber/api/#tags):

```gherkin
Feature: Performing a Google Search

    ...

    # This scenario will run only in Chrome browser
    @OnlyChrome
    Scenario: Searching in chrome browser
    ...

    # This scenario will run only in Firefox browser
    @OnlyFirefox
    Scenario: Searching in Firefox browser
    ...
```

### Pending tests

To skip a test, use the `@Pending` tag:
```gherkin
Feature: Performing a Google Search

    ...

    # This scenario will be skipped
    @Pending
    Scenario: Searching for WebdriverIO
    ...
```

### Verbose tests

Currently, a screenshot is attached only for a failing test. In case you want screenshots for a test regardless of its completion status,
use the `@Verbose` tag:

```gherkin
Feature: Performing a Google Search

    ...

    # A screenshot and additional test details will be attached to the report
    @Verbose
    Scenario: Searching for WebdriverIO
    ...
```

### Hooks

Hooks are blocks of code that can run at various points in the Cucumber execution cycle. It is possible to write conditional hooks.  
See examples of scenario hooks in `./src/steps/hooks.ts`. For a more advanced usage, configure hooks in 
`./config/hooks.config.ts`.  

You can customize existing hooks or implement your own.
See the WebdriverIO [documentation]((https://webdriver.io/docs/options.html#hooks)) about hooks. 

## Configurations

### Environment variables 

The configurable options are set in the `.env` file.

|Variable|Usage|
|--|--|
|`SELENIUM_VERSION`|Configure the version of selenium hub and nodes. Change this version if you want to run tests against a specific browser version. See the [list](https://github.com/SeleniumHQ/docker-selenium/releases) of available selenium releases and browser versions.|
|`SCREEN_WIDTH` `SCREEN_HEIGHT`|Configure browser window size.|

### WebdriverIO options

WebdriverIO specific [options](https://webdriver.io/docs/options.html) are all in `./config` directory.  
For example, to configure a default url change the `baseUrl` option in `./config/index.ts`:  

```typescript
export const config = {
  runner: 'local',
  baseUrl: 'https://webdriver.io',
  ...
```

## Debugging tests

There is a `./.vscode/launch.json` file that has a debugger configuration for *Visual Studio Code*, but you can enable debugging in any other editor
that supports integration with Node.js debugger.  

To debug a single feature file:

- *Prerequisites*: selenium containers are running (`npm run selenium`)

- The `.feature` file to test is active in VS Code

- From VS Code *Run and Debug* menu select the *Debug current test* option

The test will start and run only the current file. Once started you can navigate to any `.ts` file and place a breakpoint.  

To debug all files follow the same steps but use the *Debug all tests* option.

## VNC support

In some cases, you might need to visually see the execution in the browser. That is possible thanks to docker selenium debug images that 
have `XVFB` and `VNC` server installed. Note that debug images are slower and are intended only for development mode.  

### Prerequisites

Download on your machine the [VNC viewer](https://www.realvnc.com/en/connect/download/viewer/).

### Selenium Debug containers

If you already have docker selenium containers running, stop them:

```sh
npm run selenium:stop
```

Start selenium *debug* containers that enable the VNC support:

```sh
# starts the selenium containers with VNC support
npm run selenium:vnc
```

### VNC connection options  

|Browser|Connection options|
|--|--|
|**Chrome**|`127.0.0.1:5900`|
|**Firefox**|`127.0.0.1:5901`|


Now you can connect and enter the remote session.  

### Running tests

Tests by default run in *headless* mode so that a browser window is not visually created.
To run the tests with enabled browser window:

```sh
# runs the tests without headless option
npm run test:vnc
```

Note that even if you started selenium with VNC support, you need to run the `test:vnc` command to see the browsers visually.

Debugging with VNC support is also possible. If you're using *Visual Studio Code* there are `VNC Debug current test` and 
`VNC Debug all tests` debugging configurations that work similar to configurations described in [Debugging tests](#debugging-tests) section.  

To stop the debug containers use the same command:

```sh
npm run selenium:stop
```

## CI integration

Integration with a CI tool is easy if it supports `docker` and `docker-compose` tools.  
There is a *Dockerfile* to build an image that bundles Node.js, npm and tests.
The `docker-compose.ci.yml` configures all the dependencies required to run the tests in containers:

```sh
docker-compose -f docker-compose.ci.yml up --abort-on-container-exit --exit-code-from node
```

There are `npm` scripts to avoid running long commands:

```sh
# only builds the Dockerfile image
npm run ci:build

# runs the tests in containers
npm run ci
```

|CI|Status|Config|Artifacts|
|--|--|--|--|
|**CircleCI**| [![CircleCI](https://circleci.com/gh/labs42io/web-automation/tree/master.svg?style=svg)](https://circleci.com/gh/labs42io/web-automation/tree/master) |`./.circleci/default.yml`|Report uploaded as artifacts that can be viewed directly in the browser.|
|**Github Actions**| [![CI](https://github.com/labs42io/web-automation/workflows/CI/badge.svg)](https://github.com/labs42io/web-automation/actions) |`./.github/workflows/main.yml`|Report files available as a downloadable zip in artifacts. |
|**TravisCI**| [![Build Status](https://travis-ci.org/labs42io/web-automation.svg?branch=master)](https://travis-ci.org/labs42io/web-automation) |`./.travis.yml`|You need to configure Amazon S3 account to enable artifacts. |

## License

[MIT](LICENSE)
