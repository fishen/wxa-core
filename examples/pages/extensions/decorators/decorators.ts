import { page, Page } from 'wxa-core';

function preLoad(_target: any, _name: string, descriptor: PropertyDescriptor) {
  const raw = descriptor.value;
  descriptor.value = function (options: any) {
    console.log('decorators.', options);
    // do something;
    raw.call(this, options);
  }
}

@page()
export class MyPage extends Page {
  @preLoad
  onLoad(_options: Record<string, string>) {
    console.log('decorators page loaded.');
  }
}