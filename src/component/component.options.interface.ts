import { IProperty, PropertyType } from './property.interface';

/**
 * 组件装饰器参数
 * Component decorator parameter
 */
export interface IComponentOptions<T> {
    /**
     * 组件数据，包括内部数据和属性值（与 data 一致）
     * Component data, including internal data and property values (consistent with data)
     */
    properties?: Record<string, IProperty<T> | PropertyType>;
}