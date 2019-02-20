/**
 * 组件基础类型，可以被页面和组件共用
 * Component data, including internal data and property values
 */
export abstract class Base<D> implements Record<string, any> {
  /**
   * 组件数据，包括内部数据和属性值
   */
  data: D;
  /**
   * Set data and perform view layer rendering
   * 设置data并执行视图层渲染
   * @param data 这次要改变的数据 The data to be changed this time
   * @param callback setData引起的界面更新渲染完毕后的回调函数 The callback function after setData been called.
   */
  setData: <K extends keyof D>(data: D | Pick<D, K> | Record<string, any>, callback?: () => void) => void;
}
