import { IProperty, PropertyType } from "./property.interface";

/**
 * 组件装饰器参数
 */
export interface IComponentOptions<T> extends Record<string, any> {
    /**
     * 组件数据，包括内部数据和属性值（与 data 一致）
     */
    properties?: Record<string, IProperty<T> | PropertyType>;
    /**
     * 一些选项
     */
    options?: {
        /**
         * 在组件定义时的选项中启用多slot支持
         */
        multipleSlots?: boolean;
    };
}
