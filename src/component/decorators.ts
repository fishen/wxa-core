import { selectObject } from "../utils/object";
import { IComponent } from "./component.interface";
import { IComponentOptions } from "./component.options.interface";

declare function Component(options: IComponent): void;

/**
 * 将当前成员标记为组件的方法
 */
export function method(target: any, name: string, descriptor: PropertyDescriptor) {
  target.methods = target.methods || {};
  target.methods[name] = descriptor.value;
}

/**
 * 组件数据字段监听器，用于监听 properties 和 data 的变化。
 * 从小程序基础库版本 2.6.1 开始支持。
 * @param fields 要监听字段，比如 'some.subfiel',仅使用通配符'**'可以监听全部。
 */
export function observer(fields: string) {
  return function(target: any, name: string, descriptor: PropertyDescriptor) {
    target.observers = target.observers || {};
    target.observers[fields] = descriptor.value;
  };
}

/**
 * 组件装饰器
 * @param options 组件装饰器参数
 */
export function component<T = any>(options?: IComponentOptions<T>) {
  return function(constructor: new (...args: any[]) => IComponent) {
    const instance = new constructor();
    const methods = (instance as any).methods || {};
    const result = selectObject(instance, (key) => key !== "constructor" && !(key in methods));
    Object.assign(result, options);
    Component(result);
  };
}
