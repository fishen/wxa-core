import { selectObject } from "../utils/object";
import { BasePage } from "./page";

declare function Page(options: any): void;

/**
 * 页面装饰器
 */
export function page(constructor: new (...args: any[]) => BasePage) {
  const instance = new constructor();
  const result = selectObject(instance, (key) => key !== "constructor");
  Page(result);
}
