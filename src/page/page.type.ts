export interface ITabItemTapOption {
    /**
     * 被点击tabItem的序号，从0开始
     */
    index: string;
    /**
     * 被点击tabItem的页面路径
     */
    pagePath: string;
    /**
     * 被点击tabItem的按钮文字
     */
    text: string;
}

export interface IPageScrollOption {
    /**
     * 页面在垂直方向已滚动的距离（单位px）
     */
    scrollTop: number;
}

export interface ICustomShareContent {
    /**
     * 转发标题, 默认值：当前小程序名称
     */
    title?: string;
    /**
     * 转发路径，必须是以 / 开头的完整路径。默认值：当前页面 path
     */
    path?: string;
    /**
     * 自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径。支持PNG及JPG。显示图片长宽比是 5:4。默认值：使用默认截图
     */
    imageUrl?: string;
}

export interface IShareAppMessageOption {
    /**
     * 转发事件来源。
     */
    from: "button" | "menu" | string;
    /**
     * 如果 `from` 值是 `button`，则 `target` 是触发这次转发事件的 `button`，否则为 `undefined`
     */
    target: any;
    /**
     * 页面中包含`<web-view>`组件时，返回当前`<web-view>`的url
     */
    webViewUrl?: string;
}
