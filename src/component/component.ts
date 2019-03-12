import { Base } from "./base";
/**
 * 组件基础类型，包含组件所有可用的属性和方法
 */
export abstract class BaseComponent<D = any> extends Base<D> implements Record<string, any> {
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
   * 检查组件是否具有 behavior （检查时会递归检查被直接或间接引入的所有behavior）
   */
  public hasBehavior: (behavior: any) => boolean;
  /**
   * 触发事件，参见 组件事件
   */
  public triggerEvent: (name: string, detail?: object, options?: object) => void;
  /**
   * 创建一个 SelectorQuery 对象，选择器选取范围为这个组件实例内
   */
  public createSelectorQuery: () => any;
  /**
   * 创建一个 IntersectionObserver 对象，选择器选取范围为这个组件实例内
   */
  public createIntersectionObserver: () => any;
  /**
   * 使用选择器选择组件实例节点，返回匹配到的第一个组件实例对象（会被 wx://component-export 影响）
   */
  public selectComponent: (selector: string) => any;
  /**
   * 使用选择器选择组件实例节点，返回匹配到的全部组件实例对象组成的数组
   */
  public selectAllComponents: (selector: string) => any[];
  /**
   * 获取这个关系所对应的所有关联节点，参见 组件间关系
   */
  public getRelationNodes: (relationKey: string) => any;
  /**
   * 立刻执行 callback ，其中的多个 setData 之间不会触发界面绘制（只有某些特殊场景中需要，如用于在不同组件同时 setData 时进行界面绘制同步）
   */
  public groupSetData: (callback: () => void) => void;
}
