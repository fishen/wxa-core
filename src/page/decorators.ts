import { selectObject } from "../utils/object";
import { BasePage } from "./page";
import { IPage } from "./page.interface";

declare function Page(options: IPage): void;

/**
 * 页面装饰器
 */
export function page(constructor: new (...args: any[]) => BasePage & IPage) {
  const instance = new constructor();
  const result = selectObject(instance, (key) => key !== "constructor");
  Page(result);
}
