# wxa-core
基于typescript（以下简称ts）构建和使用微信小程序
# 安装
>`$ npm install --save wxa-core`
# 开始
:warning:2.0以上版本中引入了*reflect-metadata*模块，为了获得在小程序中的支持，请在入口文件(app.ts)顶部添加下面的代码：
```
// app.ts
declare const global: any; // 如果已经在d.ts文件中声明或者使用app.js时可以省略
global.Reflect = global.Reflect || Reflect;
```
为了支持装饰器，请在ts编译选项中设置**experimentalDecorators**为true，此外，还需要将**strictPropertyInitialization**设置为false.
```
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "strictPropertyInitialization": false
  }
}
```

# App
使用装饰器app来修饰我们的应用类，这个类从App派生。
```
// app.ts
import { App, app } from "wxa-core";

@app({
  ctor(obj: any){
    // 可以重写或者覆盖应用的构造属性，也可以查看或调试生成后的现象。
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
使用装饰器page来修饰我们的页面类，这个类从Page派生。Page类有一个默认为类型是any的泛型参数，表示当前页面的data属性类型。

>:heart: 可以使用ctor参数很方便的扩展组件或者页面，你唯一要做的事情就是返回一个构造对象。
```
// pages/index/index.ts
import { page, Page } from 'wxa-core';

@page({
    ctor(obj: any){
      // 可以重写或者覆盖页面的构造属性
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
装饰某一个函数，基于页面的data属性生成计算属性，属性名为函数名称，值为函数返回结果，它会自动在下面场景中重新计算值：
  * 在页面初始化之前
  * 调用setData方法之后

>:warning: 在计算属性方法当中访问系统内部的成员是无效的，比如‘this.route’,因为需要在页面初始化之前就要计算它们的值。
```
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
```
{amount: 100, currency: "100.00"}
```

# Component
使用装饰器component来修饰我们的组件类，这个类从Component派生。Component类有一个默认为类型是any的泛型参数，表示当前组件的data和properties属性类型。
```
@component({
  ctor(obj: any){
    // 可以重写或者覆盖组件的构造属性
    // obj.xxx=xxx;
    return obj;
  },
  lifetimes:{}, //推荐使用装饰器 lifetime
  observers:{}, //推荐使用装饰器 observer
  options:{},
  pageLifetimes:{}, //推荐使用装饰器 pageLifetime
  properties:{},
})
export class MyComponent extends Component {}
```
## @bind
默认情况下，组件的自定义成员（属性和方法）将会在构造后丢失，可以使用**bind**装饰器维持自定义成员的绑定。
```
@component()
export class MyComponent extends Component {
  @bind
  customProp:string;
  @bind
  customFunc(){}
}
```
## @computed
装饰某一个函数，基于页面的data和properties属性生成计算属性，属性名为函数名称，值为函数返回结果，它会自动在下面场景中重新计算值：
  * 组件初始化之前；
  * 调用setData方法之后；
  * property属性接收到外部的变更；

>:warning: 在计算属性方法当中访问组件内部的成员是无效的，比如‘this.is,因为需要在组件初始化之前就要计算它们的值。
```
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
声明组件的生命周期函数，这些函数在特殊的时间点或遇到一些特殊的框架事件时被自动触发。更多详情请查看[这里](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html).
>:warning:需要小程序基础库版本 2.2.3+
```
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
使用装饰器method声明组件的方法成员
```
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
声明数据监听器，数据监听器可以用于监听和响应任何属性和数据字段的变化，更多详情请查看[这里](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/observer.html).
>:warning:需要小程序基础库版本2.6.1+
```
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
声明组件所在页面的生命收起函数，更多详情请查看[这里](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html).
>:warning:需要小程序基础库版本 2.2.3+
```
import { component, pageLifetime, Component } from "wxa-core";

@component()
export class MyComponent extends Component {
  @pageLifetime
  show() {
    console.log('The show event is triggered on the page');
  }
}
```
# 升级日志
* 2.0.0
  * 为应用，组件和页面装饰器添加构造函数*ctor*用于自定义扩展。
  * 添加装饰器*computed*;
  * 引入*reflect-metadata*模块;
  * 重命名BaseApp BasePage BaseComponent为App Page Component;
  * 修改装饰器*app* and *page*为装饰器工厂模式；
  * 为当前模块添加mocha测试框架；
  * 新增了API getTabBar定义；

