export interface IComponent extends Record<string , any> {
  /**
   * 类似于mixins和traits的组件间代码复用机制，参见 behaviors
   * Similar to the code reuse mechanism between components of mixins and traits, see Behaviors
   * https://developers.weixin.qq.com/miniprogram/en/dev/framework/custom-component/behaviors.html
   */
  behaviors?: string[];
  /**
   * 组件生命周期函数，在组件实例刚刚被创建时执行，注意此时不能调用 setData ，参见 组件生命周期
   * The component lifecycle function which is executed when the component instance enters the page node tree. Note that setData cannot be called at this time
   */
  created?: () => void;
  /**
   * 组件生命周期函数，在组件实例进入页面节点树时执行，参见 组件生命周期	
   * The component lifecycle function which is executed when the component instance enters the page node tree
   */
  attached?: () => void;
  /**
   * 组件生命周期函数，在组件布局完成后执行，参见 组件生命周期
   * The component lifecycle function which is executed after the component layout is completed, at which point node information can be obtained (using SelectorQuery)
   */
  ready?: () => void;
  /**
   * 组件生命周期函数，在组件实例被移动到节点树另一个位置时执行，参见 组件生命周期
   * The component lifecycle function which is executed when the component instance is moved to another location in the node tree
   */
  moved?: () => void;
  /**
   * 组件生命周期函数，在组件实例被从页面节点树移除时执行，参见 组件生命周期
   * The component lifecycle function which is executed when the component instance is removed from the page node tree
   */
  detached?: () => void;
  /**
   * 组件间关系定义，参见 组件间关系
   * Definition of relationship between components, see Relationship between Components
   * https://developers.weixin.qq.com/miniprogram/en/dev/framework/custom-component/relations.html
   */
  relations?: object;
  /**
   * 组件接受的外部样式类，参见 外部样式类
   * The external style class accepted by components; see External Style Class
   * https://developers.weixin.qq.com/miniprogram/en/dev/framework/custom-component/wxml-wxss.html
   */
  externalClasses?: string[];
  /**
   * 一些选项（文档中介绍相关特性时会涉及具体的选项设置，这里暂不列举）
   * For some component options, see the description in other parts of the document
   */
  options?: object;
  /**
   * 组件生命周期声明对象，参见 组件生命周期
   * Component lifecycle declaration object, see component life cycle
   */
  lifetimes?: object;
  /**
   * 组件所在页面的生命周期声明对象，支持页面的 show 、 hide 等生命周期，参见 组件生命周期
   * The lifecycle declaration object of the page where the component is located, supporting the life cycle of show, hide, etc. see component life cycle.
   */
  pageLifetimes?: object;
  /**
   * 定义段过滤器，用于自定义组件扩展，参见 自定义组件扩展
   * Define segment filters for custom component extensions, see Custom component extensions
   */
  definitionFilter?: () => void;
}
