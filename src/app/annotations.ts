import { selectObject } from '../../utils/object';
import { IApp } from './app.interface';

declare function App(options: IApp): void;

export function app(constructor: new (...args: any[]) => IApp) {
    const instance = new constructor();
    const result = selectObject(instance, key => key !== 'constructor');
    App(result);
}