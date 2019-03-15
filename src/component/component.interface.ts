export interface IComponent extends Record<string, any> {
  /**
   * 类似于mixins和traits的组件间代码复用机制，参见 behaviors
   */
  behaviors?: string[];
  /**
   * 组件间关系定义，参见 组件间关系
   */
  relations?: object;
  /**
   * 组件接受的外部样式类，参见 外部样式类
   */
  externalClasses?: string[];
  /**
   * 一些选项（文档中介绍相关特性时会涉及具体的选项设置，这里暂不列举）
   */
  options?: object;
  /**
   * 组件生命周期声明对象，参见 组件生命周期
   */
  lifetimes?: object;
  /**
   * 组件所在页面的生命周期声明对象，支持页面的 show 、 hide 等生命周期，参见 组件生命周期
   */
  pageLifetimes?: object;
  /**
   * 定义段过滤器，用于自定义组件扩展，参见 自定义组件扩展
   */
  definitionFilter?: () => void;
  /**
   * 组件生命周期函数，在组件实例刚刚被创建时执行，注意此时不能调用 setData ，参见 组件生命周期
   */
  created?(): void;
  /**
   * 组件生命周期函数，在组件实例进入页面节点树时执行，参见 组件生命周期
   */
  attached?(): void;
  /**
   * 组件生命周期函数，在组件布局完成后执行，参见 组件生命周期
   */
  ready?(): void;
  /**
   * 组件生命周期函数，在组件实例被移动到节点树另一个位置时执行，参见 组件生命周期
   */
  moved?(): void;
  /**
   * 组件生命周期函数，在组件实例被从页面节点树移除时执行，参见 组件生命周期
   */
  detached?(): void;
}
