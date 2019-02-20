export interface ITabItemTapOption {
    /** 
     * 被点击tabItem的序号，从0开始
     * The index of the tabItem is clicked, starting from 0
     */
    index: string
    /**
     * 被点击tabItem的页面路径
     * The page path of the tabItem being clicked
     */
    pagePath: string
    /**
     * 被点击tabItem的按钮文字
     * The button text of the tabItem being clicked
     */
    text: string
}

export interface IPageScrollOption {
    /** 
     * 页面在垂直方向已滚动的距离（单位px）
     * The distance the page has scrolled in the vertical direction (unit px)
     */
    scrollTop: number
}

export interface ICustomShareContent {
    /** 
     * 转发标题, 默认值：当前小程序名称 
     * Forwarding title, default is current app's name
     */
    title?: string
    /**
     * 转发路径，必须是以 / 开头的完整路径。默认值：当前页面 path 
     * Forwarding path, Must be a full path starting with /, default is the path of current page
     */
    path?: string
    /**
     * 自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径。支持PNG及JPG。显示图片长宽比是 5:4。默认值：使用默认截图 
     * Custom image path, which can be a local file path, a code package file path, or a network image path. Support PNG and JPG. The display picture aspect ratio is 5:4, default use default screenshot
     */
    imageUrl?: string
}

export interface IShareAppMessageOption {
    /**
     * 转发事件来源。
     * Forwarding event source.
     */
    from: 'button' | 'menu' | string
    /**
     * 如果 `from` 值是 `button`，则 `target` 是触发这次转发事件的 `button`，否则为 `undefined`
     * If the `from` value is `button`, `target` is the `button` that triggers this forwarding event, otherwise `undefined`
     */
    target: any
    /**
     * 页面中包含`<web-view>`组件时，返回当前`<web-view>`的url
     * Returns the current url of `<web-view>` when the page contains the `<web-view>` component
     */
    webViewUrl?: string
}

export interface IPage extends Record<string, any> {
    /** 
     * 生命周期回调—监听页面加载
     * Lifecycle function - Listener page loading
     */
    onLoad?(query: Record<string, string>): void
    /** 
     * 生命周期回调—监听页面显示
     * Lifecycle function - Monitoring page display
     */
    onShow?(): void
    /** 
     * 生命周期回调—监听页面初次渲染完成
     * Lifecycle function - Monitoring whether the page initial rendering is completed
     */
    onReady?(): void
    /**
     * 生命周期回调—监听页面隐藏
     * Lifecycle function - Monitoring page hiding
     */
    onHide?(): void
    /**
     * 生命周期回调—监听页面卸载
     * Lifecycle function - Monitoring page unloading
     */
    onUnload?(): void
    /** 
     * 监听用户下拉动作
     * Page related event handler - Monitoring user pull-down action
     */
    onPullDownRefresh?(): void
    /**
     * 页面上拉触底事件的处理函数
     * Processing function for page pull-up event
     */
    onReachBottom?(): void
    /** 
     * 用户点击右上角转发
     * User taps on the top right corner to forward
     */
    onShareAppMessage?(options?: IShareAppMessageOption): ICustomShareContent
    /** 
     * 页面滚动触发事件的处理函数
     * Processing function for page scroll trigger event
     */
    onPageScroll?(options?: IPageScrollOption): void
    /** 
     * 当前是 tab 页时，点击 tab 时触发
     * Triggered when the user taps the tab if the current page is a tab page
     */
    onTabItemTap?(options?: ITabItemTapOption): void
}
