
declare type PropertyType = String | Number | Boolean | Object | any[] | null;
export { PropertyType };
/**
 * 组件属性
 */
export interface IProperty<T> {
    /**
     * 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
     */
    observer?: (this: T, newVal: any, oldVal: any, changedPath: string) => void;
    /**
     * 属性的类型（可以指定多个）
     * 2.6.1
     */
    optionalTypes?: PropertyType[];
    /**
     * 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
     */
    type: PropertyType;
    /**
     * 属性初始值（可选），如果未指定则会根据类型选择一个
     */
    value?: any;
}
