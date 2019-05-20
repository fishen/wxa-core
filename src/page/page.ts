import { Base } from "../component/base";
import { ICustomShareContent, IPageScrollOption, IShareAppMessageOption, ITabItemTapOption } from "./page.type";

/**
 * 页面基础类型，包含所有的属性和方法
 * The base type of page which including all properties and methods
 */
export abstract class Page<D = any> extends Base<D> implements Record<string, any> {
  /**
   * 当前页面的页面参数
   */
  public options: Record<string, string>;
  /**
   * 当前页面的路径
   * The path to the current page
   */
  public route: string;
  /**
   * 生命周期回调—监听页面加载
   */
  public onLoad?(query: Record<string, string>): void;
  /**
   * 生命周期回调—监听页面显示
   */
  public onShow?(): void;
  /**
   * 生命周期回调—监听页面初次渲染完成
   */
  public onReady?(): void;
  /**
   * 生命周期回调—监听页面隐藏
   */
  public onHide?(): void;
  /**
   * 生命周期回调—监听页面卸载
   */
  public onUnload?(): void;
  /**
   * 监听用户下拉动作
   */
  public onPullDownRefresh?(): void;
  /**
   * 页面上拉触底事件的处理函数
   */
  public onReachBottom?(): void;
  /**
   * 用户点击右上角转发
   */
  public onShareAppMessage?(options?: IShareAppMessageOption): ICustomShareContent;
  /**
   * 页面滚动触发事件的处理函数
   */
  public onPageScroll?(options?: IPageScrollOption): void;
  /**
   * 当前是 tab 页时，点击 tab 时触发
   */
  public onTabItemTap?(options?: ITabItemTapOption): void;
}
