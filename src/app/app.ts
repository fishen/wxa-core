import { ILaunchShowOption, IPageNotFoundOption } from "./app.type";

export abstract class BaseApp implements Record<string, any> {
    /** 生命周期回调—监听小程序初始化
     *
     * 小程序初始化完成时触发，全局只触发一次。
     */
    public onLaunch?(options?: ILaunchShowOption): void;
    /** 生命周期回调—监听小程序显示
     *
     * 小程序启动，或从后台进入前台显示时
     */
    public onShow?(options?: ILaunchShowOption): void;
    /** 生命周期回调—监听小程序隐藏
     *
     * 小程序从前台进入后台时
     */
    public onHide?(): void;
    /** 错误监听函数
     *
     * 小程序发生脚本错误，或者 api
     */
    public onError?(/** 错误信息，包含堆栈 */error?: string): void;
    /** 页面不存在监听函数
     *
     * 小程序要打开的页面不存在时触发，会带上页面信息回调该函数
     *
     * **注意：**
     * 1. 如果开发者没有添加 `onPageNotFound` 监听，当跳转页面不存在时，将推入微信客户端原生的页面不存在提示页面。
     * 2. 如果 `onPageNotFound` 回调中又重定向到另一个不存在的页面，将推入微信客户端原生的页面不存在提示页面，并且不再回调 `onPageNotFound`。
     *
     * 最低基础库： 1.9.90
     */
    public onPageNotFound?(options?: IPageNotFoundOption): void;
}
