import { selectObject } from '../../utils/object';
import { IPage } from './page.interface';
import { BasePage } from './page';

declare function Page(options: IPage): void;

/**
 * 自定义页面装饰器
 * custom decorator to override page members.
 * @param cb 自定义函数用来修改当前页面成员 override function
 */
export function cpage<P = BasePage>(cb?: (page: P & IPage) => any) {
  return function (constructor: new (...args: any[]) => P & IPage) {
    const instance = new constructor();
    const page = typeof cb === 'function' ? cb(instance) : instance;
    const result = selectObject(page, key => key !== 'constructor');
    Page(result);
  };
}

/**
 * 页面装饰器
 * page decorator
 */
export function page(constructor: new (...args: any[]) => BasePage & IPage) {
  return cpage()(constructor);
}
