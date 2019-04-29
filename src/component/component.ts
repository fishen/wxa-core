import { Base } from "./base";
/**
 * 组件基础类型，包含组件所有可用的属性和方法
 */
export abstract class BaseComponent<D = any> extends Base<D> implements Record<string, any> {
  /**
   * 类似于mixins和traits的组件间代码复用机制，参见 behaviors
   */
  public behaviors?: string[];
  /**
   * 组件间关系定义，参见 组件间关系
   */
  public relations?: object;
  /**
   * 组件接受的外部样式类，参见 外部样式类
   */
  public externalClasses?: string[];
  /**
   * 一些选项（文档中介绍相关特性时会涉及具体的选项设置，这里暂不列举）
   */
  public options?: object;
  /**
   * 组件生命周期声明对象，参见 组件生命周期
   */
  public lifetimes?: object;
  /**
   * 组件所在页面的生命周期声明对象，支持页面的 show 、 hide 等生命周期，参见 组件生命周期
   */
  public pageLifetimes?: object;
  /**
   * 定义段过滤器，用于自定义组件扩展，参见 自定义组件扩展
   */
  public definitionFilter?: () => void;
  /**
   * 组件生命周期函数，在组件实例刚刚被创建时执行，注意此时不能调用 setData ，参见 组件生命周期
   */
  public created?(): void;
  /**
   * 组件生命周期函数，在组件实例进入页面节点树时执行，参见 组件生命周期
   */
  public attached?(): void;
  /**
   * 组件生命周期函数，在组件布局完成后执行，参见 组件生命周期
   */
  public ready?(): void;
  /**
   * 组件生命周期函数，在组件实例被移动到节点树另一个位置时执行，参见 组件生命周期
   */
  public moved?(): void;
  /**
   * 组件生命周期函数，在组件实例被从页面节点树移除时执行，参见 组件生命周期
   */
  public detached?(): void;
}
