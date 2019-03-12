# wxa-core
Build and use WeChat miniprogram core function with typescript.

# Installation

>`$ npm install --save wxa-core`

# Getting started

To enable experimental support for decorators, you must enable the **experimentalDecorators** compiler option either on the command line or in your tsconfig.json, in addition, set **strictPropertyInitialization** to false is required.
```
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "strictPropertyInitialization": false
  }
}
```

# App
Use decorator **app** to mark a app class which implements interface **IApp**.
```
// app.ts
import { IApp, app } from "wxa-core";

@app
export class MyApp implements IApp {
  onLaunch() {
    console.log('app launched.');
  }
}
```

# Page
Use decorator **page** to mark a page class which extends from **BasePage** and implements interface **IPage**.
>BasePage has a generic parameter (default is *any*) indicating the data type of current page.
```
// pages/index/model.ts
export class IndexModel {
    message = 'Hello World!';
}
```

```
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
```

# Component
Use decorator **component** to mark a component class which extends from **BaseComponent** and implements interface **IComponent**.
> BaseComponent has a generic parameter (default is *any*) indicating the data type of current component.
## @method
The properties defined in component param, in addition, we use the **method** decorator to mark as the component's method.

```
// components/hint/hint.ts
import { IComponent, BaseComponent, component, method } from "wxa-core";

@component({
  properties: {
    message: String
  }
})
export class HintComponent extends BaseComponent<{ message: string }> implements IComponent {
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
Data listeners can be used to listen for and respond to changes in any properties and data field.
Support from the miniprogram base library version **2.6.1**.
```
// components/hint/hint.ts
import { IComponent, BaseComponent, component, observer } from "wxa-core";

@component({
  properties: {
    message: String
  }
})
export class HintComponent extends BaseComponent<{ message: string }> implements IComponent {
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
# Custom Extensions

There are at least three ways to extend pages and components.

## Inheritance 
First of all, we can extend our pages and components using standard object-oriented inheritance which call the base method by super.
> Be careful when used in asynchronous mode.
```
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
```

## Decorators
Secondly, we can add decorators for local extension
```
import { page, BasePage, IPage } from 'wxa-core';

function preLoad(_target: any, _name: string, descriptor: PropertyDescriptor) {
  const raw = descriptor.value;
  descriptor.value = function (options: any) {
    console.log('decorators.', options);
    // do something;
    raw.call(this, options);
  }
}

@page
export class MyPage extends BasePage implements IPage {
  @preLoad
  onLoad(_options: Record<string, string>) {
    console.log('decorators page loaded.');
  }
}
```

## Overrides
At last, we can override pages and components with a custom decorator.
```
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
```
# Update Logs
* 1.0.2
  * add tslint;
  * remove source code to reduce the module size;
  * add index.d.ts file;
* 1.0.1
  * add *multipleSlots* option to component options;
  * add *observer* decorator for componet's data listener;

