export interface IAppOptions {
    /**
     * 自定义应用构造函数，必须返回有一个有效的对象
     */
    ctor?: (object: Object) => object;
}
