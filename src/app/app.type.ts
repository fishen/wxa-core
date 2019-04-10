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
