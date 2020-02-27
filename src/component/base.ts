/**
 * 组件基础类型，可以被页面和组件共用
 * Component data, including internal data and property values
 */
export abstract class Base<D> implements Record<string, any> {
  /**
   * 执行关键帧动画
   * @since 2.9.0
   * @param selector 选择器（同 SelectorQuery.select 的选择器格式）
   * @param keyframes 关键帧信息
   * @param duration 动画持续时长（毫秒为单位）
   * @param callback 动画完成后的回调函数
   */
  public animate: (selector: string, keyframes: any[], duration: number, callback?: () => any) => any;
  /**
   * 清除关键帧动画
   * @since 2.9.0
   * @param selector 选择器（同 SelectorQuery.select 的选择器格式）
   * @param options 需要清除的属性，不填写则全部清除
   * @param callback 清除完成后的回调函数
   */
  public clearAnimation: (selector: string, options?: object, callback?: () => any) => any;
  /**
   * 创建一个 SelectorQuery 对象，选择器选取范围为这个组件实例内
   */
  public createSelectorQuery: () => any;
  /**
   * 创建一个 IntersectionObserver 对象，选择器选取范围为这个组件实例内
   */
  public createIntersectionObserver: () => any;
  /**
   * 组件数据，包括内部数据和属性值
   */
  public data: D;
  /**
   * 组件的文件路径
   */
  public is: string;
  /**
   * 节点id
   */
  public id: string;
  /**
   * 节点dataset
   */
  public dataset: string;
  /**
   * 返回页面标识符（一个字符串），可以用来判断几个自定义组件实例是不是在同一个页面内
   * @since 2.7.1
   */
  public getPageId: () => string;
  /**
   * 获取这个关系所对应的所有关联节点，参见 组件间关系
   */
  public getRelationNodes: (relationKey: string) => any;
  /**
   * 返回当前页面的 custom-tab-bar 的组件实例
   * @since 2.6.2
   */
  public getTabBar: () => any;
  /**
   * 立刻执行 callback ，其中的多个 setData 之间不会触发界面绘制（只有某些特殊场景中需要，如用于在不同组件同时 setData 时进行界面绘制同步）
   * @since 2.4.0
   */
  public groupSetData: (callback: () => void) => void;
  /**
   * 检查组件是否具有 behavior （检查时会递归检查被直接或间接引入的所有behavior）
   */
  public hasBehavior: (behavior: any) => boolean;
  /**
   * 使用选择器选择组件实例节点，返回匹配到的全部组件实例对象组成的数组
   */
  public selectAllComponents: (selector: string) => any[];
  /**
   * 选取当前组件节点所在的组件实例（即组件的引用者），返回它的组件实例对象（会被 wx://component-export 影响）
   * @since 2.8.2
   */
  public selectOwnerComponent: () => any;
  /**
   * 使用选择器选择组件实例节点，返回匹配到的第一个组件实例对象（会被 wx://component-export 影响）
   */
  public selectComponent: (selector: string) => any;
  /**
   * 设置data并执行视图层渲染
   * @param data 这次要改变的数据
   * @param callback setData引起的界面更新渲染完毕后的回调函数
   */
  public setData: <K extends keyof D>(data: D | Pick<D, K> | Record<string, any>, callback?: () => void) => void;
  /**
   * 触发事件，参见 组件事件
   */
  public triggerEvent: (name: string, detail?: object, options?: object) => void;
}
