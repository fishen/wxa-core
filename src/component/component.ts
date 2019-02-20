import { Base } from "./base";
/**
 * 组件基础类型，包含组件所有可用的属性和方法
 * The component base type, which contains all the properties and methods available to the component
 */
export abstract class BaseComponent<D = any> extends Base<D> implements Record<string, any> {
  /**
   * 组件的文件路径
   * File path of component
   */
  is: string;
  /**
   * 节点id
   * Node id
   */
  id: string;
  /**
   * 节点dataset
   * Node dataset
   */
  dataset: string;
  /**
   * 检查组件是否具有 behavior （检查时会递归检查被直接或间接引入的所有behavior）
   * Check if the component has behavior (when checking, all behaviors that are directly or indirectly introduced will be checked through recursive checking)
   */
  hasBehavior: (behavior: any) => boolean;
  /**
   * 触发事件，参见 组件事件
   * Trigger Event, see Component Event
   * https://developers.weixin.qq.com/miniprogram/en/dev/framework/custom-component/events.html
   */
  triggerEvent: (name: string, detail?: object, options?: object) => void;
  /**
   * 创建一个 SelectorQuery 对象，选择器选取范围为这个组件实例内
   * Create a SelectorQuery object with a selector selection within this component instance
   */
  createSelectorQuery: () => any;
  /**
   * 创建一个 IntersectionObserver 对象，选择器选取范围为这个组件实例内
   * Create an IntersectionObserver object with the selector selected from within this component instance
   */
  createIntersectionObserver: () => any;
  /**
   * 使用选择器选择组件实例节点，返回匹配到的第一个组件实例对象（会被 wx://component-export 影响）
   * Use the selector to select the component instance node and return the first matched component instance object
   */
  selectComponent: (selector: string) => any;
  /**
   * 使用选择器选择组件实例节点，返回匹配到的全部组件实例对象组成的数组
   * Use the selector to select the component instance node and return an array of all matched component instance objects
   */
  selectAllComponents: (selector: string) => any[];
  /**
   * 获取这个关系所对应的所有关联节点，参见 组件间关系
   * Get all associated nodes corresponding to this relationship, see Inter-component relationship
   * https://developers.weixin.qq.com/miniprogram/en/dev/framework/custom-component/relations.html
   */
  getRelationNodes: (relationKey: string) => any;
  /**
   * 立刻执行 callback ，其中的多个 setData 之间不会触发界面绘制（只有某些特殊场景中需要，如用于在不同组件同时 setData 时进行界面绘制同步）
   * Callback is executed immediately, and interface drawing is not triggered between multiple setDatas 
   * (only required in some special scenarios, such as interface rendering synchronization when different components are simultaneously setData)
   */
  groupSetData: (callback: () => void) => void;
}