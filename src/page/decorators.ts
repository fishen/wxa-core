import { initailComputedData, overrideSetData, setProperties } from "../common";
import { COMPUTED_DATA } from "../constants";
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
    if (typeof options.ctor === "function") {
      pobj = options.ctor(pobj);
      if (typeof pobj !== "object") {
        console.warn("Custom page's ctor must return a valid object.");
      }
    }
    typeof Page === "function" && Page(pobj);
  };
}
