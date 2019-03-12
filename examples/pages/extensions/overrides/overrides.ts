import { BasePage, IPage, cpage } from 'wxa-core';

function mypage(constructor: any) {
  return cpage(p => {
    const { onLoad } = p;
    p.onLoad = function (options: Record<string, string>) {
      console.log('overrides.', options);
      // do something;
      onLoad && onLoad.call(this, options);
    };
    p.onShow = function () {
      console.log(`page '${this.route}' showing.`)
    };
    return p;
  })(constructor);
}

@mypage
export class InheritancePage extends BasePage implements IPage {
  onLoad(_options: Record<string, string>) {
    console.log('overrides page loaded.');
  }
}

