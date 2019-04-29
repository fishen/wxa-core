// pages/index/index.ts
import { page, BasePage } from 'wxa-core';
import { IndexModel } from './model';

@page
export class IndexPage extends BasePage<IndexModel> {
  data = new IndexModel();
  onLoad() {
    console.log('index page loaded.');
  }
}

