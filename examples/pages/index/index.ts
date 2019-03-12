// pages/index/index.ts
import { page, BasePage, IPage } from 'wxa-core';
import { IndexModel } from './model';

@page
export class IndexPage extends BasePage<IndexModel> implements IPage {
  data = new IndexModel();
  onLoad() {
    console.log('index page loaded.');
  }
}

