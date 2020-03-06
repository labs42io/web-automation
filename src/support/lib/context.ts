import cucumberJson from 'wdio-cucumberjs-json-reporter';

export function addText(value: string): void {
  cucumberJson.attach(value);
}

export function addObject<T extends object>(value: T): void {
  cucumberJson.attach(value, 'application/json');
}

export function addScreenshot(): void {
  cucumberJson.attach(browser.takeScreenshot(), 'image/png');
}
