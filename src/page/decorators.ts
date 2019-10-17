import { initailComputedData, overrideSetData } from "../common";
import { COMPUTED_DATA, HOOK_FUNC } from "../constants";
import { includes } from "../utils/array";
import { selectObject } from "../utils/object";
import { IPageOptions } from "./page.options";

/**
 * 页面装饰器
 */
export function page(options?: IPageOptions) {
  options = options || {};
  return function(constructor: new (...args: any[]) => any) {
    const instance = new constructor();
    const target = constructor.prototype;
    const computes = Reflect.getMetadataKeys(target, COMPUTED_DATA);
    if (computes.length) {
      computes.forEach((key) => instance[`_computed_${key}_`] = instance[key]);
      initailComputedData(instance, computes);
      const { onLoad } = instance;
      instance.onLoad = function() {
        overrideSetData.call(this, computes);
        typeof onLoad === "function" && (onLoad.call(this));
      };
    }
    let pobj = selectObject(instance, (key) => key !== "constructor"
      && !includes(computes, key));
    const hook = (page as any)[HOOK_FUNC];
    pobj = typeof hook === "function" ? hook(pobj) : pobj;
    pobj = typeof options.ctor === "function" ? options.ctor(pobj) : pobj;
    typeof Page === "function" && Page(pobj);
  };
}
/**
 * 注册全局页面钩子函数
 */
page.registerHook = function(fn: (obj: any) => object) {
  (page as any)[HOOK_FUNC] = fn;
};
