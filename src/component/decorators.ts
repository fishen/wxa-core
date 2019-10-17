import { initailComputedData, overrideSetData, setProperties } from "../common";
import { BINDS, COMPUTED_DATA, HOOK_FUNC, LIFETIMES, METHODS, OBSERVERS, PAGE_LIFETIMES } from "../constants";
import { includes } from "../utils/array";
import { selectObject } from "../utils/object";
import { IComponentOptions } from "./component.options";

/**
 * 将当前成员标记为组件的方法
 */
export function method(target: any, name: string, descriptor: PropertyDescriptor) {
  if (descriptor && typeof descriptor.value === "function") {
    Reflect.defineMetadata(name, null, target, METHODS);
  } else {
    console.warn(`The method decorator can only be used in function members.`);
  }
}

/**
 * 组件数据字段监听器，用于监听 properties 和 data 的变化。
 * 从小程序基础库版本 2.6.1 开始支持。
 * @param fields 要监听字段，比如 'some.subfiel',仅使用通配符'**'可以监听全部。
 */
export function observer(fields: string) {
  return function(target: any, name: string) {
    Reflect.defineMetadata(name, fields, target, OBSERVERS);
  };
}

/**
 * 组件装饰器
 * @param options 组件装饰器参数
 */
export function component<T = any>(options?: IComponentOptions<T>) {
  options = options || {};
  return function(constructor: new (...args: any[]) => any) {
    const instance: any = new constructor();
    Object.assign(instance, options);
    const target = constructor.prototype;
    const bindProperties = setProperties(instance, target);
    // set methods
    const methods = bindProperties(METHODS);
    const computes = Reflect.getMetadataKeys(target, COMPUTED_DATA);
    instance.methods = computes.reduce((result, key) => {
      result[`_computed_${key}_`] = instance[key];
      return result;
    }, instance.methods || {});
    initailComputedData(instance, computes, options);
    // set observers
    const observers = bindProperties(OBSERVERS, (key) => Reflect.getMetadata(key, target, OBSERVERS));
    const binds = Reflect.getMetadataKeys(target, BINDS);
    if (binds.length || computes.length) {
      [instance, instance.lifetimes].forEach((item) => {
        if (!item) { return; }
        const { created } = item;
        item.created = function() {
          overrideSetData.call(this, computes);
          binds.forEach((key: string) => this[key] = instance[key]);
          typeof created === "function" && (created.call(this));
        };
      });
      if (Reflect.getMetadataKeys(target, LIFETIMES).length) {
        Reflect.defineMetadata("created", null, target, LIFETIMES);
      }
    }
    const lifetimes = bindProperties(LIFETIMES);
    const pageLifetimes = bindProperties(PAGE_LIFETIMES);
    let cobj = selectObject(instance, (key) => !includes(["constructor", "ctor"], key)
      && !includes(computes, key)
      && !includes(methods, key)
      && !includes(observers, key)
      && !includes(lifetimes, key)
      && !includes(pageLifetimes, key));
    const hook = (component as any)[HOOK_FUNC];
    cobj = typeof hook === "function" ? hook(cobj) : cobj;
    cobj = typeof options.ctor === "function" ? options.ctor(cobj) : cobj;
    typeof Component === "function" && Component(cobj);
  };
}

/**
 * 注册全局组件钩子函数
 */
component.registerHook = function(fn: (obj: any) => object) {
  (component as any)[HOOK_FUNC] = fn;
};

/**
 * 为组件绑定自定义数据
 */
export function bind(target: any, name: string) {
  Reflect.defineMetadata(name, null, target, BINDS);
}

/**
 * 添加计算属性
 */
export function computed() {
  return function(target: any, name: string, descriptor: PropertyDescriptor) {
    Reflect.defineMetadata(name, null, target, COMPUTED_DATA);
  };
}

/**
 * 声明组件生命周期函数
 */
export function lifetime(target: any, name: string, descriptor: PropertyDescriptor) {
  Reflect.defineMetadata(name, null, target, LIFETIMES);
}

/**
 * 声明组件所在页面的生命周期函数
 */
export function pageLifetime(target: any, name: string, descriptor: PropertyDescriptor) {
  Reflect.defineMetadata(name, null, target, PAGE_LIFETIMES);
}
