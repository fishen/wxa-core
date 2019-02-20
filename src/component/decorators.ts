import { selectObject } from '../../utils/object';
import { IComponentOptions } from './component.options.interface';
import { IComponent } from './component.interface';
import { BaseComponent } from './component';

declare function Component(options: IComponent): void;

/**
 * 将当前成员标记为组件的方法
 * a decorator to mark current member as component's method.
 */
export function method(target: any, name: string, descriptor: PropertyDescriptor) {
  target.methods = target.methods || {};
  target.methods[name] = descriptor.value;
}

/**
 * 自定义装饰器
 * custom decorator to override component members.
 * @param cb 自定义函数用来修改当前组件成员 custom override function
 */
export function ccomponent<C = BaseComponent>(cb?: (component: C & IComponent) => any) {
  return function <T = any>(options?: IComponentOptions<T>) {
    return function (constructor: new (...args: any[]) => C & IComponent) {
      const instance = new constructor();
      const component = cb ? cb(instance) : instance;
      const methods = (instance as any).methods || {};
      const result = selectObject(component, key => key !== 'constructor' && !(key in methods));
      result.properties = options && options.properties;
      Component(result);
    };
  };
}

/**
 * 组件装饰器
 * component decorator
 * @param options 组件装饰器参数 component decorator parameter
 */
export function component<T = any>(options?: IComponentOptions<T>) {
  return ccomponent()(options);
}
