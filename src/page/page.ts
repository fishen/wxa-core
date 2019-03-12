import { Base } from "../component/base";

/**
 * 页面基础类型，包含所有的属性和方法
 * The base type of page which including all properties and methods
 */
export abstract class BasePage<D = any> extends Base<D> implements Record<string, any> {
  /**
   * 当前页面的路径
   * The path to the current page
   */
  public route: string;
}
