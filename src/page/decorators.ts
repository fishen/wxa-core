import { selectObject } from "../utils/object";

declare function Page(options: any): void;

/**
 * 页面装饰器
 */
export function page(constructor: new (...args: any[]) => any) {
  const instance = new constructor();
  const result = selectObject(instance, (key) => key !== "constructor");
  Page(result);
}
