export interface ILaunchOptions {
    query: number;
}

export interface IReferrerInfo {
    /** 来源小程序或公众号或App的 appId */
    appId: string;
    /** 来源小程序传过来的数据，scene=1037或1038时支持 */
    extraData?: any;
}

export interface ILaunchShowOption {
    /** 打开小程序的路径 */
    path: string;
    /** 打开小程序的query */
    query: Record<string, any>;
    /** 打开小程序的场景值 */
    scene: number;
    /** shareTicket，详见 [获取更多转发信息]((转发#获取更多转发信息)) */
    shareTicket: string;
    /** 当场景为由从另一个小程序或公众号或App打开时，返回此字段 */
    referrerInfo?: IReferrerInfo;
}

export interface IPageNotFoundOption {
    /** 不存在页面的路径 */
    path: string;
    /** 打开不存在页面的 query */
    query: Record<string, any>;
    /** 是否本次启动的首个页面（例如从分享等入口进来，首个页面是开发者配置的分享页面） */
    isEntryPage: boolean;
}

export class IApp implements Record<string, any> {
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
