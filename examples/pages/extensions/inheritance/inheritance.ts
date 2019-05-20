import { page, Page } from 'wxa-core';

export class MyBasePage<T=any> extends Page<T> {
  onLoad(options: any) {
    console.log('inheritance.', options);
    // do something;
  }
}

@page()
export class InheritancePage extends MyBasePage {
  onLoad(options: Record<string, string>) {
    super.onLoad(options);
    console.log('inheritance page loaded.');
  }
}