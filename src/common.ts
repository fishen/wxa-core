import { includes } from "./utils/array";

/**
 * 获取更新的属性
 * @param computedProperties 需要计算的属性
 */
export function getUpdateData(computedProperties: string[]) {
    if (!Array.isArray(computedProperties)) { return {}; }
    this.data = this.data || {};
    const updates = computedProperties.reduce((result, key) => {
        const method = this[`_computed_${key}_`] || this.methods[`_computed_${key}_`];
        const value = method.call(this);
        if (value !== this.data[key]) {
            result[key] = value;
        }
        return result;
    }, {} as any);
    return updates;
}

/**
 * 初始化数据，将计算属性和Data合并
 * @param instance 页面或者组件实例
 * @param computedProperties 需要计算的属性
 * @param options 组件属性
 */
export function initailComputedData(instance: any, computedProperties: string[], options?: Record<string, any>) {
    instance.data = instance.data || {};
    const props: Record<string, any> = {};
    if (options && options.properties && Array.isArray(computedProperties)) {
        options.properties = Object.keys(options.properties).reduce((result, key) => {
            const property: any = options.properties[key];
            result[key] = property;
            if (includes([String, Number, Boolean, Array, Object, null], property)) {
                result[key] = { type: property };
            }
            if (typeof result[key] !== "object") { return result; }
            if (computedProperties.length) {
                const { observer, value } = result[key];
                props[key] = value;
                result[key].observer = function(...args: any[]) {
                    if (typeof observer === "function") {
                        observer.apply(this, args);
                    }
                    const dependentUpdates = getUpdateData.call(this, computedProperties);
                    this.setData(dependentUpdates);
                };
            }
            return result;
        }, {} as any);
    }
    Object.assign(instance.data, props);
    const updates = getUpdateData.call(instance, computedProperties);
    Object.assign(instance.data, updates);
}

/**
 * 重写setData方法
 * @param computedProperties 需要计算的属性
 */
export function overrideSetData(computedProperties: string[]) {
    if (Array.isArray(computedProperties)) {
        const originalSetData = this.setData;
        this.setData = function(data: any, callback: any) {
            originalSetData.call(this, data, callback);
            const updates = getUpdateData.call(this, computedProperties);
            if (updates && Object.keys(updates).length) {
                originalSetData.call(this, updates);
            }
        };
    }
}

/**
 * 为指定实例对像设置属性
 * @param instance
 * @param target
 */
export function setProperties(instance: any, target: any) {
    return function(symbol: symbol, keyFormatter?: (key: string) => string): string[] {
        const items = Reflect.getMetadataKeys(target, symbol);
        if (items.length) {
            const itemName = (symbol as any).description || String(symbol).slice(7, -1);
            instance[itemName] = items.reduce((result, key) => {
                const actualKey = keyFormatter ? keyFormatter(key) : key;
                result[actualKey] = instance[key];
                return result;
            }, instance[itemName] || {} as any);
        }
        return items;
    };
}
