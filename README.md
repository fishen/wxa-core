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
Use decorator **app** to mark a app class which extends from **BaseApp**.
```
// app.ts
import { BaseApp, app } from "wxa-core";

@app
export class MyApp extends BaseApp {
  onLaunch() {
    console.log('app launched.');
  }
}
```

# Page
Use decorator **page** to mark a page class which extends from **BasePage**.
>BasePage has a generic parameter (default is *any*) indicating the data type of current page.
```
// pages/index/model.ts
export class IndexModel {
    message = 'Hello World!';
}
```

```
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
```

# Component
Use decorator **component** to mark a component class which extends from **BaseComponent**.
> BaseComponent has a generic parameter (default is *any*) indicating the data type of current component.
## @bind
By default, custom component's properties will be lost, using the **@bind** decorator to maintain property bindings.
```
@component()
export class MyComponent extends BaseComponent {
  @bind
  customProp:string;
  @bind
  customFunc(){

  }
}
```
## @method
The properties defined in component param, in addition, we use the **method** decorator to mark as the component's method.

```
// components/hint/hint.ts
import { BaseComponent, component, method } from "wxa-core";

@component({
  properties: {
    message: String
  }
})
export class HintComponent extends BaseComponent<{ message: string }> {
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
import { BaseComponent, component, observer } from "wxa-core";

@component({
  properties: {
    message: String
  }
})
export class HintComponent extends BaseComponent<{ message: string }> {
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
# Update Logs
* 1.2.1
  * add decorator *bind* for componet;
* 1.2.0
  * remove interface(IApp, IComponent, IPage);
  * add base app class *BaseApp*;
* 1.1.1
  * fix a problem where a function is defined as a property in a component
* 1.1.0
  * remove cpage and ccomponent decorators.
* 1.0.2
  * add tslint;
  * remove source code to reduce the module size;
  * add index.d.ts file;
* 1.0.1
  * add *multipleSlots* option to component options;
  * add *observer* decorator for componet's data listener;

