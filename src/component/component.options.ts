import { IProperty, PropertyType } from "./property";

/**
 * 组件装饰器参数
 */
export interface IComponentOptions<T> extends Record<string, any> {
    /**
     * 自定义组件构造函数，必须返回有一个有效的对象
     */
    ctor?: (object: Object) => object;
    /**
     * 组件生命周期声明对象
     * 2.2.3
     */
    lifetimes?: {
        /**
         * 在组件实例刚刚被创建时执行
         */
        created?: (this: T) => void,
        /**
         * 在组件实例进入页面节点树时执行
         */
        attached?: (this: T) => void,
        /**
         * 在组件在视图层布局完成后执行
         */
        ready?: (this: T) => void,
        /**
         * 在组件实例被移动到节点树另一个位置时执行
         */
        moved?: (this: T) => void,
        /**
         * 在组件实例被从页面节点树移除时执行
         */
        detached?: (this: T) => void,
        /**
         * 每当组件方法抛出错误时执行
         */
        error?: (this: T, error: Object) => void,
    };
    /**
     * 组件数据字段监听器，用于监听 properties 和 data 的变化
     * 2.6.1
     */
    observers?: Record<string, (this: T, ...args: any[]) => void>;
    /**
     * 一些选项
     */
    options?: {
        /**
         * 在组件定义时的选项中启用多slot支持
         */
        multipleSlots?: boolean;
    };
    /**
     * 组件所在页面的生命周期声明对象
     * 2.2.3
     */
    pageLifetimes?: {
        /**
         * 组件所在的页面被展示时执行
         * 2.2.3
         */
        show?: (this: T) => void,
        /**
         * 组件所在的页面被隐藏时执行
         * 2.2.3
         */
        hide?: (this: T) => void,
        /**
         * 组件所在的页面尺寸变化时执行
         * 2.4.0
         */
        resize?: (this: T, size: Object) => void,
    };
    /**
     * 组件数据，包括内部数据和属性值（与 data 一致）
     */
    properties?: Record<string, IProperty<T> | PropertyType>;
}
