import { selectObject } from "../utils/object";
import { BaseApp } from "./app";

declare function App(options: any): void;

export function app(constructor: new (...args: any[]) => BaseApp) {
    const instance = new constructor();
    const result = selectObject(instance, (key) => key !== "constructor");
    App(result);
}
