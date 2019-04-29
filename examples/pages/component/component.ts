import { component, method, BaseComponent, bind } from 'wxa-core';

@component({
  properties: {
    message: {
      type: String,
      observer: function (val) {
        console.log('message has changed', val);
      }
    }
  }
})
export class MyComponent extends BaseComponent {
  created() {
    console.log('created...');
    (this as any).__pageLifetimes__ = this.pageLifetimes;
  }
  @bind
  a = 1;
  attached() {
    console.log("attached...", this);
  }
  @method
  onReady() {
    console.log('ready...', this)
  }
  @method
  onLoad(options: any) {
    console.log('component page loaded', options, this);
  }
  @method
  onShow() {
    console.log('show...');
  }
  pageLifetimes = {
    show() {
      console.log('show');
    },
    hide() { console.log('hide'); },
    resize() { },
  }
}
