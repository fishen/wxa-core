
declare type PropertyType = String | Number | Boolean | Object | Array<any> | null;
export { PropertyType };
/**
 * component property
 */
export interface IProperty<T> {
    /**
     * 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
     * type (required)
     */
    type: PropertyType;
    /**
     * 属性初始值（可选），如果未指定则会根据类型选择一个
     * initial value (optional), it will be selected according to the type if not specified.
     */
    value?: any;
    /**
     * 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
     * The function that is executed when the property is changed (optional) which can also be written as a method name string defined in the methods section, such as: '_propertyChange'
     */
    observer?: (this: T, newVal: any, oldVal: any, changedPath: string) => void;
}