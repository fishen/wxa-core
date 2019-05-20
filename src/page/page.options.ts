export interface IPageOptions {
    /**
     * 自定义页面构造函数，必须返回有一个有效的对象
     */
    ctor?: (object: object) => object;
}
