// pages/index/index.ts
import { page, Page, computed } from 'wxa-core';
import { IndexModel } from './model';

@page()
export class IndexPage extends Page<IndexModel> {
  data = new IndexModel();
  onLoad() {
    console.log('index page loaded.');
    setTimeout(() => {
      this.setData({ message: Math.random() });
    }, 3000);
  }
  @computed()
  message1() {
    console.log('message changed.');
    return this.data.message + "11111";
  }
}

