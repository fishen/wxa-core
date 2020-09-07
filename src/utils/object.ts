
declare type Predicate<T> = (val: T) => boolean;

/**
 * 遍历对象成员，获取对象符合条件的成员名称
 * @param object 要遍历的对象
 * @param filter 筛选条件
 */
export function keysOf<T = any>(object: T, filter?: Predicate<string>): string[] {
    if (!object) { return []; }
    const result: string[] = [];
    let prototype = Object.getPrototypeOf(object);
    const notexsits = (key: string) => result.indexOf(key) < 0;
    filter = typeof filter === 'function' ? key => notexsits(key) && filter(key) : notexsits;
    while (prototype && prototype !== Object.prototype) {
        Object.getOwnPropertyNames(prototype).filter(filter).forEach(name => result.push(name));
        prototype = Object.getPrototypeOf(prototype);
    }
    return result;
}

/**
 * 根据条件从一个对象中选择部分属性组成一个新的对象
 * @param obj 要投影的对象
 * @param filter 要过滤的条件，可以是函数或者是包含键名的字符串数组
 */
export function selectObject<T extends Record<string, any> = any
>(obj: T, filter: string[] | Predicate<string>): Partial<T> {
    if (!obj) { return obj; }
    if (typeof filter === "function") {
        const items = keysOf(obj, filter);
        return selectObject(obj, items);
    } else if (Array.isArray(filter)) {
        return filter.reduce((result: any, key: string) => {
            if (key in obj) {
                result[key] = obj[key];
            }
            return result;
        }, {});
    } else {
        return obj;
    }
}
