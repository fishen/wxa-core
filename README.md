<!-- TOC -->

- [WXA-CORE](#wxa-core)
- [Installation](#installation)
- [Getting started](#getting-started)
- [App](#app)
- [Page](#page)
    - [@computed](#computed)
- [Component](#component)
    - [@bind](#bind)
    - [@computed](#computed-1)
    - [@lifetime](#lifetime)
    - [@method](#method)
    - [@observer(fields: string)](#observerfields-string)
    - [@pageLifetime](#pagelifetime)
- [Global hooks](#global-hooks)
    - [Page Hook](#page-hook)
        - [page.registerHook(fn : (obj : object) => object) : void](#pageregisterhookfn--obj--object--object--void)
    - [Component Hook](#component-hook)
        - [component.registerHook(fn : (obj: object) => object) : void](#componentregisterhookfn--obj-object--object--void)
- [Also see](#also-see)
- [Update Logs](#update-logs)

<!-- /TOC -->
# WXA-CORE
Build and use WeChat miniprogram core function with typescript. 

# Installation

>`$ npm install --save wxa-core`
# Getting started
To enable experimental support for decorators, you must enable the **experimentalDecorators** compiler option either on the command line or in your tsconfig.json, in addition, set **strictPropertyInitialization** to false is required.
```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "strictPropertyInitialization": false
  }
}
```

# App
Use decorator **app** to mark a app class which extends from **App**.
```js
// app.ts
import { App, app } from "wxa-core";

@app({
  ctor(obj: any){
    // override app's construct object
    // obj.xxx=xxx;
    return obj;
  }
})
export class MyApp extends App {
  onLaunch() {
    console.log('app launched.');
  }
}
```
# Page
Use decorator **page** to mark a page class which extends from **Page**. Page has a generic parameter (default is *any*) indicating the data type of current page.
> The `ctor` function is executed after the `registerHook` function.
```js
// pages/index/index.ts
import { page, Page } from 'wxa-core';

@page({
    ctor(obj: any){
      // override page's construct object
      // obj.xxx=xxx;
      return obj;
    }
})
export class IndexPage extends Page {
  onLoad() {
    console.log('index page loaded.');
  }
}
```
## @computed
Add computed properties based on data, it will automatically calculate the value in the following scenarios:
  * Before page initialization;
  * After calling the setData method;
> The `ctor` function is executed after the `registerHook` function.

>:warning: Accessing the internal members of the page before the page is initialized is invalid, such as 'this.route'.
```js
import { page, computed, Page } from "wxa-core";

@page
export class MyPage extends Page {
  data = { amount: 100 };
  @computed()
  currency() {
    return this.data.amount.toFixed(2);
  }
  onLoad() {
    console.log(this.route, this.data);
  }
}
```
output:
```js
{amount: 100, currency: "100.00"}
```

# Component
Use decorator **component** to mark a component class which extends from **Component**. Component has a generic parameter (default is *any*) indicating the data type of current component.
```js
@component({
  ctor(obj: any){
    // override component's construct object
    // obj.xxx=xxx;
    return obj;
  },
  lifetimes:{}, //recommend to use decorator lifetime
  observers:{}, //recommend to use decorator observer
  options:{},
  pageLifetimes:{}, //recommend to use decorator pageLifetime
  properties:{},
})
export class MyComponent extends Component {}
```
## @bind
By default, custom component's properties will be lost, using the **@bind** decorator to maintain property bindings.
```js
@component()
export class MyComponent extends Component {
  @bind
  customProp:string;
  @bind
  customFunc(){}
}
```
## @computed
Add computed properties based on data and properties, it will automatically calculate the value in the following scenarios:
  * Before component initialization;
  * After calling the setData method;
  * After any property receives an external update;

>:warning: Accessing the internal members of the component before the component is initialized is invalid, such as 'this.setData'.
```js
import { component, computed, Component } from "wxa-core";

@component()
export class MyComponent extends Component {
  data = {
    firstName: "Lei",
    lastName: "Lee"
  };
  @computed()
  fullName() {
    const { firstName, lastName } = this.data;
    return `${firstName} ${lastName}`;
  }
  attached() {
    console.log(this.data);
  }
}
```
output:
```
{firstName: "Lei", lastName: "Lee", fullName: "Lei Lee"}
```
## @lifetime
Declare the lifecycle functions of components that are automatically triggered at specific points in time or when encountering special frame events. For more details, please refer to [here](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html).
>:warning:Requires miniprogram's base library version 2.2.3+
```js
import { component, lifetime, Component } from "wxa-core";

@component()
export class MyComponent extends Component {
  @lifetime
  attached() {
    console.log(this.data);
  }
}
```
## @method
We use the **method** decorator to mark as the component's method.

```js
// components/hint/hint.ts
import { Component, component, method } from "wxa-core";

@component({
  properties: {
    message: String
  }
})
export class HintComponent extends Component<{ message: string }> {
  attached() {
    console.log('hint component attached.')
  }
  @method
  alert() {
    wx.showToast({ title: this.data.message })
  }
}
```
## @observer(fields: string)
Data listeners can be used to listen for and respond to changes in any properties and data field. For more details, please refer to [here](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/observer.html).
>:warning:Requires miniprogram's base library version 2.6.1+
```js
// components/hint/hint.ts
import { Component, component, observer } from "wxa-core";

@component({
  properties: {
    message: String
  }
})
export class HintComponent extends Component<{ message: string }> {
  attached() {
    console.log('hint component attached.')
    const message = 'Hi, message has been changed!';
    setTimeout(() => this.setData({ message }), 3000);
  }
  @observer('message')
  messageChanged(msg: string) {
    console.log('message changed:', msg);
    // others
  }
}
```
output:
```
app launched.
hint.ts:21 message changed: Hello World!
hint.ts:11 hint component attached.
index.ts:9 index page loaded.
hint.ts:21 message changed: Hi, message has been changed!
```
## @pageLifetime
Declare the lifecycle function of the page where the component is located. For more details, please refer to [here](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html).
>:warning:Requires miniprogram's base library version 2.2.3+
```js
import { component, pageLifetime, Component } from "wxa-core";

@component()
export class MyComponent extends Component {
  @pageLifetime
  show() {
    console.log('The show event is triggered on the page');
  }
}
```
# Global hooks
## Page Hook
### page.registerHook(fn : (obj : object) => object) : void
Register a global hook function before invode method `Page()`;
```js
import { page } from "wxa-core";

page.registerHook((obj) => {
  console.log(obj);
  return obj;
})
```
## Component Hook
### component.registerHook(fn : (obj: object) => object) : void
Register a global hook function before invode method `Component()`;
```js
import { component } from "wxa-core";

component.registerHook((obj) => {
  console.log(obj);
  return obj;
})
```
# Also see
[mp-event](https://www.npmjs.com/package/mp-event): a simple event subscription publishing system implementation;

[mp-i18n](https://www.npmjs.com/package/mp-i18n): a cross-platform i18n library for muti-miniprograms (wx、alipay、baidu、tt);

[mp-modal](https://www.npmjs.com/package/mp-modal): a helper cross-platform tool for miniprograms that can more convenient to use modal components.

[mp-mem](https://www.npmjs.com/package/mp-mem): a lightweight memoize library that can be used on both normal functions and class methods;

[auto-mapping](https://www.npmjs.com/package/auto-mapping): map and convert objects automatically in typescript;
# Update Logs
* 2.1.0
  * added global function `registerHook` for page and componet.
  * remove package *reflect-metadata*;
* 2.0.0
  * added custom constructor option *ctor* for app, page and component decorator.
  * added decorator *computed* for component and page;
  * imported *reflect-metadata*;
  * renamed BaseApp BasePage BaseComponent to App Page Component;
  * changed decorators *app* and *page* to factory form.
  * added mocha test framework for current module.
  * added getTabBar api's prompt.
  * added Chinese's document.
* 1.2.1
  * added decorator *bind* for component;
* 1.2.0
  * removed interface(IApp, IComponent, IPage);
  * added base app class *BaseApp*;
* 1.1.1
  * fixed a problem where a function is defined as a property in a component
* 1.1.0
  * remove cpage and ccomponent decorators.
* 1.0.2
  * added tslint;
  * removed source code to reduce the module size;
  * added index.d.ts file;
* 1.0.1
  * added *multipleSlots* option to component options;
  * added *observer* decorator for componet's data listener;

