import { selectObject } from "../utils/object";
import { IAppOptions } from "./app.options";

export function app(options?: IAppOptions) {
    options = options || {};
    return function(constructor: new (...args: any[]) => any) {
        const instance = new constructor();
        let aobj = selectObject(instance, (key) => key !== "constructor");
        if (typeof options.ctor === "function") {
            aobj = options.ctor(aobj);
            if (typeof aobj !== "object") {
              console.warn("Custom app's ctor must return a valid object.");
            }
          }
        typeof App === "function" && App(aobj);
    };
}
