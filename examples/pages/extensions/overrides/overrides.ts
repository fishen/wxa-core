import { page, BasePage, IPage } from 'wxa-core';

function mypage<T extends { new(...args: any[]): BasePage & IPage }>(constructor: T) {
  @page
  class OverrideClass extends constructor {
    onLoad(options: any) {
      console.log('overrides.', options);
      // do something;
      super.onLoad && super.onLoad(options);
    }
    onShow() {
      console.log(`page '${this.route}' showing.`);
      super.onShow && super.onShow();
    }
    
  }
  return OverrideClass;
}

@mypage
export class InheritancePage extends BasePage implements IPage {
  onLoad(_options: Record<string, string>) {
    console.log('overrides page loaded.');
  }
}

