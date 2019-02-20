import { page, BasePage, IPage } from 'wxa-core';

export class MyBasePage<T=any> extends BasePage<T> implements IPage {
  onLoad(options: any) {
    console.log('inheritance.', options);
    // do something;
  }
}

@page
export class InheritancePage extends MyBasePage implements IPage {
  onLoad(options: Record<string, string>) {
    super.onLoad(options);
    console.log('inheritance page loaded.');
  }
}