/* tslint:disable */
type CallbackResult<T, S, R> = keyof T extends never ? Promise<S> : T extends CallbackParam<any, any> ? R : Promise<S>;
interface CallbackParam<S = void, F = { errMsg: string }> {
    /**
    * 接口调用成功的回调函数
    */
    success?: (res: S) => any;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (error: F) => any;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: () => any;
}
export interface Component {
    /**
     * 创建一个 SelectorQuery 对象，选择器选取范围为这个组件实例内
     */
    createSelectorQuery: () => any;
    /**
     * 创建一个 IntersectionObserver 对象，选择器选取范围为这个组件实例内
     */
    createIntersectionObserver: () => any;
    /**
     * 组件数据，包括内部数据和属性值
     */
    data: Object;
    /**
     * 组件数据，包括内部数据和属性值
     */
    properties: Object;
    /**
     * 组件的文件路径
     */
    is: string;
    /**
     * 节点id
     */
    id: string;
    /**
     * 节点dataset
     */
    dataset: string;
    /**
     * 获取这个关系所对应的所有关联节点，参见 组件间关系
     */
    getRelationNodes: (relationKey: string) => any;
    /**
     * 返回当前页面的 custom-tab-bar 的组件实例
     */
    getTabBar: () => any;
    /**
     * 立刻执行 callback ，其中的多个 setData 之间不会触发界面绘制（只有某些特殊场景中需要，如用于在不同组件同时 setData 时进行界面绘制同步）
     */
    groupSetData: (callback: () => void) => void;
    /**
     * 检查组件是否具有 behavior （检查时会递归检查被直接或间接引入的所有behavior）
     */
    hasBehavior: (behavior: any) => boolean;
    /**
     * 使用选择器选择组件实例节点，返回匹配到的全部组件实例对象组成的数组
     */
    selectAllComponents: (selector: string) => any[];
    /**
     * 使用选择器选择组件实例节点，返回匹配到的第一个组件实例对象（会被 wx://component-export 影响）
     */
    selectComponent: (selector: string) => any;
    /**
     * 设置data并执行视图层渲染
     * @param data 这次要改变的数据
     * @param callback setData引起的界面更新渲染完毕后的回调函数
     */
    setData: (data: any, callback?: () => void) => void;
    /**
     * 触发事件，参见 组件事件
     */
    triggerEvent: (name: string, detail?: object, options?: object) => void;
}
export type Page = Component & {
    /**
     * 当前页面的页面参数
     */
    options: Record<string, string>;
    /**
     * 当前页面的路径
     * The path to the current page
     */
    route: string;
};
export interface UpdateManagerOnCheckForUpdateResult {
    /**
     * 是否有新版本
     */
    hasUpdate: boolean;
}



export interface UpdateManager {
     /**
      * 强制小程序重启并使用新版本。在小程序新版本下载完成后（即收到 onUpdateReady 回调）调用。
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.applyUpdate.html
      */
      applyUpdate(): void;
     /**
      * 监听向微信后台请求检查更新结果事件。微信在小程序冷启动时自动检查更新，不需由开发者主动触发。
      * @param callback 向微信后台请求检查更新结果事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.onCheckForUpdate.html
      */
      onCheckForUpdate(callback: Function): UpdateManagerOnCheckForUpdateResult;
     /**
      * 监听小程序更新失败事件。小程序有新版本，客户端主动触发下载（无需开发者触发），下载失败（可能是网络原因等）后回调
      * @param callback 小程序更新失败事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.onUpdateFailed.html
      */
      onUpdateFailed(callback: Function): void;
     /**
      * 监听小程序有版本更新事件。客户端主动触发下载（无需开发者触发），下载成功后回调
      * @param callback 小程序有版本更新事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.onUpdateReady.html
      */
      onUpdateReady(callback: Function): void;
}



export interface LogManager {
     /**
      * 写 debug 日志
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/LogManager.debug.html
      */
      debug(): void;
     /**
      * 写 info 日志
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/LogManager.info.html
      */
      info(): void;
     /**
      * 写 log 日志
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/LogManager.log.html
      */
      log(): void;
     /**
      * 写 warn 日志
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/LogManager.warn.html
      */
      warn(): void;
}



export interface RealtimeLogManager {
     /**
      * 添加过滤关键字
      * @param msg 是setFilterMsg的添加接口。用于设置多个过滤关键字。
      * @since 2.8.1
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/RealtimeLogManager.addFilterMsg.html
      */
      addFilterMsg(msg: string): void;
     /**
      * 写 error 日志
      * @since 2.7.1
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/RealtimeLogManager.error.html
      */
      error(): void;
     /**
      * 设置实时日志page参数所在的页面
      * @param pageInstance page实例
      * @since 2.9.1
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/RealtimeLogManager.in.html
      */
      in(pageInstance: Page): void;
     /**
      * 写 info 日志
      * @since 2.7.1
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/RealtimeLogManager.info.html
      */
      info(): void;
     /**
      * 设置过滤关键字
      * @param msg 过滤关键字，最多不超过1Kb，可以在小程序管理后台根据设置的内容搜索得到对应的日志。
      * @since 2.7.3
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/RealtimeLogManager.setFilterMsg.html
      */
      setFilterMsg(msg: string): void;
     /**
      * 写 warn 日志
      * @since 2.7.1
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/RealtimeLogManager.warn.html
      */
      warn(): void;
}



export interface EventChannel {
     /**
      * 触发一个事件
      * @param eventName 事件名称
      * @param args 事件参数
      * @since 2.7.3
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/route/EventChannel.emit.html
      */
      emit(eventName: string, args: any): void;
     /**
      * 取消监听一个事件。给出第二个参数时，只取消给出的监听函数，否则取消所有监听函数
      * @param eventName 事件名称
      * @param fn 事件监听函数
      * @since 2.7.3
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/route/EventChannel.off.html
      */
      off(eventName: string, fn: Function): void;
     /**
      * 持续监听一个事件
      * @param eventName 事件名称
      * @param fn 事件监听函数
      * @since 2.7.3
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/route/EventChannel.on.html
      */
      on(eventName: string, fn: Function): void;
     /**
      * 监听一个事件一次，触发后失效
      * @param eventName 事件名称
      * @param fn 事件监听函数
      * @since 2.7.3
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/route/EventChannel.once.html
      */
      once(eventName: string, fn: Function): void;
}
/**
 * @enum "linear'" 动画从头到尾的速度是相同的
 * @enum "ease'" 动画以低速开始，然后加快，在结束前变慢
 * @enum "ease-in'" 动画以低速开始
 * @enum "ease-in-out'" 动画以低速开始和结束
 * @enum "ease-out'" 动画以低速结束
 * @enum "step-start'" 动画第一帧就跳至结束状态直到结束
 * @enum "step-end'" 动画一直保持开始状态，最后一帧跳到结束状态
 */
export type AnimationStepParamTimingFunction = "linear'" | "ease'" | "ease-in'" | "ease-in-out'" | "ease-out'" | "step-start'" | "step-end'";

export interface AnimationStepParam {
    /**
     * 动画持续时间，单位 ms
     * @default 400
     */
    duration?: number;
    /**
     * 动画的效果
     * @default 'linear'
     */
    timingFunction?: string | AnimationStepParamTimingFunction;
    /**
     * 动画延迟时间，单位 ms
     * @default 0
     */
    delay?: number;
    /**
     * @default '50% 50% 0'
     */
    transformOrigin?: string;
}



export interface Animation {
     /**
      * 设置背景色
      * @param value 颜色值
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.backgroundColor.html
      */
      backgroundColor(value: string): Animation;
     /**
      * 设置 bottom 值
      * @param value
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.bottom.html
      */
      bottom(value: number|string): Animation;
     /**
      * 导出动画队列。export 方法每次调用后会清掉之前的动画操作。
      * @return animationData
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.export.html
      */
      export(): Array<object>;
     /**
      * 设置高度
      * @param value
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.height.html
      */
      height(value: number|string): Animation;
     /**
      * 设置 left 值
      * @param value
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.left.html
      */
      left(value: number|string): Animation;
     /**
      * 同 transform-function matrix
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.matrix.html
      */
      matrix(): Animation;
     /**
      * 同 transform-function matrix3d
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.matrix3d.html
      */
      matrix3d(): Animation;
     /**
      * 设置透明度
      * @param value 透明度，范围 0-1
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.opacity.html
      */
      opacity(value: number): Animation;
     /**
      * 设置 right 值
      * @param value
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.right.html
      */
      right(value: number|string): Animation;
     /**
      * 从原点顺时针旋转一个角度
      * @param angle 旋转的角度。范围 [-180, 180]
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.rotate.html
      */
      rotate(angle: number): Animation;
     /**
      * 从 固定 轴顺时针旋转一个角度
      * @param x 旋转轴的 x 坐标
      * @param y 旋转轴的 y 坐标
      * @param z 旋转轴的 z 坐标
      * @param angle 旋转的角度。范围 [-180, 180]
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.rotate3d.html
      */
      rotate3d(x: number, y: number, z: number, angle: number): Animation;
     /**
      * 从 X 轴顺时针旋转一个角度
      * @param angle 旋转的角度。范围 [-180, 180]
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.rotateX.html
      */
      rotateX(angle: number): Animation;
     /**
      * 从 Y 轴顺时针旋转一个角度
      * @param angle 旋转的角度。范围 [-180, 180]
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.rotateY.html
      */
      rotateY(angle: number): Animation;
     /**
      * 从 Z 轴顺时针旋转一个角度
      * @param angle 旋转的角度。范围 [-180, 180]
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.rotateZ.html
      */
      rotateZ(angle: number): Animation;
     /**
      * 缩放
      * @param sx 当仅有 sx 参数时，表示在 X 轴、Y 轴同时缩放sx倍数
      * @param sy 在 Y 轴缩放 sy 倍数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.scale.html
      */
      scale(sx: number, sy: number): Animation;
     /**
      * 缩放
      * @param sx x 轴的缩放倍数
      * @param sy y 轴的缩放倍数
      * @param sz z 轴的缩放倍数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.scale3d.html
      */
      scale3d(sx: number, sy: number, sz: number): Animation;
     /**
      * 缩放 X 轴
      * @param scale X 轴的缩放倍数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.scaleX.html
      */
      scaleX(scale: number): Animation;
     /**
      * 缩放 Y 轴
      * @param scale Y 轴的缩放倍数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.scaleY.html
      */
      scaleY(scale: number): Animation;
     /**
      * 缩放 Z 轴
      * @param scale Z 轴的缩放倍数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.scaleZ.html
      */
      scaleZ(scale: number): Animation;
     /**
      * 对 X、Y 轴坐标进行倾斜
      * @param ax 对 X 轴坐标倾斜的角度，范围 [-180, 180]
      * @param ay 对 Y 轴坐标倾斜的角度，范围 [-180, 180]
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.skew.html
      */
      skew(ax: number, ay: number): Animation;
     /**
      * 对 X 轴坐标进行倾斜
      * @param angle 倾斜的角度，范围 [-180, 180]
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.skewX.html
      */
      skewX(angle: number): Animation;
     /**
      * 对 Y 轴坐标进行倾斜
      * @param angle 倾斜的角度，范围 [-180, 180]
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.skewY.html
      */
      skewY(angle: number): Animation;
     /**
      * 表示一组动画完成。可以在一组动画中调用任意多个动画方法，一组动画中的所有动画会同时开始，一组动画完成后才会进行下一组动画。
      * @param param
      * @return animation
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.step.html
      */
      step(param: AnimationStepParam): Animation;
     /**
      * 设置 top 值
      * @param value
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.top.html
      */
      top(value: number|string): Animation;
     /**
      * 平移变换
      * @param tx 当仅有该参数时表示在 X 轴偏移 tx，单位 px
      * @param ty 在 Y 轴平移的距离，单位为 px
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.translate.html
      */
      translate(tx: number, ty: number): Animation;
     /**
      * 对 xyz 坐标进行平移变换
      * @param tx 在 X 轴平移的距离，单位为 px
      * @param ty 在 Y 轴平移的距离，单位为 px
      * @param tz 在 Z 轴平移的距离，单位为 px
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.translate3d.html
      */
      translate3d(tx: number, ty: number, tz: number): Animation;
     /**
      * 对 X 轴平移
      * @param translation 在 X 轴平移的距离，单位为 px
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.translateX.html
      */
      translateX(translation: number): Animation;
     /**
      * 对 Y 轴平移
      * @param translation 在 Y 轴平移的距离，单位为 px
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.translateY.html
      */
      translateY(translation: number): Animation;
     /**
      * 对 Z 轴平移
      * @param translation 在 Z 轴平移的距离，单位为 px
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.translateZ.html
      */
      translateZ(translation: number): Animation;
     /**
      * 设置宽度
      * @param value
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.width.html
      */
      width(value: number|string): Animation;
}
export interface RequestTaskOnHeadersReceivedResult {
    /**
     * 开发者服务器返回的 HTTP Response Header
     */
    header: object;
}



export interface RequestTask {
     /**
      * 中断请求任务
      * @since 1.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/request/RequestTask.abort.html
      */
      abort(): void;
     /**
      * 取消监听 HTTP Response Header 事件
      * @param callback HTTP Response Header 事件的回调函数
      * @since 2.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/request/RequestTask.offHeadersReceived.html
      */
      offHeadersReceived(callback: Function): void;
     /**
      * 监听 HTTP Response Header 事件。会比请求完成事件更早
      * @param callback HTTP Response Header 事件的回调函数
      * @since 2.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/request/RequestTask.onHeadersReceived.html
      */
      onHeadersReceived(callback: Function): RequestTaskOnHeadersReceivedResult;
}
export interface DownloadTaskOnHeadersReceivedResult {
    /**
     * 开发者服务器返回的 HTTP Response Header
     */
    header: object;
}
export interface DownloadTaskOnProgressUpdateResult {
    /**
     * 下载进度百分比
     */
    progress: number;
    /**
     * 已经下载的数据长度，单位 Bytes
     */
    totalBytesWritten: number;
    /**
     * 预期需要下载的数据总长度，单位 Bytes
     */
    totalBytesExpectedToWrite: number;
}



export interface DownloadTask {
     /**
      * 中断下载任务
      * @since 1.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/download/DownloadTask.abort.html
      */
      abort(): void;
     /**
      * 取消监听 HTTP Response Header 事件
      * @param callback HTTP Response Header 事件的回调函数
      * @since 2.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/download/DownloadTask.offHeadersReceived.html
      */
      offHeadersReceived(callback: Function): void;
     /**
      * 取消监听下载进度变化事件
      * @param callback 下载进度变化事件的回调函数
      * @since 2.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/download/DownloadTask.offProgressUpdate.html
      */
      offProgressUpdate(callback: Function): void;
     /**
      * 监听 HTTP Response Header 事件。会比请求完成事件更早
      * @param callback HTTP Response Header 事件的回调函数
      * @since 2.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/download/DownloadTask.onHeadersReceived.html
      */
      onHeadersReceived(callback: Function): DownloadTaskOnHeadersReceivedResult;
     /**
      * 监听下载进度变化事件
      * @param callback 下载进度变化事件的回调函数
      * @since 1.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/download/DownloadTask.onProgressUpdate.html
      */
      onProgressUpdate(callback: Function): DownloadTaskOnProgressUpdateResult;
}
export interface UploadTaskOnHeadersReceivedResult {
    /**
     * 开发者服务器返回的 HTTP Response Header
     */
    header: object;
}
export interface UploadTaskOnProgressUpdateResult {
    /**
     * 上传进度百分比
     */
    progress: number;
    /**
     * 已经上传的数据长度，单位 Bytes
     */
    totalBytesSent: number;
    /**
     * 预期需要上传的数据总长度，单位 Bytes
     */
    totalBytesExpectedToSend: number;
}



export interface UploadTask {
     /**
      * 中断上传任务
      * @since 1.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/UploadTask.abort.html
      */
      abort(): void;
     /**
      * 取消监听 HTTP Response Header 事件
      * @param callback HTTP Response Header 事件的回调函数
      * @since 2.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/UploadTask.offHeadersReceived.html
      */
      offHeadersReceived(callback: Function): void;
     /**
      * 取消监听上传进度变化事件
      * @param callback 上传进度变化事件的回调函数
      * @since 2.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/UploadTask.offProgressUpdate.html
      */
      offProgressUpdate(callback: Function): void;
     /**
      * 监听 HTTP Response Header 事件。会比请求完成事件更早
      * @param callback HTTP Response Header 事件的回调函数
      * @since 2.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/UploadTask.onHeadersReceived.html
      */
      onHeadersReceived(callback: Function): UploadTaskOnHeadersReceivedResult;
     /**
      * 监听上传进度变化事件
      * @param callback 上传进度变化事件的回调函数
      * @since 1.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/UploadTask.onProgressUpdate.html
      */
      onProgressUpdate(callback: Function): UploadTaskOnProgressUpdateResult;
}
export interface SocketTaskCloseParam {
    /**
     * 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。
     * @default 1000（表示正常关闭连接）
     */
    code?: number;
    /**
     * 一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于 123 字节的 UTF-8 文本（不是字符）。
     */
    reason?: string;
}
export interface SocketTaskOnCloseResult {
    /**
     * 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。
     */
    code: number;
    /**
     * 一个可读的字符串，表示连接被关闭的原因。
     */
    reason: string;
}
export interface SocketTaskOnErrorResult {
    /**
     * 错误信息
     */
    errMsg: string;
}
export interface SocketTaskOnMessageResult {
    /**
     * 服务器返回的消息
     */
    data: string | ArrayBuffer;
}
export interface SocketTaskOnOpenResult {
    /**
     * 连接成功的 HTTP 响应 Header
     * @since 2.0.0
     */
    header: object;
}
export interface SocketTaskSendParam {
    /**
     * 需要发送的内容
     */
    data: string | ArrayBuffer;
}



export interface SocketTask {
     /**
      * 关闭 WebSocket 连接
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.close.html
      */
      close<T extends SocketTaskCloseParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 关闭 WebSocket 连接
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.close.html
      */
      close(): Promise<void>;
     /**
      * 监听 WebSocket 连接关闭事件
      * @param callback WebSocket 连接关闭事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.onClose.html
      */
      onClose(callback: Function): SocketTaskOnCloseResult;
     /**
      * 监听 WebSocket 错误事件
      * @param callback WebSocket 错误事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.onError.html
      */
      onError(callback: Function): SocketTaskOnErrorResult;
     /**
      * 监听 WebSocket 接受到服务器的消息事件
      * @param callback WebSocket 接受到服务器的消息事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.onMessage.html
      */
      onMessage(callback: Function): SocketTaskOnMessageResult;
     /**
      * 监听 WebSocket 连接打开事件
      * @param callback WebSocket 连接打开事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.onOpen.html
      */
      onOpen(callback: Function): SocketTaskOnOpenResult;
     /**
      * 通过 WebSocket 连接发送数据
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.send.html
      */
      send<T extends SocketTaskSendParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
}
export interface UDPSocketOnErrorResult {
    /**
     * 错误信息
     */
    errMsg: string;
}
export interface UDPSocketOnMessageResultRemoteInfo {
    /**
     * 发送消息的 socket 的地址
     */
    address: string;
    /**
     * 使用的协议族，为 IPv4 或者 IPv6
     */
    family: string;
    /**
     * 端口号
     */
    port: number;
    /**
     * message 的大小，单位：字节
     */
    size: number;
}
export interface UDPSocketOnMessageResult {
    /**
     * 收到的消息
     */
    message: ArrayBuffer;
    /**
     * 消息来源的结构化信息
     */
    remoteInfo: UDPSocketOnMessageResultRemoteInfo;
}
export interface UDPSocketSendParam {
    /**
     * 要发消息的地址。在基础库 2.9.3 及之前版本可以是一个和本机同网段的 IP 地址，也可以是在安全域名列表内的域名地址；在基础库 2.9.4 及之后版本，可以是任意 IP 和域名
     */
    address: string;
    /**
     * 要发送消息的端口号
     */
    port: number;
    /**
     * 要发送的数据
     */
    message: string | ArrayBuffer;
    /**
     * 发送数据的偏移量，仅当 message 为 ArrayBuffer 类型时有效
     * @default 0
     */
    offset?: number;
    /**
     * 发送数据的长度，仅当 message 为 ArrayBuffer 类型时有效
     * @default message.byteLength
     */
    length?: number;
}



export interface UDPSocket {
     /**
      * 绑定一个系统随机分配的可用端口，或绑定一个指定的端口号
      * @param port 基础库 2.9.0 开始支持，低版本需做兼容处理。
      * @return 绑定成功的端口号
      * @since 2.9.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.bind.html
      */
      bind(port: number): number;
     /**
      * 关闭 UDP Socket 实例，相当于销毁。 在关闭之后，UDP Socket 实例不能再发送消息，每次调用 UDPSocket.send 将会触发错误事件，并且 message 事件回调函数也不会再也执行。在 UDPSocket 实例被创建后将被 Native 强引用，保证其不被 GC。在 UDPSocket.close 后将解除对其的强引用，让 UDPSocket 实例遵从 GC。
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.close.html
      */
      close(): void;
     /**
      * 取消监听关闭事件
      * @param callback 关闭事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.offClose.html
      */
      offClose(callback: Function): void;
     /**
      * 取消监听错误事件
      * @param callback 错误事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.offError.html
      */
      offError(callback: Function): void;
     /**
      * 取消监听开始监听数据包消息的事件
      * @param callback 开始监听数据包消息的事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.offListening.html
      */
      offListening(callback: Function): void;
     /**
      * 取消监听收到消息的事件
      * @param callback 收到消息的事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.offMessage.html
      */
      offMessage(callback: Function): void;
     /**
      * 监听关闭事件
      * @param callback 关闭事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.onClose.html
      */
      onClose(callback: Function): void;
     /**
      * 监听错误事件
      * @param callback 错误事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.onError.html
      */
      onError(callback: Function): UDPSocketOnErrorResult;
     /**
      * 监听开始监听数据包消息的事件
      * @param callback 开始监听数据包消息的事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.onListening.html
      */
      onListening(callback: Function): void;
     /**
      * 监听收到消息的事件
      * @param callback 收到消息的事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.onMessage.html
      */
      onMessage(callback: Function): UDPSocketOnMessageResult;
     /**
      * 向指定的 IP 和 port 发送消息
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.send.html
      */
      send(param: UDPSocketSendParam): void;
}
export interface MapContextGetCenterLocationSuccess {
    /**
     * 经度
     */
    longitude: number;
    /**
     * 纬度
     */
    latitude: number;
}
export interface MapContextGetRegionSuccess {
    /**
     * 西南角经纬度
     */
    southwest: number;
    /**
     * 东北角经纬度
     */
    northeast: number;
}
export interface MapContextGetRotateSuccess {
    /**
     * 旋转角
     */
    rotate: number;
}
export interface MapContextGetScaleSuccess {
    /**
     * 缩放值
     */
    scale: number;
}
export interface MapContextGetSkewSuccess {
    /**
     * 倾斜角
     */
    skew: number;
}
export interface MapContextIncludePointsParamPoints {
    /**
     * 经度
     */
    longitude: number;
    /**
     * 纬度
     */
    latitude: number;
}
export interface MapContextIncludePointsParam {
    /**
     * 要显示在可视区域内的坐标点列表
     */
    points: Array<MapContextIncludePointsParamPoints>;
    /**
     * 坐标点形成的矩形边缘到地图边缘的距离，单位像素。格式为[上,右,下,左]，安卓上只能识别数组第一项，上下左右的padding一致。开发者工具暂不支持padding参数。
     */
    padding?: Array<number>;
}
export interface MapContextMoveToLocationParam {
    /**
     * 经度
     * @since 2.8.0
     */
    longitude?: number;
    /**
     * 纬度
     * @since 2.8.0
     */
    latitude?: number;
}
export interface MapContextTranslateMarkerParamDestination {
    /**
     * 经度
     */
    longitude: number;
    /**
     * 纬度
     */
    latitude: number;
}
export interface MapContextTranslateMarkerParam {
    /**
     * 指定 marker
     */
    markerId: number;
    /**
     * 指定 marker 移动到的目标点
     */
    destination: MapContextTranslateMarkerParamDestination;
    /**
     * 移动过程中是否自动旋转 marker
     */
    autoRotate: boolean;
    /**
     * marker 的旋转角度
     */
    rotate: number;
    /**
     * 动画持续时长，平移与旋转分别计算
     * @default 1000
     */
    duration?: number;
    /**
     * 动画结束回调函数
     */
    animationEnd?: Function;
}



export interface MapContext {
     /**
      * 获取当前地图中心的经纬度。返回的是 gcj02 坐标系，可以用于 wx.openLocation()
      * @param object
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.getCenterLocation.html
      */
      getCenterLocation(object: CallbackParam<MapContextGetCenterLocationSuccess, any>): void;
     /**
      * 获取当前地图中心的经纬度。返回的是 gcj02 坐标系，可以用于 wx.openLocation()
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.getCenterLocation.html
      */
      getCenterLocation(): Promise<MapContextGetCenterLocationSuccess>;

     /**
      * 获取当前地图的视野范围
      * @param object
      * @since 1.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.getRegion.html
      */
      getRegion(object: CallbackParam<MapContextGetRegionSuccess, any>): void;
     /**
      * 获取当前地图的视野范围
      * @since 1.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.getRegion.html
      */
      getRegion(): Promise<MapContextGetRegionSuccess>;

     /**
      * 获取当前地图的旋转角
      * @param object
      * @since 2.8.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.getRotate.html
      */
      getRotate(object: CallbackParam<MapContextGetRotateSuccess, any>): void;
     /**
      * 获取当前地图的旋转角
      * @since 2.8.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.getRotate.html
      */
      getRotate(): Promise<MapContextGetRotateSuccess>;

     /**
      * 获取当前地图的缩放级别
      * @param object
      * @since 1.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.getScale.html
      */
      getScale(object: CallbackParam<MapContextGetScaleSuccess, any>): void;
     /**
      * 获取当前地图的缩放级别
      * @since 1.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.getScale.html
      */
      getScale(): Promise<MapContextGetScaleSuccess>;

     /**
      * 获取当前地图的倾斜角
      * @param object
      * @since 2.8.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.getSkew.html
      */
      getSkew(object: CallbackParam<MapContextGetSkewSuccess, any>): void;
     /**
      * 获取当前地图的倾斜角
      * @since 2.8.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.getSkew.html
      */
      getSkew(): Promise<MapContextGetSkewSuccess>;

     /**
      * 缩放视野展示所有经纬度
      * @param param
      * @since 1.2.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.includePoints.html
      */
      includePoints<T extends MapContextIncludePointsParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 将地图中心移置当前定位点，此时需设置地图组件 show-location 为true。'2.8.0' 起支持将地图中心移动到指定位置。
      * @param param
      * @since 1.2.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.moveToLocation.html
      */
      moveToLocation<T extends MapContextMoveToLocationParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 将地图中心移置当前定位点，此时需设置地图组件 show-location 为true。'2.8.0' 起支持将地图中心移动到指定位置。
      * @since 1.2.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.moveToLocation.html
      */
      moveToLocation(): Promise<void>;
     /**
      * 平移marker，带动画
      * @param param
      * @since 1.2.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.translateMarker.html
      */
      translateMarker<T extends MapContextTranslateMarkerParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
}
/**
 * @enum 0 正常竖向
 * @enum 90 屏幕逆时针90度
 * @enum -90 屏幕顺时针90度
 */
export type VideoContextRequestFullScreenParamDirection = 0 | 90 | -90;

export interface VideoContextRequestFullScreenParam {
    /**
     * 设置全屏时视频的方向，不指定则根据宽高比自动判断。
     * @since 1.7.0
     */
    direction?: number | VideoContextRequestFullScreenParamDirection;
}



export interface VideoContext {
     /**
      * 退出全屏
      * @since 1.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.exitFullScreen.html
      */
      exitFullScreen(): void;
     /**
      * 隐藏状态栏，仅在iOS全屏下有效
      * @since 2.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.hideStatusBar.html
      */
      hideStatusBar(): void;
     /**
      * 暂停视频
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.pause.html
      */
      pause(): void;
     /**
      * 播放视频
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.play.html
      */
      play(): void;
     /**
      * 设置倍速播放
      * @param rate 倍率，支持 0.5/0.8/1.0/1.25/1.5，2.6.3 起支持 2.0 倍速
      * @since 1.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.playbackRate.html
      */
      playbackRate(rate: number): void;
     /**
      * 进入全屏
      * @param param
      * @since 1.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.requestFullScreen.html
      */
      requestFullScreen(param: VideoContextRequestFullScreenParam): void;
     /**
      * 跳转到指定位置
      * @param position 跳转到的位置，单位 s
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.seek.html
      */
      seek(position: number): void;
     /**
      * 发送弹幕
      * @param data 弹幕内容
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.sendDanmu.html
      */
      sendDanmu(data: object): void;
     /**
      * 显示状态栏，仅在iOS全屏下有效
      * @since 2.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.showStatusBar.html
      */
      showStatusBar(): void;
     /**
      * 停止视频
      * @since 1.7.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.stop.html
      */
      stop(): void;
}



export interface AudioContext {
     /**
      * 暂停音频。
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/AudioContext.pause.html
      */
      pause(): void;
     /**
      * 播放音频。
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/AudioContext.play.html
      */
      play(): void;
     /**
      * 跳转到指定位置。
      * @param position 跳转位置，单位 s
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/AudioContext.seek.html
      */
      seek(position: number): void;
     /**
      * 设置音频地址
      * @param src 音频地址
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/AudioContext.setSrc.html
      */
      setSrc(src: string): void;
}
/**
 * @enum 10001 系统错误
 * @enum 10002 网络错误
 * @enum 10003 文件错误
 * @enum 10004 格式错误
 * @enum -1 未知错误
 */
export type InnerAudioContextOnErrorResultErrCode = 10001 | 10002 | 10003 | 10004 | -1;

export interface InnerAudioContextOnErrorResult {
    /**
     */
    errMsg: string;
    /**
     */
    errCode: number | InnerAudioContextOnErrorResultErrCode;
}



export interface InnerAudioContext {
     /**
      * 销毁当前实例
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.destroy.html
      */
      destroy(): void;
     /**
      * 取消监听音频进入可以播放状态的事件
      * @param callback 音频进入可以播放状态的事件的回调函数
      * @since 1.9.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.offCanplay.html
      */
      offCanplay(callback: Function): void;
     /**
      * 取消监听音频自然播放至结束的事件
      * @param callback 音频自然播放至结束的事件的回调函数
      * @since 1.9.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.offEnded.html
      */
      offEnded(callback: Function): void;
     /**
      * 取消监听音频播放错误事件
      * @param callback 音频播放错误事件的回调函数
      * @since 1.9.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.offError.html
      */
      offError(callback: Function): void;
     /**
      * 取消监听音频暂停事件
      * @param callback 音频暂停事件的回调函数
      * @since 1.9.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.offPause.html
      */
      offPause(callback: Function): void;
     /**
      * 取消监听音频播放事件
      * @param callback 音频播放事件的回调函数
      * @since 1.9.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.offPlay.html
      */
      offPlay(callback: Function): void;
     /**
      * 取消监听音频完成跳转操作的事件
      * @param callback 音频完成跳转操作的事件的回调函数
      * @since 1.9.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.offSeeked.html
      */
      offSeeked(callback: Function): void;
     /**
      * 取消监听音频进行跳转操作的事件
      * @param callback 音频进行跳转操作的事件的回调函数
      * @since 1.9.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.offSeeking.html
      */
      offSeeking(callback: Function): void;
     /**
      * 取消监听音频停止事件
      * @param callback 音频停止事件的回调函数
      * @since 1.9.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.offStop.html
      */
      offStop(callback: Function): void;
     /**
      * 取消监听音频播放进度更新事件
      * @param callback 音频播放进度更新事件的回调函数
      * @since 1.9.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.offTimeUpdate.html
      */
      offTimeUpdate(callback: Function): void;
     /**
      * 取消监听音频加载中事件
      * @param callback 音频加载中事件的回调函数
      * @since 1.9.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.offWaiting.html
      */
      offWaiting(callback: Function): void;
     /**
      * 监听音频进入可以播放状态的事件。但不保证后面可以流畅播放
      * @param callback 音频进入可以播放状态的事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.onCanplay.html
      */
      onCanplay(callback: Function): void;
     /**
      * 监听音频自然播放至结束的事件
      * @param callback 音频自然播放至结束的事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.onEnded.html
      */
      onEnded(callback: Function): void;
     /**
      * 监听音频播放错误事件
      * @param callback 音频播放错误事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.onError.html
      */
      onError(callback: Function): InnerAudioContextOnErrorResult;
     /**
      * 监听音频暂停事件
      * @param callback 音频暂停事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.onPause.html
      */
      onPause(callback: Function): void;
     /**
      * 监听音频播放事件
      * @param callback 音频播放事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.onPlay.html
      */
      onPlay(callback: Function): void;
     /**
      * 监听音频完成跳转操作的事件
      * @param callback 音频完成跳转操作的事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.onSeeked.html
      */
      onSeeked(callback: Function): void;
     /**
      * 监听音频进行跳转操作的事件
      * @param callback 音频进行跳转操作的事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.onSeeking.html
      */
      onSeeking(callback: Function): void;
     /**
      * 监听音频停止事件
      * @param callback 音频停止事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.onStop.html
      */
      onStop(callback: Function): void;
     /**
      * 监听音频播放进度更新事件
      * @param callback 音频播放进度更新事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.onTimeUpdate.html
      */
      onTimeUpdate(callback: Function): void;
     /**
      * 监听音频加载中事件。当音频因为数据不足，需要停下来加载时会触发
      * @param callback 音频加载中事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.onWaiting.html
      */
      onWaiting(callback: Function): void;
     /**
      * 暂停。暂停后的音频再播放会从暂停处开始播放
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.pause.html
      */
      pause(): void;
     /**
      * 播放
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.play.html
      */
      play(): void;
     /**
      * 跳转到指定位置
      * @param position 跳转的时间，单位 s。精确到小数点后 3 位，即支持 ms 级别精确度
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.seek.html
      */
      seek(position: number): void;
     /**
      * 停止。停止后的音频再播放会从头开始播放。
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.stop.html
      */
      stop(): void;
}



export interface BackgroundAudioManager {
     /**
      * 监听背景音频进入可播放状态事件。 但不保证后面可以流畅播放
      * @param callback 背景音频进入可播放状态事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/BackgroundAudioManager.onCanplay.html
      */
      onCanplay(callback: Function): void;
     /**
      * 监听背景音频自然播放结束事件
      * @param callback 背景音频自然播放结束事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/BackgroundAudioManager.onEnded.html
      */
      onEnded(callback: Function): void;
     /**
      * 监听背景音频播放错误事件
      * @param callback 背景音频播放错误事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/BackgroundAudioManager.onError.html
      */
      onError(callback: Function): void;
     /**
      * 监听用户在系统音乐播放面板点击下一曲事件（仅iOS）
      * @param callback 用户在系统音乐播放面板点击下一曲事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/BackgroundAudioManager.onNext.html
      */
      onNext(callback: Function): void;
     /**
      * 监听背景音频暂停事件
      * @param callback 背景音频暂停事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/BackgroundAudioManager.onPause.html
      */
      onPause(callback: Function): void;
     /**
      * 监听背景音频播放事件
      * @param callback 背景音频播放事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/BackgroundAudioManager.onPlay.html
      */
      onPlay(callback: Function): void;
     /**
      * 监听用户在系统音乐播放面板点击上一曲事件（仅iOS）
      * @param callback 用户在系统音乐播放面板点击上一曲事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/BackgroundAudioManager.onPrev.html
      */
      onPrev(callback: Function): void;
     /**
      * 监听背景音频完成跳转操作事件
      * @param callback 背景音频完成跳转操作事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/BackgroundAudioManager.onSeeked.html
      */
      onSeeked(callback: Function): void;
     /**
      * 监听背景音频开始跳转操作事件
      * @param callback 背景音频开始跳转操作事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/BackgroundAudioManager.onSeeking.html
      */
      onSeeking(callback: Function): void;
     /**
      * 监听背景音频停止事件
      * @param callback 背景音频停止事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/BackgroundAudioManager.onStop.html
      */
      onStop(callback: Function): void;
     /**
      * 监听背景音频播放进度更新事件，只有小程序在前台时会回调。
      * @param callback 背景音频播放进度更新事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/BackgroundAudioManager.onTimeUpdate.html
      */
      onTimeUpdate(callback: Function): void;
     /**
      * 监听音频加载中事件。当音频因为数据不足，需要停下来加载时会触发
      * @param callback 音频加载中事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/BackgroundAudioManager.onWaiting.html
      */
      onWaiting(callback: Function): void;
     /**
      * 暂停音乐
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/BackgroundAudioManager.pause.html
      */
      pause(): void;
     /**
      * 播放音乐
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/BackgroundAudioManager.play.html
      */
      play(): void;
     /**
      * 跳转到指定位置
      * @param currentTime 跳转的位置，单位 s。精确到小数点后 3 位，即支持 ms 级别精确度
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/BackgroundAudioManager.seek.html
      */
      seek(currentTime: number): void;
     /**
      * 停止音乐
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/BackgroundAudioManager.stop.html
      */
      stop(): void;
}
/**
 * @enum 0 正常竖向
 * @enum 90 屏幕逆时针90度
 * @enum -90 屏幕顺时针90度
 */
export type LivePlayerContextRequestFullScreenParamDirection = 0 | 90 | -90;

export interface LivePlayerContextRequestFullScreenParam {
    /**
     * 设置全屏时的方向
     * @default 0
     */
    direction?: number | LivePlayerContextRequestFullScreenParamDirection;
}
export interface LivePlayerContextSnapshotSuccess {
    /**
     * 图片文件的临时路径 (本地路径)
     */
    tempImagePath: string;
    /**
     * 图片的宽度
     */
    width: string;
    /**
     * 图片的高度
     */
    height: string;
}



export interface LivePlayerContext {
     /**
      * 退出全屏
      * @param object
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.exitFullScreen.html
      */
      exitFullScreen(object: CallbackParam<void, any>): void;
     /**
      * 退出全屏
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.exitFullScreen.html
      */
      exitFullScreen(): Promise<void>;

     /**
      * 静音
      * @param object
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.mute.html
      */
      mute(object: CallbackParam<void, any>): void;
     /**
      * 静音
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.mute.html
      */
      mute(): Promise<void>;

     /**
      * 暂停
      * @param object
      * @since 1.9.90
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.pause.html
      */
      pause(object: CallbackParam<void, any>): void;
     /**
      * 暂停
      * @since 1.9.90
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.pause.html
      */
      pause(): Promise<void>;

     /**
      * 播放
      * @param object
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.play.html
      */
      play(object: CallbackParam<void, any>): void;
     /**
      * 播放
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.play.html
      */
      play(): Promise<void>;

     /**
      * 进入全屏
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.requestFullScreen.html
      */
      requestFullScreen<T extends LivePlayerContextRequestFullScreenParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 进入全屏
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.requestFullScreen.html
      */
      requestFullScreen(): Promise<void>;
     /**
      * 恢复
      * @param object
      * @since 1.9.90
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.resume.html
      */
      resume(object: CallbackParam<void, any>): void;
     /**
      * 恢复
      * @since 1.9.90
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.resume.html
      */
      resume(): Promise<void>;

     /**
      * 截图
      * @param object
      * @since 2.7.1
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.snapshot.html
      */
      snapshot(object: CallbackParam<LivePlayerContextSnapshotSuccess, any>): void;
     /**
      * 截图
      * @since 2.7.1
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.snapshot.html
      */
      snapshot(): Promise<LivePlayerContextSnapshotSuccess>;

     /**
      * 停止
      * @param object
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.stop.html
      */
      stop(object: CallbackParam<void, any>): void;
     /**
      * 停止
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.stop.html
      */
      stop(): Promise<void>;

}
export interface LivePusherContextPlayBGMParam {
    /**
     * 加入背景混音的资源地址
     */
    url: string;
}
export interface LivePusherContextSetBGMVolumeParam {
    /**
     * 音量大小，范围是 0-1
     */
    volume: string;
}



export interface LivePusherContext {
     /**
      * 暂停推流
      * @param object
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.pause.html
      */
      pause(object: CallbackParam<void, any>): void;
     /**
      * 暂停推流
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.pause.html
      */
      pause(): Promise<void>;

     /**
      * 暂停背景音
      * @param object
      * @since 2.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.pauseBGM.html
      */
      pauseBGM(object: CallbackParam<void, any>): void;
     /**
      * 暂停背景音
      * @since 2.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.pauseBGM.html
      */
      pauseBGM(): Promise<void>;

     /**
      * 播放背景音
      * @param param
      * @since 2.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.playBGM.html
      */
      playBGM<T extends LivePusherContextPlayBGMParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 恢复推流
      * @param object
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.resume.html
      */
      resume(object: CallbackParam<void, any>): void;
     /**
      * 恢复推流
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.resume.html
      */
      resume(): Promise<void>;

     /**
      * 恢复背景音
      * @param object
      * @since 2.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.resumeBGM.html
      */
      resumeBGM(object: CallbackParam<void, any>): void;
     /**
      * 恢复背景音
      * @since 2.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.resumeBGM.html
      */
      resumeBGM(): Promise<void>;

     /**
      * 设置背景音音量
      * @param param
      * @since 2.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.setBGMVolume.html
      */
      setBGMVolume<T extends LivePusherContextSetBGMVolumeParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 快照
      * @param object
      * @since 1.9.90
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.snapshot.html
      */
      snapshot(object: CallbackParam<void, any>): void;
     /**
      * 快照
      * @since 1.9.90
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.snapshot.html
      */
      snapshot(): Promise<void>;

     /**
      * 开始推流，同时开启摄像头预览
      * @param object
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.start.html
      */
      start(object: CallbackParam<void, any>): void;
     /**
      * 开始推流，同时开启摄像头预览
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.start.html
      */
      start(): Promise<void>;

     /**
      * 开启摄像头预览
      * @param object
      * @since 2.7.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.startPreview.html
      */
      startPreview(object: CallbackParam<void, any>): void;
     /**
      * 开启摄像头预览
      * @since 2.7.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.startPreview.html
      */
      startPreview(): Promise<void>;

     /**
      * 停止推流，同时停止摄像头预览
      * @param object
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.stop.html
      */
      stop(object: CallbackParam<void, any>): void;
     /**
      * 停止推流，同时停止摄像头预览
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.stop.html
      */
      stop(): Promise<void>;

     /**
      * 停止背景音
      * @param object
      * @since 2.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.stopBGM.html
      */
      stopBGM(object: CallbackParam<void, any>): void;
     /**
      * 停止背景音
      * @since 2.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.stopBGM.html
      */
      stopBGM(): Promise<void>;

     /**
      * 关闭摄像头预览
      * @param object
      * @since 2.7.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.stopPreview.html
      */
      stopPreview(object: CallbackParam<void, any>): void;
     /**
      * 关闭摄像头预览
      * @since 2.7.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.stopPreview.html
      */
      stopPreview(): Promise<void>;

     /**
      * 切换前后摄像头
      * @param object
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.switchCamera.html
      */
      switchCamera(object: CallbackParam<void, any>): void;
     /**
      * 切换前后摄像头
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.switchCamera.html
      */
      switchCamera(): Promise<void>;

     /**
      * 切换手电筒
      * @param object
      * @since 2.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.toggleTorch.html
      */
      toggleTorch(object: CallbackParam<void, any>): void;
     /**
      * 切换手电筒
      * @since 2.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.toggleTorch.html
      */
      toggleTorch(): Promise<void>;

}
export interface RecorderManagerOnErrorResult {
    /**
     * 错误信息
     */
    errMsg: string;
}
export interface RecorderManagerOnFrameRecordedResult {
    /**
     * 录音分片数据
     */
    frameBuffer: ArrayBuffer;
    /**
     * 当前帧是否正常录音结束前的最后一帧
     */
    isLastFrame: boolean;
}
export interface RecorderManagerOnStopResult {
    /**
     * 录音文件的临时路径 (本地路径)
     */
    tempFilePath: string;
    /**
     * 录音总时长，单位：ms
     */
    duration: number;
    /**
     * 录音文件大小，单位：Byte
     */
    fileSize: number;
}
/**
 * @enum 8000 8000 采样率
 * @enum 11025 11025 采样率
 * @enum 12000 12000 采样率
 * @enum 16000 16000 采样率
 * @enum 22050 22050 采样率
 * @enum 24000 24000 采样率
 * @enum 32000 32000 采样率
 * @enum 44100 44100 采样率
 * @enum 48000 48000 采样率
 */
export type RecorderManagerStartParamSampleRate = 8000 | 11025 | 12000 | 16000 | 22050 | 24000 | 32000 | 44100 | 48000;

/**
 * @enum 1 1 个通道
 * @enum 2 2 个通道
 */
export type RecorderManagerStartParamNumberOfChannels = 1 | 2;

/**
 * @enum "mp3" mp3 格式
 * @enum "aac" aac 格式
 */
export type RecorderManagerStartParamFormat = "mp3" | "aac";

/**
 * @enum "auto" 自动设置，默认使用手机麦克风，插上耳麦后自动切换使用耳机麦克风，所有平台适用
 * @enum "buildInMic" 手机麦克风，仅限 iOS
 * @enum "headsetMic" 耳机麦克风，仅限 iOS
 * @enum "mic" 麦克风（没插耳麦时是手机麦克风，插耳麦时是耳机麦克风），仅限 Android
 * @enum "camcorder" 同 mic，适用于录制音视频内容，仅限 Android
 * @enum "voice_communication" 同 mic，适用于实时沟通，仅限 Android
 * @enum "voice_recognition" 同 mic，适用于语音识别，仅限 Android
 */
export type RecorderManagerStartParamAudioSource = "auto" | "buildInMic" | "headsetMic" | "mic" | "camcorder" | "voice_communication" | "voice_recognition";

export interface RecorderManagerStartParam {
    /**
     * 录音的时长，单位 ms，最大值 600000（10 分钟）
     * @default 60000
     */
    duration?: number;
    /**
     * 采样率
     * @default 8000
     */
    sampleRate?: number | RecorderManagerStartParamSampleRate;
    /**
     * 录音通道数
     * @default 2
     */
    numberOfChannels?: number | RecorderManagerStartParamNumberOfChannels;
    /**
     * 编码码率，有效值见下表格
     * @default 48000
     */
    encodeBitRate?: number;
    /**
     * 音频格式
     * @default aac
     */
    format?: string | RecorderManagerStartParamFormat;
    /**
     * 指定帧大小，单位 KB。传入 frameSize 后，每录制指定帧大小的内容后，会回调录制的文件内容，不指定则不会回调。暂仅支持 mp3 格式。
     */
    frameSize?: number;
    /**
     * 指定录音的音频输入源，可通过 wx.getAvailableAudioSources() 获取当前可用的音频源
     * @default auto
     * @since 2.1.0
     */
    audioSource?: string | RecorderManagerStartParamAudioSource;
}



export interface RecorderManager {
     /**
      * 监听录音错误事件
      * @param callback 录音错误事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onError.html
      */
      onError(callback: Function): RecorderManagerOnErrorResult;
     /**
      * 监听已录制完指定帧大小的文件事件。如果设置了 frameSize，则会回调此事件。
      * @param callback 已录制完指定帧大小的文件事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onFrameRecorded.html
      */
      onFrameRecorded(callback: Function): RecorderManagerOnFrameRecordedResult;
     /**
      * 监听录音因为受到系统占用而被中断开始事件。以下场景会触发此事件：微信语音聊天、微信视频聊天。此事件触发后，录音会被暂停。pause 事件在此事件后触发
      * @param callback 录音因为受到系统占用而被中断开始事件的回调函数
      * @since 2.3.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onInterruptionBegin.html
      */
      onInterruptionBegin(callback: Function): void;
     /**
      * 监听录音中断结束事件。在收到 interruptionBegin 事件之后，小程序内所有录音会暂停，收到此事件之后才可再次录音成功。
      * @param callback 录音中断结束事件的回调函数
      * @since 2.3.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onInterruptionEnd.html
      */
      onInterruptionEnd(callback: Function): void;
     /**
      * 监听录音暂停事件
      * @param callback 录音暂停事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onPause.html
      */
      onPause(callback: Function): void;
     /**
      * 监听录音继续事件
      * @param callback 录音继续事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onResume.html
      */
      onResume(callback: Function): void;
     /**
      * 监听录音开始事件
      * @param callback 录音开始事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onStart.html
      */
      onStart(callback: Function): void;
     /**
      * 监听录音结束事件
      * @param callback 录音结束事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onStop.html
      */
      onStop(callback: Function): RecorderManagerOnStopResult;
     /**
      * 暂停录音
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.pause.html
      */
      pause(): void;
     /**
      * 继续录音
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.resume.html
      */
      resume(): void;
     /**
      * 开始录音
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.start.html
      */
      start(param: RecorderManagerStartParam): void;
     /**
      * 停止录音
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.stop.html
      */
      stop(): void;
}
export interface CameraContextOnCameraFrameResult {
    /**
     * 图像数据矩形的宽度
     */
    width: number;
    /**
     * 图像数据矩形的高度
     */
    height: number;
    /**
     * 图像像素点数据，一维数组，每四项表示一个像素点的 rgba
     */
    data: ArrayBuffer;
}
export interface CameraContextStartRecordParam {
    /**
     * 超过30s或页面 onHide 时会结束录像
     */
    timeoutCallback?: Function;
}
export interface CameraContextStartRecordResult {
    /**
     * 封面图片文件的临时路径 (本地路径)
     */
    tempThumbPath: string;
    /**
     * 视频的文件的临时路径 (本地路径)
     */
    tempVideoPath: string;
}
export interface CameraContextStopRecordSuccess {
    /**
     * 封面图片文件的临时路径 (本地路径)
     */
    tempThumbPath: string;
    /**
     * 视频的文件的临时路径 (本地路径)
     */
    tempVideoPath: string;
}
/**
 * @enum "high" 高质量
 * @enum "normal" 普通质量
 * @enum "low" 低质量
 */
export type CameraContextTakePhotoParamQuality = "high" | "normal" | "low";

export interface CameraContextTakePhotoParam {
    /**
     * 成像质量
     * @default normal
     */
    quality?: string | CameraContextTakePhotoParamQuality;
}
export interface CameraContextTakePhotoSuccess {
    /**
     * 照片文件的临时路径 (本地路径)，安卓是jpg图片格式，ios是png
     */
    tempImagePath: string;
}



export interface CameraContext {
     /**
      * 获取 Camera 实时帧数据
      * @param callback 回调函数
      * @return 注： 使用该接口需同时在 camera 组件属性中指定 frame-size。
      * @since 2.7.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraContext.onCameraFrame.html
      */
      onCameraFrame(callback: Function): CameraContextOnCameraFrameResult;
     /**
      * 开始录像
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraContext.startRecord.html
      */
      startRecord<T extends CameraContextStartRecordParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, CameraContextStartRecordResult>;
     /**
      * 开始录像
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraContext.startRecord.html
      */
      startRecord(): Promise<void>;
     /**
      * 结束录像
      * @param object
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraContext.stopRecord.html
      */
      stopRecord(object: CallbackParam<CameraContextStopRecordSuccess, any>): void;
     /**
      * 结束录像
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraContext.stopRecord.html
      */
      stopRecord(): Promise<CameraContextStopRecordSuccess>;

     /**
      * 拍摄照片
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraContext.takePhoto.html
      */
      takePhoto<T extends CameraContextTakePhotoParam & CallbackParam<CameraContextTakePhotoSuccess, any>>(param: T): CallbackResult<T, CameraContextTakePhotoSuccess, void>;
     /**
      * 拍摄照片
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraContext.takePhoto.html
      */
      takePhoto(): Promise<CameraContextTakePhotoSuccess>;
}



export interface CameraFrameListener {
     /**
      * 开始监听帧数据
      * @param object
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraFrameListener.start.html
      */
      start(object: CallbackParam<void, any>): void;
     /**
      * 开始监听帧数据
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraFrameListener.start.html
      */
      start(): Promise<void>;

     /**
      * 停止监听帧数据
      * @param object
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraFrameListener.stop.html
      */
      stop(object: CallbackParam<void, any>): void;
     /**
      * 停止监听帧数据
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraFrameListener.stop.html
      */
      stop(): Promise<void>;

}
export interface EditorContextInsertImageParam {
    /**
     * 图片地址，仅支持 http(s)、base64、云图片(2.8.0)、临时文件(2.8.3)。
     */
    src: string;
    /**
     * 图像无法显示时的替代文本
     */
    alt?: string;
    /**
     * 图片宽度（pixels/百分比)
     */
    width?: string;
    /**
     * 图片高度 (pixels/百分比)
     */
    height?: string;
    /**
     * 添加到图片 img 标签上的类名
     */
    extClass?: string;
    /**
     * data 被序列化为 name=value;name1=value2 的格式挂在属性 data-custom 上
     */
    data?: object;
}
export interface EditorContextInsertTextParam {
    /**
     * 文本内容
     */
    text?: string;
}
export interface EditorContextSetContentsParam {
    /**
     * 带标签的HTML内容
     */
    html?: string;
    /**
     * 表示内容的delta对象
     */
    delta?: object;
}



export interface EditorContext {
     /**
      * 编辑器失焦，同时收起键盘。
      * @param object
      * @since 2.8.3
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.blur.html
      */
      blur(object: CallbackParam<void, any>): void;
     /**
      * 编辑器失焦，同时收起键盘。
      * @since 2.8.3
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.blur.html
      */
      blur(): Promise<void>;

     /**
      * 清空编辑器内容
      * @param object
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.clear.html
      */
      clear(object: CallbackParam<void, any>): void;
     /**
      * 清空编辑器内容
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.clear.html
      */
      clear(): Promise<void>;

     /**
      * 修改样式
      * @param name 属性
      * @param value 值
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.format.html
      */
      format(name: string, value: string): void;
     /**
      * 获取编辑器内容
      * @param object
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.getContents.html
      */
      getContents(object: CallbackParam<void, any>): void;
     /**
      * 获取编辑器内容
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.getContents.html
      */
      getContents(): Promise<void>;

     /**
      * 插入分割线
      * @param object
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.insertDivider.html
      */
      insertDivider(object: CallbackParam<void, any>): void;
     /**
      * 插入分割线
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.insertDivider.html
      */
      insertDivider(): Promise<void>;

     /**
      * 插入图片。
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.insertImage.html
      */
      insertImage<T extends EditorContextInsertImageParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 覆盖当前选区，设置一段文本
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.insertText.html
      */
      insertText<T extends EditorContextInsertTextParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 覆盖当前选区，设置一段文本
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.insertText.html
      */
      insertText(): Promise<void>;
     /**
      * 恢复
      * @param object
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.redo.html
      */
      redo(object: CallbackParam<void, any>): void;
     /**
      * 恢复
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.redo.html
      */
      redo(): Promise<void>;

     /**
      * 清除当前选区的样式
      * @param object
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.removeFormat.html
      */
      removeFormat(object: CallbackParam<void, any>): void;
     /**
      * 清除当前选区的样式
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.removeFormat.html
      */
      removeFormat(): Promise<void>;

     /**
      * 使得编辑器光标处滚动到窗口可视区域内。
      * @since 2.8.3
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.scrollIntoView.html
      */
      scrollIntoView(): void;
     /**
      * 初始化编辑器内容，html和delta同时存在时仅delta生效
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.setContents.html
      */
      setContents<T extends EditorContextSetContentsParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 初始化编辑器内容，html和delta同时存在时仅delta生效
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.setContents.html
      */
      setContents(): Promise<void>;
     /**
      * 撤销
      * @param object
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.undo.html
      */
      undo(object: CallbackParam<void, any>): void;
     /**
      * 撤销
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.undo.html
      */
      undo(): Promise<void>;

}
export interface MediaContainerExtractDataSourceParam {
    /**
     * 视频源地址，只支持本地文件
     */
    source: string;
}



export interface MediaContainer {
     /**
      * 将音频或视频轨道添加到容器
      * @param track 要添加的音频或视频轨道
      * @since 2.9.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaContainer.addTrack.html
      */
      addTrack(track: MediaTrack): void;
     /**
      * 将容器销毁，释放资源
      * @since 2.9.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaContainer.destroy.html
      */
      destroy(): void;
     /**
      * 将容器内的轨道合并并导出视频文件
      * @since 2.9.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaContainer.export.html
      */
      export(): void;
     /**
      * 将传入的视频源分离轨道。不会自动将轨道添加到待合成的容器里。
      * @param param
      * @since 2.9.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaContainer.extractDataSource.html
      */
      extractDataSource(param: MediaContainerExtractDataSourceParam): void;
     /**
      * 将音频或视频轨道从容器中移除
      * @param track 要移除的音频或视频轨道
      * @since 2.9.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaContainer.removeTrack.html
      */
      removeTrack(track: MediaTrack): void;
}



export interface MediaTrack {
}



export interface Canvas {
     /**
      * 取消由 requestAnimationFrame 添加到计划中的动画帧请求。支持在 2D Canvas 和 WebGL Canvas 下使用, 但不支持混用 2D 和 WebGL 的方法。
      * @param requestID
      * @since 2.7.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Canvas.cancelAnimationFrame.html
      */
      cancelAnimationFrame(requestID: number): void;
     /**
      * 创建一个图片对象。 支持在 2D Canvas 和 WebGL Canvas 下使用, 但不支持混用 2D 和 WebGL 的方法。
      * @since 2.7.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Canvas.createImage.html
      */
      createImage(): Image;
     /**
      * 创建一个 ImageData 对象。仅支持在 2D Canvas 中使用。
      * @since 2.9.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Canvas.createImageData.html
      */
      createImageData(): ImageData;
     /**
      * 该方法返回 Canvas 的绘图上下文
      * @param contextType
      * @return 支持获取 2D 和 WebGL 绘图上下文
      * @since 2.7.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Canvas.getContext.html
      */
      getContext(contextType: string): RenderingContext;
     /**
      * 在下次进行重绘时执行。 支持在 2D Canvas 和 WebGL Canvas 下使用, 但不支持混用 2D 和 WebGL 的方法。
      * @param callback 执行的 callback
      * @return 请求 ID
      * @since 2.7.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Canvas.requestAnimationFrame.html
      */
      requestAnimationFrame(callback: Function): number;
}
/**
 * @enum "repeat" 水平竖直方向都重复
 * @enum "repeat-x" 水平方向重复
 * @enum "repeat-y" 竖直方向重复
 * @enum "no-repeat" 不重复
 */
export type CanvasContextCreatePatternRepetition = "repeat" | "repeat-x" | "repeat-y" | "no-repeat";

/**
 * @enum "butt" 向线条的每个末端添加平直的边缘。
 * @enum "round" 向线条的每个末端添加圆形线帽。
 * @enum "square" 向线条的每个末端添加正方形线帽。
 */
export type CanvasContextSetLineCapLineCap = "butt" | "round" | "square";

/**
 * @enum "bevel" 斜角
 * @enum "round" 圆角
 * @enum "miter" 尖角
 */
export type CanvasContextSetLineJoinLineJoin = "bevel" | "round" | "miter";

/**
 * @enum "left" 左对齐
 * @enum "center" 居中对齐
 * @enum "right" 右对齐
 */
export type CanvasContextSetTextAlignAlign = "left" | "center" | "right";

/**
 * @enum "top" 顶部对齐
 * @enum "bottom" 底部对齐
 * @enum "middle" 居中对齐
 * @enum "normal"
 */
export type CanvasContextSetTextBaselineTextBaseline = "top" | "bottom" | "middle" | "normal";




export interface CanvasContext {
     /**
      * 创建一条弧线。
      * @param x 圆心的 x 坐标
      * @param y 圆心的 y 坐标
      * @param r 圆的半径
      * @param sAngle 起始弧度，单位弧度（在3点钟方向）
      * @param eAngle 终止弧度
      * @param counterclockwise 弧度的方向是否是逆时针
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.arc.html
      */
      arc(x: number, y: number, r: number, sAngle: number, eAngle: number, counterclockwise: boolean): void;
     /**
      * 根据控制点和半径绘制圆弧路径。
      * @param x1 第一个控制点的 x 轴坐标
      * @param y1 第一个控制点的 y 轴坐标
      * @param x2 第二个控制点的 x 轴坐标
      * @param y2 第二个控制点的 y 轴坐标
      * @param radius 圆弧的半径
      * @since 1.9.90
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.arcTo.html
      */
      arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
     /**
      * 开始创建一个路径。需要调用 fill 或者 stroke 才会使用路径进行填充或描边
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.beginPath.html
      */
      beginPath(): void;
     /**
      * 创建三次方贝塞尔曲线路径。曲线的起始点为路径中前一个点。
      * @param cp1x 第一个贝塞尔控制点的 x 坐标
      * @param cp1y 第一个贝塞尔控制点的 y 坐标
      * @param cp2x 第二个贝塞尔控制点的 x 坐标
      * @param cp2y 第二个贝塞尔控制点的 y 坐标
      * @param x 结束点的 x 坐标
      * @param y 结束点的 y 坐标
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.bezierCurveTo.html
      */
      bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
     /**
      * 清除画布上在该矩形区域内的内容
      * @param x 矩形路径左上角的横坐标
      * @param y 矩形路径左上角的纵坐标
      * @param width 矩形路径的宽度
      * @param height 矩形路径的高度
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.clearRect.html
      */
      clearRect(x: number, y: number, width: number, height: number): void;
     /**
      * 从原始画布中剪切任意形状和尺寸。一旦剪切了某个区域，则所有之后的绘图都会被限制在被剪切的区域内（不能访问画布上的其他区域）。可以在使用 clip 方法前通过使用 save 方法对当前画布区域进行保存，并在以后的任意时间通过restore方法对其进行恢复。
      * @since 1.6.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.clip.html
      */
      clip(): void;
     /**
      * 关闭一个路径。会连接起点和终点。如果关闭路径后没有调用 fill 或者 stroke 并开启了新的路径，那之前的路径将不会被渲染。
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.closePath.html
      */
      closePath(): void;
     /**
      * 创建一个圆形的渐变颜色。起点在圆心，终点在圆环。返回的CanvasGradient对象需要使用 CanvasGradient.addColorStop() 来指定渐变点，至少要两个。
      * @param x 圆心的 x 坐标
      * @param y 圆心的 y 坐标
      * @param r 圆的半径
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.createCircularGradient.html
      */
      createCircularGradient(x: number, y: number, r: number): CanvasGradient;
     /**
      * 创建一个线性的渐变颜色。返回的CanvasGradient对象需要使用 CanvasGradient.addColorStop() 来指定渐变点，至少要两个。
      * @param x0 起点的 x 坐标
      * @param y0 起点的 y 坐标
      * @param x1 终点的 x 坐标
      * @param y1 终点的 y 坐标
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.createLinearGradient.html
      */
      createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;
     /**
      * 对指定的图像创建模式的方法，可在指定的方向上重复元图像
      * @param image 重复的图像源，支持代码包路径和本地临时路径 (本地路径)
      * @param repetition 如何重复图像
      * @since 1.9.90
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.createPattern.html
      */
      createPattern(image: string, repetition: string | CanvasContextCreatePatternRepetition): void;
     /**
      * 将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中。
      * @param reserve 本次绘制是否接着上一次绘制。即 reserve 参数为 false，则在本次调用绘制之前 native 层会先清空画布再继续绘制；若 reserve 参数为 true，则保留当前画布上的内容，本次调用 drawCanvas 绘制的内容覆盖在上面，默认 false。
      * @param callback 绘制完成后执行的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.draw.html
      */
      draw(reserve: boolean, callback: Function): void;
     /**
      * 绘制图像到画布
      * @param imageResource 所要绘制的图片资源（网络图片要通过 getImageInfo / downloadFile 先下载）
      * @param sx 需要绘制到画布中的，imageResource的矩形（裁剪）选择框的左上角 x 坐标
      * @param sy 需要绘制到画布中的，imageResource的矩形（裁剪）选择框的左上角 y 坐标
      * @param sWidth 需要绘制到画布中的，imageResource的矩形（裁剪）选择框的宽度
      * @param sHeight 需要绘制到画布中的，imageResource的矩形（裁剪）选择框的高度
      * @param dx imageResource的左上角在目标 canvas 上 x 轴的位置
      * @param dy imageResource的左上角在目标 canvas 上 y 轴的位置
      * @param dWidth 在目标画布上绘制imageResource的宽度，允许对绘制的imageResource进行缩放
      * @param dHeight 在目标画布上绘制imageResource的高度，允许对绘制的imageResource进行缩放
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.drawImage.html
      */
      drawImage(imageResource: string, sx: number, sy: number, sWidth: number, sHeight: number, dx: number, dy: number, dWidth: number, dHeight: number): void;
     /**
      * 对当前路径中的内容进行填充。默认的填充色为黑色。
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.fill.html
      */
      fill(): void;
     /**
      * 填充一个矩形。用 setFillStyle 设置矩形的填充色，如果没设置默认是黑色。
      * @param x 矩形路径左上角的横坐标
      * @param y 矩形路径左上角的纵坐标
      * @param width 矩形路径的宽度
      * @param height 矩形路径的高度
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.fillRect.html
      */
      fillRect(x: number, y: number, width: number, height: number): void;
     /**
      * 在画布上绘制被填充的文本
      * @param text 在画布上输出的文本
      * @param x 绘制文本的左上角 x 坐标位置
      * @param y 绘制文本的左上角 y 坐标位置
      * @param maxWidth 需要绘制的最大宽度，可选
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.fillText.html
      */
      fillText(text: string, x: number, y: number, maxWidth: number): void;
     /**
      * 增加一个新点，然后创建一条从上次指定点到目标点的线。用 stroke 方法来画线条
      * @param x 目标位置的 x 坐标
      * @param y 目标位置的 y 坐标
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.lineTo.html
      */
      lineTo(x: number, y: number): void;
     /**
      * 测量文本尺寸信息。目前仅返回文本宽度。同步接口。
      * @param text 要测量的文本
      * @since 1.9.90
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.measureText.html
      */
      measureText(text: string): object;
     /**
      * 把路径移动到画布中的指定点，不创建线条。用 stroke 方法来画线条
      * @param x 目标位置的 x 坐标
      * @param y 目标位置的 y 坐标
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.moveTo.html
      */
      moveTo(x: number, y: number): void;
     /**
      * 创建二次贝塞尔曲线路径。曲线的起始点为路径中前一个点。
      * @param cpx 贝塞尔控制点的 x 坐标
      * @param cpy 贝塞尔控制点的 y 坐标
      * @param x 结束点的 x 坐标
      * @param y 结束点的 y 坐标
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.quadraticCurveTo.html
      */
      quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
     /**
      * 创建一个矩形路径。需要用 fill 或者 stroke 方法将矩形真正的画到 canvas 中
      * @param x 矩形路径左上角的横坐标
      * @param y 矩形路径左上角的纵坐标
      * @param width 矩形路径的宽度
      * @param height 矩形路径的高度
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.rect.html
      */
      rect(x: number, y: number, width: number, height: number): void;
     /**
      * 恢复之前保存的绘图上下文。
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.restore.html
      */
      restore(): void;
     /**
      * 以原点为中心顺时针旋转当前坐标轴。多次调用旋转的角度会叠加。原点可以用 translate 方法修改。
      * @param rotate 旋转角度，以弧度计 degrees * Math.PI/180；degrees 范围为 0-360
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.rotate.html
      */
      rotate(rotate: number): void;
     /**
      * 保存绘图上下文。
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.save.html
      */
      save(): void;
     /**
      * 在调用后，之后创建的路径其横纵坐标会被缩放。多次调用倍数会相乘。
      * @param scaleWidth 横坐标缩放的倍数 (1 &#x3D; 100%，0.5 &#x3D; 50%，2 &#x3D; 200%)
      * @param scaleHeight 纵坐标轴缩放的倍数 (1 &#x3D; 100%，0.5 &#x3D; 50%，2 &#x3D; 200%)
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.scale.html
      */
      scale(scaleWidth: number, scaleHeight: number): void;
     /**
      * 设置填充色。
      * @param color
      * @since 1.9.90
      * @deprecated 1.9.90
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setFillStyle.html
      */
      setFillStyle(color: string|CanvasGradient): void;
     /**
      * 设置字体的字号
      * @param fontSize 字体的字号
      * @since 1.9.90
      * @deprecated 1.9.90
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setFontSize.html
      */
      setFontSize(fontSize: number): void;
     /**
      * 设置全局画笔透明度。
      * @param alpha 透明度。范围 0-1，0 表示完全透明，1 表示完全不透明。
      * @since 1.9.90
      * @deprecated 1.9.90
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setGlobalAlpha.html
      */
      setGlobalAlpha(alpha: number): void;
     /**
      * 设置线条的端点样式
      * @param lineCap 线条的结束端点样式
      * @since 1.9.90
      * @deprecated 1.9.90
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setLineCap.html
      */
      setLineCap(lineCap: string | CanvasContextSetLineCapLineCap): void;
     /**
      * 设置虚线样式。
      * @param pattern 一组描述交替绘制线段和间距（坐标空间单位）长度的数字
      * @param offset 虚线偏移量
      * @since 1.6.0
      * @deprecated 1.9.90
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setLineDash.html
      */
      setLineDash(pattern: Array<number>, offset: number): void;
     /**
      * 设置线条的交点样式
      * @param lineJoin 线条的结束交点样式
      * @since 1.9.90
      * @deprecated 1.9.90
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setLineJoin.html
      */
      setLineJoin(lineJoin: string | CanvasContextSetLineJoinLineJoin): void;
     /**
      * 设置线条的宽度
      * @param lineWidth 线条的宽度，单位px
      * @since 1.9.90
      * @deprecated 1.9.90
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setLineWidth.html
      */
      setLineWidth(lineWidth: number): void;
     /**
      * 设置最大斜接长度。斜接长度指的是在两条线交汇处内角和外角之间的距离。当 CanvasContext.setLineJoin() 为 miter 时才有效。超过最大倾斜长度的，连接处将以 lineJoin 为 bevel 来显示。
      * @param miterLimit 最大斜接长度
      * @since 1.9.90
      * @deprecated 1.9.90
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setMiterLimit.html
      */
      setMiterLimit(miterLimit: number): void;
     /**
      * 设定阴影样式。
      * @param offsetX 阴影相对于形状在水平方向的偏移，默认值为 0。
      * @param offsetY 阴影相对于形状在竖直方向的偏移，默认值为 0。
      * @param blur 阴影的模糊级别，数值越大越模糊。范围 0- 100。，默认值为 0。
      * @param color 阴影的颜色。默认值为 black。
      * @since 1.9.90
      * @deprecated 1.9.90
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setShadow.html
      */
      setShadow(offsetX: number, offsetY: number, blur: number, color: string): void;
     /**
      * 设置描边颜色。
      * @param color
      * @since 1.9.90
      * @deprecated 1.9.90
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setStrokeStyle.html
      */
      setStrokeStyle(color: string|CanvasGradient): void;
     /**
      * 设置文字的对齐
      * @param align 文字的对齐方式
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setTextAlign.html
      */
      setTextAlign(align: string | CanvasContextSetTextAlignAlign): void;
     /**
      * 设置文字的竖直对齐
      * @param textBaseline 文字的竖直对齐方式
      * @since 1.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setTextBaseline.html
      */
      setTextBaseline(textBaseline: string | CanvasContextSetTextBaselineTextBaseline): void;
     /**
      * 使用矩阵重新设置（覆盖）当前变换的方法
      * @param scaleX 水平缩放
      * @param scaleY 垂直缩放
      * @param skewX 水平倾斜
      * @param skewY 垂直倾斜
      * @param translateX 水平移动
      * @param translateY 垂直移动
      * @since 1.9.90
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setTransform.html
      */
      setTransform(scaleX: number, scaleY: number, skewX: number, skewY: number, translateX: number, translateY: number): void;
     /**
      * 画出当前路径的边框。默认颜色色为黑色。
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.stroke.html
      */
      stroke(): void;
     /**
      * 画一个矩形(非填充)。 用 setStrokeStyle 设置矩形线条的颜色，如果没设置默认是黑色。
      * @param x 矩形路径左上角的横坐标
      * @param y 矩形路径左上角的纵坐标
      * @param width 矩形路径的宽度
      * @param height 矩形路径的高度
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.strokeRect.html
      */
      strokeRect(x: number, y: number, width: number, height: number): void;
     /**
      * 给定的 (x, y) 位置绘制文本描边的方法
      * @param text 要绘制的文本
      * @param x 文本起始点的 x 轴坐标
      * @param y 文本起始点的 y 轴坐标
      * @param maxWidth 需要绘制的最大宽度，可选
      * @since 1.9.90
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.strokeText.html
      */
      strokeText(text: string, x: number, y: number, maxWidth: number): void;
     /**
      * 使用矩阵多次叠加当前变换的方法
      * @param scaleX 水平缩放
      * @param scaleY 垂直缩放
      * @param skewX 水平倾斜
      * @param skewY 垂直倾斜
      * @param translateX 水平移动
      * @param translateY 垂直移动
      * @since 1.9.90
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.transform.html
      */
      transform(scaleX: number, scaleY: number, skewX: number, skewY: number, translateX: number, translateY: number): void;
     /**
      * 对当前坐标系的原点 (0, 0) 进行变换。默认的坐标系原点为页面左上角。
      * @param x 水平坐标平移量
      * @param y 竖直坐标平移量
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.translate.html
      */
      translate(x: number, y: number): void;
}



export interface CanvasGradient {
     /**
      * 添加颜色的渐变点。小于最小 stop 的部分会按最小 stop 的 color 来渲染，大于最大 stop 的部分会按最大 stop 的 color 来渲染
      * @param stop 表示渐变中开始与结束之间的位置，范围 0-1。
      * @param color 渐变点的颜色。
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasGradient.addColorStop.html
      */
      addColorStop(stop: number, color: string): void;
}



export interface Color {
}



export interface Image {
}



export interface ImageData {
}



export interface OffscreenCanvas {
     /**
      * 该方法返回 OffscreenCanvas 的绘图上下文
      * @param contextType
      * @return 当前仅支持获取 WebGL 绘图上下文
      * @since 2.7.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/OffscreenCanvas.getContext.html
      */
      getContext(contextType: string): RenderingContext;
}



export interface RenderingContext {
}
export interface FileSystemManagerAccessParam {
    /**
     * 要判断是否存在的文件/目录路径 (本地路径)
     */
    path: string;
}
/**
 * @enum "fail no such file or directory ${path}" 文件/目录不存在
 */
export type FileSystemManagerAccessFailErrMsg = "fail no such file or directory ${path}";

export interface FileSystemManagerAccessFail {
    /**
     * 错误信息
     */
    errMsg: string | FileSystemManagerAccessFailErrMsg;
}
/**
 * @enum "ascii"
 * @enum "base64"
 * @enum "binary"
 * @enum "hex"
 * @enum "ucs2" 以小端序读取
 * @enum "ucs-2" 以小端序读取
 * @enum "utf16le" 以小端序读取
 * @enum "utf-16le" 以小端序读取
 * @enum "utf-8"
 * @enum "utf8"
 * @enum "latin1"
 */
export type FileSystemManagerAppendFileParamEncoding = "ascii" | "base64" | "binary" | "hex" | "ucs2" | "ucs-2" | "utf16le" | "utf-16le" | "utf-8" | "utf8" | "latin1";

export interface FileSystemManagerAppendFileParam {
    /**
     * 要追加内容的文件路径 (本地路径)
     */
    filePath: string;
    /**
     * 要追加的文本或二进制数据
     */
    data: string | ArrayBuffer;
    /**
     * 指定写入文件的字符编码
     * @default utf8
     */
    encoding?: string | FileSystemManagerAppendFileParamEncoding;
}
/**
 * @enum "fail no such file or directory, open ${filePath}" 指定的 filePath 文件不存在
 * @enum "fail illegal operation on a directory, open '${filePath}'" 指定的 filePath 是一个已经存在的目录
 * @enum "fail permission denied, open ${dirPath}" 指定的 filePath 路径没有写权限
 * @enum "fail sdcard not mounted" 指定的 filePath 是一个已经存在的目录
 */
export type FileSystemManagerAppendFileFailErrMsg = "fail no such file or directory, open ${filePath}" | "fail illegal operation on a directory, open '${filePath}'" | "fail permission denied, open ${dirPath}" | "fail sdcard not mounted";

export interface FileSystemManagerAppendFileFail {
    /**
     * 错误信息
     */
    errMsg: string | FileSystemManagerAppendFileFailErrMsg;
}
/**
 * @enum "ascii"
 * @enum "base64"
 * @enum "binary"
 * @enum "hex"
 * @enum "ucs2" 以小端序读取
 * @enum "ucs-2" 以小端序读取
 * @enum "utf16le" 以小端序读取
 * @enum "utf-16le" 以小端序读取
 * @enum "utf-8"
 * @enum "utf8"
 * @enum "latin1"
 */
export type FileSystemManagerAppendFileSyncEncoding = "ascii" | "base64" | "binary" | "hex" | "ucs2" | "ucs-2" | "utf16le" | "utf-16le" | "utf-8" | "utf8" | "latin1";

export interface FileSystemManagerCopyFileParam {
    /**
     * 源文件路径，支持本地路径
     */
    srcPath: string;
    /**
     * 目标文件路径，支持本地路径
     */
    destPath: string;
}
/**
 * @enum "fail permission denied, copyFile ${srcPath} -> ${destPath}" 指定目标文件路径没有写权限
 * @enum "fail no such file or directory, copyFile ${srcPath} -> ${destPath}" 源文件不存在，或目标文件路径的上层目录不存在
 * @enum "fail the maximum size of the file storage limit is exceeded" 存储空间不足
 */
export type FileSystemManagerCopyFileFailErrMsg = "fail permission denied, copyFile ${srcPath} -> ${destPath}" | "fail no such file or directory, copyFile ${srcPath} -> ${destPath}" | "fail the maximum size of the file storage limit is exceeded";

export interface FileSystemManagerCopyFileFail {
    /**
     * 错误信息
     */
    errMsg: string | FileSystemManagerCopyFileFailErrMsg;
}
export interface FileSystemManagerGetFileInfoParam {
    /**
     * 要读取的文件路径 (本地路径)
     */
    filePath: string;
}
export interface FileSystemManagerGetFileInfoSuccess {
    /**
     * 文件大小，以字节为单位
     */
    size: number;
}
/**
 * @enum "fail file not exist" 指定的 filePath 找不到文件
 */
export type FileSystemManagerGetFileInfoFailErrMsg = "fail file not exist";

export interface FileSystemManagerGetFileInfoFail {
    /**
     * 错误信息
     */
    errMsg: string | FileSystemManagerGetFileInfoFailErrMsg;
}
export interface FileSystemManagerGetSavedFileListSuccessFileList {
    /**
     * 文件路径 (本地路径)
     */
    filePath: string;
    /**
     * 本地文件大小，以字节为单位
     */
    size: number;
    /**
     * 文件保存时的时间戳，从1970/01/01 08:00:00 到当前时间的秒数
     */
    createTime: number;
}
export interface FileSystemManagerGetSavedFileListSuccess {
    /**
     * 文件数组
     */
    fileList: Array<FileSystemManagerGetSavedFileListSuccessFileList>;
}
export interface FileSystemManagerMkdirParam {
    /**
     * 创建的目录路径 (本地路径)
     */
    dirPath: string;
    /**
     * 是否在递归创建该目录的上级目录后再创建该目录。如果对应的上级目录已经存在，则不创建该上级目录。如 dirPath 为 a/b/c/d 且 recursive 为 true，将创建 a 目录，再在 a 目录下创建 b 目录，以此类推直至创建 a/b/c 目录下的 d 目录。
     * @default false
     * @since 2.3.0
     */
    recursive?: boolean;
}
/**
 * @enum "fail no such file or directory ${dirPath}" 上级目录不存在
 * @enum "fail permission denied, open ${dirPath}" 指定的 filePath 路径没有写权限
 * @enum "fail file already exists ${dirPath}" 有同名文件或目录
 */
export type FileSystemManagerMkdirFailErrMsg = "fail no such file or directory ${dirPath}" | "fail permission denied, open ${dirPath}" | "fail file already exists ${dirPath}";

export interface FileSystemManagerMkdirFail {
    /**
     * 错误信息
     */
    errMsg: string | FileSystemManagerMkdirFailErrMsg;
}
export interface FileSystemManagerReaddirParam {
    /**
     * 要读取的目录路径 (本地路径)
     */
    dirPath: string;
}
export interface FileSystemManagerReaddirSuccess {
    /**
     * 指定目录下的文件名数组。
     */
    files: Array<string>;
}
/**
 * @enum "fail no such file or directory ${dirPath}" 目录不存在
 * @enum "fail not a directory ${dirPath}" dirPath 不是目录
 * @enum "fail permission denied, open ${dirPath}" 指定的 filePath 路径没有读权限
 */
export type FileSystemManagerReaddirFailErrMsg = "fail no such file or directory ${dirPath}" | "fail not a directory ${dirPath}" | "fail permission denied, open ${dirPath}";

export interface FileSystemManagerReaddirFail {
    /**
     * 错误信息
     */
    errMsg: string | FileSystemManagerReaddirFailErrMsg;
}
/**
 * @enum "ascii"
 * @enum "base64"
 * @enum "binary"
 * @enum "hex"
 * @enum "ucs2" 以小端序读取
 * @enum "ucs-2" 以小端序读取
 * @enum "utf16le" 以小端序读取
 * @enum "utf-16le" 以小端序读取
 * @enum "utf-8"
 * @enum "utf8"
 * @enum "latin1"
 */
export type FileSystemManagerReadFileParamEncoding = "ascii" | "base64" | "binary" | "hex" | "ucs2" | "ucs-2" | "utf16le" | "utf-16le" | "utf-8" | "utf8" | "latin1";

export interface FileSystemManagerReadFileParam {
    /**
     * 要读取的文件的路径 (本地路径)
     */
    filePath: string;
    /**
     * 指定读取文件的字符编码，如果不传 encoding，则以 ArrayBuffer 格式读取文件的二进制内容
     */
    encoding?: string | FileSystemManagerReadFileParamEncoding;
}
export interface FileSystemManagerReadFileSuccess {
    /**
     * 文件内容
     */
    data: string | ArrayBuffer;
}
/**
 * @enum "fail no such file or directory, open ${filePath}" 指定的 filePath 所在目录不存在
 * @enum "fail permission denied, open ${dirPath}" 指定的 filePath 路径没有读权限
 */
export type FileSystemManagerReadFileFailErrMsg = "fail no such file or directory, open ${filePath}" | "fail permission denied, open ${dirPath}";

export interface FileSystemManagerReadFileFail {
    /**
     * 错误信息
     */
    errMsg: string | FileSystemManagerReadFileFailErrMsg;
}
/**
 * @enum "ascii"
 * @enum "base64"
 * @enum "binary"
 * @enum "hex"
 * @enum "ucs2" 以小端序读取
 * @enum "ucs-2" 以小端序读取
 * @enum "utf16le" 以小端序读取
 * @enum "utf-16le" 以小端序读取
 * @enum "utf-8"
 * @enum "utf8"
 * @enum "latin1"
 */
export type FileSystemManagerReadFileSyncEncoding = "ascii" | "base64" | "binary" | "hex" | "ucs2" | "ucs-2" | "utf16le" | "utf-16le" | "utf-8" | "utf8" | "latin1";

export interface FileSystemManagerRemoveSavedFileParam {
    /**
     * 需要删除的文件路径 (本地路径)
     */
    filePath: string;
}
/**
 * @enum "fail file not exist" 指定的 tempFilePath 找不到文件
 */
export type FileSystemManagerRemoveSavedFileFailErrMsg = "fail file not exist";

export interface FileSystemManagerRemoveSavedFileFail {
    /**
     * 错误信息
     */
    errMsg: string | FileSystemManagerRemoveSavedFileFailErrMsg;
}
export interface FileSystemManagerRenameParam {
    /**
     * 源文件路径，支持本地路径
     */
    oldPath: string;
    /**
     * 新文件路径，支持本地路径
     */
    newPath: string;
}
/**
 * @enum "fail permission denied, rename ${oldPath} -> ${newPath}" 指定源文件或目标文件没有写权限
 * @enum "fail no such file or directory, rename ${oldPath} -> ${newPath}" 源文件不存在，或目标文件路径的上层目录不存在
 */
export type FileSystemManagerRenameFailErrMsg = "fail permission denied, rename ${oldPath} -> ${newPath}" | "fail no such file or directory, rename ${oldPath} -> ${newPath}";

export interface FileSystemManagerRenameFail {
    /**
     * 错误信息
     */
    errMsg: string | FileSystemManagerRenameFailErrMsg;
}
export interface FileSystemManagerRmdirParam {
    /**
     * 要删除的目录路径 (本地路径)
     */
    dirPath: string;
    /**
     * 是否递归删除目录。如果为 true，则删除该目录和该目录下的所有子目录以及文件。
     * @default false
     * @since 2.3.0
     */
    recursive?: boolean;
}
/**
 * @enum "fail no such file or directory ${dirPath}" 目录不存在
 * @enum "fail directory not empty" 目录不为空
 * @enum "fail permission denied, open ${dirPath}" 指定的 dirPath 路径没有写权限
 */
export type FileSystemManagerRmdirFailErrMsg = "fail no such file or directory ${dirPath}" | "fail directory not empty" | "fail permission denied, open ${dirPath}";

export interface FileSystemManagerRmdirFail {
    /**
     * 错误信息
     */
    errMsg: string | FileSystemManagerRmdirFailErrMsg;
}
export interface FileSystemManagerSaveFileParam {
    /**
     * 临时存储文件路径 (本地路径)
     */
    tempFilePath: string;
    /**
     * 要存储的文件路径 (本地路径)
     */
    filePath?: string;
}
export interface FileSystemManagerSaveFileSuccess {
    /**
     * 存储后的文件路径 (本地路径)
     */
    savedFilePath: number;
}
/**
 * @enum "fail tempFilePath file not exist" 指定的 tempFilePath 找不到文件
 * @enum "fail permission denied, open '${filePath}'" 指定的 filePath 路径没有写权限
 * @enum "fail no such file or directory '${dirPath}'" 上级目录不存在
 * @enum "fail the maximum size of the file storage limit is exceeded" 存储空间不足
 */
export type FileSystemManagerSaveFileFailErrMsg = "fail tempFilePath file not exist" | "fail permission denied, open '${filePath}'" | "fail no such file or directory '${dirPath}'" | "fail the maximum size of the file storage limit is exceeded";

export interface FileSystemManagerSaveFileFail {
    /**
     * 错误信息
     */
    errMsg: string | FileSystemManagerSaveFileFailErrMsg;
}
export interface FileSystemManagerStatParam {
    /**
     * 文件/目录路径 (本地路径)
     */
    path: string;
    /**
     * 是否递归获取目录下的每个文件的 Stats 信息
     * @default false
     * @since 2.3.0
     */
    recursive?: boolean;
}
export interface FileSystemManagerStatSuccess {
    /**
     * 当 recursive 为 false 时，res.stats 是一个 Stats 对象。当 recursive 为 true 且 path 是一个目录的路径时，res.stats 是一个 Object，key 以 path 为根路径的相对路径，value 是该路径对应的 Stats 对象。
     */
    stats: Stats | object;
}
/**
 * @enum "fail permission denied, open ${path}" 指定的 path 路径没有读权限
 * @enum "fail no such file or directory ${path}" 文件不存在
 */
export type FileSystemManagerStatFailErrMsg = "fail permission denied, open ${path}" | "fail no such file or directory ${path}";

export interface FileSystemManagerStatFail {
    /**
     * 错误信息
     */
    errMsg: string | FileSystemManagerStatFailErrMsg;
}
export interface FileSystemManagerUnlinkParam {
    /**
     * 要删除的文件路径 (本地路径)
     */
    filePath: string;
}
/**
 * @enum "fail permission denied, open ${path}" 指定的 path 路径没有读权限
 * @enum "fail no such file or directory ${path}" 文件不存在
 * @enum "fail operation not permitted, unlink ${filePath}" 传入的 filePath 是一个目录
 */
export type FileSystemManagerUnlinkFailErrMsg = "fail permission denied, open ${path}" | "fail no such file or directory ${path}" | "fail operation not permitted, unlink ${filePath}";

export interface FileSystemManagerUnlinkFail {
    /**
     * 错误信息
     */
    errMsg: string | FileSystemManagerUnlinkFailErrMsg;
}
export interface FileSystemManagerUnzipParam {
    /**
     * 源文件路径，支持本地路径, 只可以是 zip 压缩文件
     */
    zipFilePath: string;
    /**
     * 目标目录路径, 支持本地路径
     */
    targetPath: string;
}
/**
 * @enum "fail permission denied, unzip ${zipFilePath} -> ${destPath}" 指定目标文件路径没有写权限
 * @enum "fail no such file or directory, unzip ${zipFilePath} -> '${destPath}" 源文件不存在，或目标文件路径的上层目录不存在
 */
export type FileSystemManagerUnzipFailErrMsg = "fail permission denied, unzip ${zipFilePath} -> ${destPath}" | "fail no such file or directory, unzip ${zipFilePath} -> '${destPath}";

export interface FileSystemManagerUnzipFail {
    /**
     * 错误信息
     */
    errMsg: string | FileSystemManagerUnzipFailErrMsg;
}
/**
 * @enum "ascii"
 * @enum "base64"
 * @enum "binary"
 * @enum "hex"
 * @enum "ucs2" 以小端序读取
 * @enum "ucs-2" 以小端序读取
 * @enum "utf16le" 以小端序读取
 * @enum "utf-16le" 以小端序读取
 * @enum "utf-8"
 * @enum "utf8"
 * @enum "latin1"
 */
export type FileSystemManagerWriteFileParamEncoding = "ascii" | "base64" | "binary" | "hex" | "ucs2" | "ucs-2" | "utf16le" | "utf-16le" | "utf-8" | "utf8" | "latin1";

export interface FileSystemManagerWriteFileParam {
    /**
     * 要写入的文件路径 (本地路径)
     */
    filePath: string;
    /**
     * 要写入的文本或二进制数据
     */
    data: string | ArrayBuffer;
    /**
     * 指定写入文件的字符编码
     * @default utf8
     */
    encoding?: string | FileSystemManagerWriteFileParamEncoding;
}
/**
 * @enum "fail no such file or directory, open ${filePath}" 指定的 filePath 所在目录不存在
 * @enum "fail permission denied, open ${dirPath}" 指定的 filePath 路径没有写权限
 * @enum "fail the maximum size of the file storage limit is exceeded" 存储空间不足
 */
export type FileSystemManagerWriteFileFailErrMsg = "fail no such file or directory, open ${filePath}" | "fail permission denied, open ${dirPath}" | "fail the maximum size of the file storage limit is exceeded";

export interface FileSystemManagerWriteFileFail {
    /**
     * 错误信息
     */
    errMsg: string | FileSystemManagerWriteFileFailErrMsg;
}
/**
 * @enum "ascii"
 * @enum "base64"
 * @enum "binary"
 * @enum "hex"
 * @enum "ucs2" 以小端序读取
 * @enum "ucs-2" 以小端序读取
 * @enum "utf16le" 以小端序读取
 * @enum "utf-16le" 以小端序读取
 * @enum "utf-8"
 * @enum "utf8"
 * @enum "latin1"
 */
export type FileSystemManagerWriteFileSyncEncoding = "ascii" | "base64" | "binary" | "hex" | "ucs2" | "ucs-2" | "utf16le" | "utf-16le" | "utf-8" | "utf8" | "latin1";




export interface FileSystemManager {
     /**
      * 判断文件/目录是否存在
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.access.html
      */
      access<T extends FileSystemManagerAccessParam & CallbackParam<void, FileSystemManagerAccessFail>>(param: T): CallbackResult<T, void, void>;
     /**
      * FileSystemManager.access 的同步版本
      * @param path 要判断是否存在的文件/目录路径 (本地路径)
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.accessSync.html
      */
      accessSync(path: string): void;
     /**
      * 在文件结尾追加内容
      * @param param
      * @since 2.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.appendFile.html
      */
      appendFile<T extends FileSystemManagerAppendFileParam & CallbackParam<void, FileSystemManagerAppendFileFail>>(param: T): CallbackResult<T, void, void>;
     /**
      * FileSystemManager.appendFile 的同步版本
      * @param filePath 要追加内容的文件路径 (本地路径)
      * @param data
      * @param encoding 指定写入文件的字符编码
      * @since 2.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.appendFileSync.html
      */
      appendFileSync(filePath: string, data: string|ArrayBuffer, encoding: string | FileSystemManagerAppendFileSyncEncoding): void;
     /**
      * 复制文件
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.copyFile.html
      */
      copyFile<T extends FileSystemManagerCopyFileParam & CallbackParam<void, FileSystemManagerCopyFileFail>>(param: T): CallbackResult<T, void, void>;
     /**
      * FileSystemManager.copyFile 的同步版本
      * @param srcPath 源文件路径，支持本地路径
      * @param destPath 目标文件路径，支持本地路径
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.copyFileSync.html
      */
      copyFileSync(srcPath: string, destPath: string): void;
     /**
      * 获取该小程序下的 本地临时文件 或 本地缓存文件 信息
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.getFileInfo.html
      */
      getFileInfo<T extends FileSystemManagerGetFileInfoParam & CallbackParam<FileSystemManagerGetFileInfoSuccess, FileSystemManagerGetFileInfoFail>>(param: T): CallbackResult<T, FileSystemManagerGetFileInfoSuccess, void>;
     /**
      * 获取该小程序下已保存的本地缓存文件列表
      * @param object
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.getSavedFileList.html
      */
      getSavedFileList(object: CallbackParam<FileSystemManagerGetSavedFileListSuccess, any>): void;
     /**
      * 获取该小程序下已保存的本地缓存文件列表
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.getSavedFileList.html
      */
      getSavedFileList(): Promise<FileSystemManagerGetSavedFileListSuccess>;

     /**
      * 创建目录
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.mkdir.html
      */
      mkdir<T extends FileSystemManagerMkdirParam & CallbackParam<void, FileSystemManagerMkdirFail>>(param: T): CallbackResult<T, void, void>;
     /**
      * FileSystemManager.mkdir 的同步版本
      * @param dirPath 创建的目录路径 (本地路径)
      * @param recursive 基础库 2.3.0 开始支持，低版本需做兼容处理。
      * @since 2.3.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.mkdirSync.html
      */
      mkdirSync(dirPath: string, recursive: boolean): void;
     /**
      * 读取目录内文件列表
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.readdir.html
      */
      readdir<T extends FileSystemManagerReaddirParam & CallbackParam<FileSystemManagerReaddirSuccess, FileSystemManagerReaddirFail>>(param: T): CallbackResult<T, FileSystemManagerReaddirSuccess, void>;
     /**
      * FileSystemManager.readdir 的同步版本
      * @param dirPath 要读取的目录路径 (本地路径)
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.readdirSync.html
      */
      readdirSync(dirPath: string): Array<string>;
     /**
      * 读取本地文件内容
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.readFile.html
      */
      readFile<T extends FileSystemManagerReadFileParam & CallbackParam<FileSystemManagerReadFileSuccess, FileSystemManagerReadFileFail>>(param: T): CallbackResult<T, FileSystemManagerReadFileSuccess, void>;
     /**
      * FileSystemManager.readFile 的同步版本
      * @param filePath 要读取的文件的路径 (本地路径)
      * @param encoding 指定读取文件的字符编码，如果不传 encoding，则以 ArrayBuffer 格式读取文件的二进制内容
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.readFileSync.html
      */
      readFileSync(filePath: string, encoding: string | FileSystemManagerReadFileSyncEncoding): string|ArrayBuffer;
     /**
      * 删除该小程序下已保存的本地缓存文件
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.removeSavedFile.html
      */
      removeSavedFile<T extends FileSystemManagerRemoveSavedFileParam & CallbackParam<void, FileSystemManagerRemoveSavedFileFail>>(param: T): CallbackResult<T, void, void>;
     /**
      * 重命名文件。可以把文件从 oldPath 移动到 newPath
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.rename.html
      */
      rename<T extends FileSystemManagerRenameParam & CallbackParam<void, FileSystemManagerRenameFail>>(param: T): CallbackResult<T, void, void>;
     /**
      * FileSystemManager.rename 的同步版本
      * @param oldPath 源文件路径，支持本地路径
      * @param newPath 新文件路径，支持本地路径
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.renameSync.html
      */
      renameSync(oldPath: string, newPath: string): void;
     /**
      * 删除目录
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.rmdir.html
      */
      rmdir<T extends FileSystemManagerRmdirParam & CallbackParam<void, FileSystemManagerRmdirFail>>(param: T): CallbackResult<T, void, void>;
     /**
      * FileSystemManager.rmdir 的同步版本
      * @param dirPath 要删除的目录路径 (本地路径)
      * @param recursive 基础库 2.3.0 开始支持，低版本需做兼容处理。
      * @since 2.3.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.rmdirSync.html
      */
      rmdirSync(dirPath: string, recursive: boolean): void;
     /**
      * 保存临时文件到本地。此接口会移动临时文件，因此调用成功后，tempFilePath 将不可用。
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.saveFile.html
      */
      saveFile<T extends FileSystemManagerSaveFileParam & CallbackParam<FileSystemManagerSaveFileSuccess, FileSystemManagerSaveFileFail>>(param: T): CallbackResult<T, FileSystemManagerSaveFileSuccess, void>;
     /**
      * FileSystemManager.saveFile 的同步版本
      * @param tempFilePath 临时存储文件路径 (本地路径)
      * @param filePath 要存储的文件路径 (本地路径)
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.saveFileSync.html
      */
      saveFileSync(tempFilePath: string, filePath: string): number;
     /**
      * 获取文件 Stats 对象
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.stat.html
      */
      stat<T extends FileSystemManagerStatParam & CallbackParam<FileSystemManagerStatSuccess, FileSystemManagerStatFail>>(param: T): CallbackResult<T, FileSystemManagerStatSuccess, void>;
     /**
      * FileSystemManager.stat 的同步版本
      * @param path 文件/目录路径 (本地路径)
      * @param recursive 基础库 2.3.0 开始支持，低版本需做兼容处理。
      * @since 2.3.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.statSync.html
      */
      statSync(path: string, recursive: boolean): Stats|object;
     /**
      * 删除文件
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.unlink.html
      */
      unlink<T extends FileSystemManagerUnlinkParam & CallbackParam<void, FileSystemManagerUnlinkFail>>(param: T): CallbackResult<T, void, void>;
     /**
      * FileSystemManager.unlink 的同步版本
      * @param filePath 要删除的文件路径 (本地路径)
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.unlinkSync.html
      */
      unlinkSync(filePath: string): void;
     /**
      * 解压文件
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.unzip.html
      */
      unzip<T extends FileSystemManagerUnzipParam & CallbackParam<void, FileSystemManagerUnzipFail>>(param: T): CallbackResult<T, void, void>;
     /**
      * 写文件
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.writeFile.html
      */
      writeFile<T extends FileSystemManagerWriteFileParam & CallbackParam<void, FileSystemManagerWriteFileFail>>(param: T): CallbackResult<T, void, void>;
     /**
      * FileSystemManager.writeFile 的同步版本
      * @param filePath 要写入的文件路径 (本地路径)
      * @param data
      * @param encoding 指定写入文件的字符编码
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.writeFileSync.html
      */
      writeFileSync(filePath: string, data: string|ArrayBuffer, encoding: string | FileSystemManagerWriteFileSyncEncoding): void;
}



export interface Stats {
     /**
      * 判断当前文件是否一个目录
      * @return 表示当前文件是否一个目录
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/file/Stats.isDirectory.html
      */
      isDirectory(): boolean;
     /**
      * 判断当前文件是否一个普通文件
      * @return 表示当前文件是否一个普通文件
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/file/Stats.isFile.html
      */
      isFile(): boolean;
}



export interface UserInfo {
}



export interface AuthSetting {
}



export interface IBeaconInfo {
}



export interface WifiInfo {
}
export interface WorkerOnMessageResult {
    /**
     * 主线程/Worker 线程向当前线程发送的消息
     */
    message: object;
}



export interface Worker {
     /**
      * 监听主线程/Worker 线程向当前线程发送的消息的事件。
      * @param callback 主线程/Worker 线程向当前线程发送的消息的事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/worker/Worker.onMessage.html
      */
      onMessage(callback: Function): WorkerOnMessageResult;
     /**
      * 向主线程/Worker 线程发送的消息。
      * @param message 需要发送的消息，必须是一个可序列化的 JavaScript key-value 形式的对象。
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/worker/Worker.postMessage.html
      */
      postMessage(message: object): void;
     /**
      * 结束当前 Worker 线程。仅限在主线程 worker 对象上调用。
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/worker/Worker.terminate.html
      */
      terminate(): void;
}
export interface IntersectionObserverObserveResultIntersectionRect {
    /**
     * 左边界
     */
    left: number;
    /**
     * 右边界
     */
    right: number;
    /**
     * 上边界
     */
    top: number;
    /**
     * 下边界
     */
    bottom: number;
    /**
     * 宽度
     */
    width: number;
    /**
     * 高度
     */
    height: number;
}
export interface IntersectionObserverObserveResultBoundingClientRect {
    /**
     * 左边界
     */
    left: number;
    /**
     * 右边界
     */
    right: number;
    /**
     * 上边界
     */
    top: number;
    /**
     * 下边界
     */
    bottom: number;
    /**
     * 宽度
     */
    width: number;
    /**
     * 高度
     */
    height: number;
}
export interface IntersectionObserverObserveResultRelativeRect {
    /**
     * 左边界
     */
    left: number;
    /**
     * 右边界
     */
    right: number;
    /**
     * 上边界
     */
    top: number;
    /**
     * 下边界
     */
    bottom: number;
}
export interface IntersectionObserverObserveResult {
    /**
     * 相交比例
     */
    intersectionRatio: number;
    /**
     * 相交区域的边界
     */
    intersectionRect: IntersectionObserverObserveResultIntersectionRect;
    /**
     * 目标边界
     */
    boundingClientRect: IntersectionObserverObserveResultBoundingClientRect;
    /**
     * 参照区域的边界
     */
    relativeRect: IntersectionObserverObserveResultRelativeRect;
    /**
     * 相交检测时的时间戳
     */
    time: number;
}



export interface IntersectionObserver {
     /**
      * 停止监听。回调函数将不再触发
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.disconnect.html
      */
      disconnect(): void;
     /**
      * 指定目标节点并开始监听相交状态变化情况
      * @param targetSelector 选择器
      * @param callback 监听相交状态变化的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.observe.html
      */
      observe(targetSelector: string, callback: Function): IntersectionObserverObserveResult;
     /**
      * 使用选择器指定一个节点，作为参照区域之一。
      * @param selector 选择器
      * @param margins 用来扩展（或收缩）参照节点布局区域的边界
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.relativeTo.html
      */
      relativeTo(selector: string, margins: object): IntersectionObserver;
     /**
      * 指定页面显示区域作为参照区域之一
      * @param margins 用来扩展（或收缩）参照节点布局区域的边界
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.relativeToViewport.html
      */
      relativeToViewport(margins: object): IntersectionObserver;
}
export interface NodesRefBoundingClientRectResult {
    /**
     * 节点的 ID
     */
    id: string;
    /**
     * 节点的 dataset
     */
    dataset: object;
    /**
     * 节点的左边界坐标
     */
    left: number;
    /**
     * 节点的右边界坐标
     */
    right: number;
    /**
     * 节点的上边界坐标
     */
    top: number;
    /**
     * 节点的下边界坐标
     */
    bottom: number;
    /**
     * 节点的宽度
     */
    width: number;
    /**
     * 节点的高度
     */
    height: number;
}
export interface NodesRefContextResult {
    /**
     * 节点对应的 Context 对象
     */
    context: object;
}
export interface NodesRefFieldsFields {
    /**
     * 是否返回节点 id
     * @default false
     */
    id?: boolean;
    /**
     * 是否返回节点 dataset
     * @default false
     */
    dataset?: boolean;
    /**
     * 是否返回节点 mark
     * @default false
     */
    mark?: boolean;
    /**
     * 是否返回节点布局位置（left right top bottom）
     * @default false
     */
    rect?: boolean;
    /**
     * 是否返回节点尺寸（width height）
     * @default false
     */
    size?: boolean;
    /**
     * 否 是否返回节点的 scrollLeft scrollTop，节点必须是 scroll-view 或者 viewport
     * @default false
     */
    scrollOffset?: boolean;
    /**
     * 指定属性名列表，返回节点对应属性名的当前属性值（只能获得组件文档中标注的常规属性值，id class style 和事件绑定的属性值不可获取）
     * @default []
     */
    properties?: Array<string>;
    /**
     * 指定样式名列表，返回节点对应样式名的当前值
     * @default []
     * @since 2.1.0
     */
    computedStyle?: Array<string>;
    /**
     * 是否返回节点对应的 Context 对象
     * @default false
     * @since 2.4.2
     */
    context?: boolean;
    /**
     * 是否返回节点对应的 Node 实例
     * @default false
     * @since 2.7.0
     */
    node?: boolean;
}
export interface NodesRefNodeResult {
    /**
     * 节点对应的 Node 实例
     */
    node: object;
}
export interface NodesRefScrollOffsetResult {
    /**
     * 节点的 ID
     */
    id: string;
    /**
     * 节点的 dataset
     */
    dataset: object;
    /**
     * 节点的水平滚动位置
     */
    scrollLeft: number;
    /**
     * 节点的竖直滚动位置
     */
    scrollTop: number;
}



export interface NodesRef {
     /**
      * 添加节点的布局位置的查询请求。相对于显示区域，以像素为单位。其功能类似于 DOM 的 getBoundingClientRect。返回 NodesRef 对应的 SelectorQuery。
      * @param callback 回调函数，在执行 SelectorQuery.exec 方法后，节点信息会在 callback 中返回。
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.boundingClientRect.html
      */
      boundingClientRect(callback: Function): NodesRefBoundingClientRectResult;
     /**
      * 添加节点的 Context 对象查询请求。目前支持 VideoContext、CanvasContext、LivePlayerContext、EditorContext和 MapContext 的获取。
      * @param callback 回调函数，在执行 SelectorQuery.exec 方法后，返回节点信息。
      * @since 2.4.2
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.context.html
      */
      context(callback: Function): NodesRefContextResult;
     /**
      * 获取节点的相关信息。需要获取的字段在fields中指定。返回值是 nodesRef 对应的 selectorQuery
      * @param fields
      * @param callback 回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.fields.html
      */
      fields(fields: NodesRefFieldsFields, callback: Function): SelectorQuery;
     /**
      * 获取 Node 节点实例。目前支持 Canvas 的获取。
      * @param callback 回调函数，在执行 SelectorQuery.exec 方法后，返回节点信息。
      * @since 2.7.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.node.html
      */
      node(callback: Function): NodesRefNodeResult;
     /**
      * 添加节点的滚动位置查询请求。以像素为单位。节点必须是 scroll-view 或者 viewport，返回 NodesRef 对应的 SelectorQuery。
      * @param callback 回调函数，在执行 SelectorQuery.exec 方法后，节点信息会在 callback 中返回。
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.scrollOffset.html
      */
      scrollOffset(callback: Function): NodesRefScrollOffsetResult;
}



export interface SelectorQuery {
     /**
      * 执行所有的请求。请求结果按请求次序构成数组，在callback的第一个参数中返回。
      * @param callback 回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.exec.html
      */
      exec(callback: Function): NodesRef;
     /**
      * 将选择器的选取范围更改为自定义组件 component 内。（初始时，选择器仅选取页面范围的节点，不会选取任何自定义组件中的节点）。
      * @param component 自定义组件实例
      * @since 1.6.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.in.html
      */
      in(component: Component): SelectorQuery;
     /**
      * 在当前页面下选择第一个匹配选择器 selector 的节点。返回一个 NodesRef 对象实例，可以用于获取节点信息。
      * @param selector 选择器
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.select.html
      */
      select(selector: string): NodesRef;
     /**
      * 在当前页面下选择匹配选择器 selector 的所有节点。
      * @param selector 选择器
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.selectAll.html
      */
      selectAll(selector: string): NodesRef;
     /**
      * 选择显示区域。可用于获取显示区域的尺寸、滚动位置等信息。
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.selectViewport.html
      */
      selectViewport(): NodesRef;
}
/**
 * @enum 1000 后端接口调用失败
 * @enum 1001 参数错误
 * @enum 1002 广告单元无效
 * @enum 1003 内部错误
 * @enum 1004 无合适的广告
 * @enum 1005 广告组件审核中
 * @enum 1006 广告组件被驳回
 * @enum 1007 广告组件被封禁
 * @enum 1008 广告单元已关闭
 */
export type InterstitialAdOnErrorResultErrCode = 1000 | 1001 | 1002 | 1003 | 1004 | 1005 | 1006 | 1007 | 1008;

export interface InterstitialAdOnErrorResult {
    /**
     * 错误信息
     */
    errMsg: string;
    /**
     * 错误码
     */
    errCode: number | InterstitialAdOnErrorResultErrCode;
}



export interface InterstitialAd {
     /**
      * 销毁插屏广告实例。
      * @since 2.8.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.destroy.html
      */
      destroy(): void;
     /**
      * 加载插屏广告。
      * @return 插屏广告加载数据的结果
      * @since 2.8.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.load.html
      */
      load(): Promise<any>;
     /**
      * 取消监听插屏广告关闭事件
      * @param callback 插屏广告关闭事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.offClose.html
      */
      offClose(callback: Function): void;
     /**
      * 取消监听插屏错误事件
      * @param callback 插屏错误事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.offError.html
      */
      offError(callback: Function): void;
     /**
      * 取消监听插屏广告加载事件
      * @param callback 插屏广告加载事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.offLoad.html
      */
      offLoad(callback: Function): void;
     /**
      * 监听插屏广告关闭事件。
      * @param callback 插屏广告关闭事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.onClose.html
      */
      onClose(callback: Function): void;
     /**
      * 监听插屏错误事件。
      * @param callback 插屏错误事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.onError.html
      */
      onError(callback: Function): InterstitialAdOnErrorResult;
     /**
      * 监听插屏广告加载事件。
      * @param callback 插屏广告加载事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.onLoad.html
      */
      onLoad(callback: Function): void;
     /**
      * 显示插屏广告。
      * @return 插屏广告显示操作的结果
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.show.html
      */
      show(): Promise<any>;
}
export interface RewardedVideoAdOnCloseResult {
    /**
     * 视频是否是在用户完整观看的情况下被关闭的
     * @since 2.1.0
     */
    isEnded: boolean;
}
/**
 * @enum 1000 后端接口调用失败
 * @enum 1001 参数错误
 * @enum 1002 广告单元无效
 * @enum 1003 内部错误
 * @enum 1004 无合适的广告
 * @enum 1005 广告组件审核中
 * @enum 1006 广告组件被驳回
 * @enum 1007 广告组件被封禁
 * @enum 1008 广告单元已关闭
 */
export type RewardedVideoAdOnErrorResultErrCode = 1000 | 1001 | 1002 | 1003 | 1004 | 1005 | 1006 | 1007 | 1008;

export interface RewardedVideoAdOnErrorResult {
    /**
     * 错误信息
     */
    errMsg: string;
    /**
     * 错误码
     * @since 2.2.2
     */
    errCode: number | RewardedVideoAdOnErrorResultErrCode;
}



export interface RewardedVideoAd {
     /**
      * 销毁激励视频广告实例。
      * @since 2.8.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.destroy.html
      */
      destroy(): void;
     /**
      * 加载激励视频广告。
      * @return 激励视频广告加载数据的结果
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.load.html
      */
      load(): Promise<any>;
     /**
      * 取消监听用户点击 关闭广告 按钮的事件
      * @param callback 用户点击 关闭广告 按钮的事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.offClose.html
      */
      offClose(callback: Function): void;
     /**
      * 取消监听激励视频错误事件
      * @param callback 激励视频错误事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.offError.html
      */
      offError(callback: Function): void;
     /**
      * 取消监听激励视频广告加载事件
      * @param callback 激励视频广告加载事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.offLoad.html
      */
      offLoad(callback: Function): void;
     /**
      * 监听用户点击 关闭广告 按钮的事件。
      * @param callback 用户点击 关闭广告 按钮的事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.onClose.html
      */
      onClose(callback: Function): RewardedVideoAdOnCloseResult;
     /**
      * 监听激励视频错误事件。
      * @param callback 激励视频错误事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.onError.html
      */
      onError(callback: Function): RewardedVideoAdOnErrorResult;
     /**
      * 监听激励视频广告加载事件。
      * @param callback 激励视频广告加载事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.onLoad.html
      */
      onLoad(callback: Function): void;
     /**
      * 显示激励视频广告。激励视频广告将从屏幕下方推入。
      * @return 激励视频广告显示操作的结果
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.show.html
      */
      show(): Promise<any>;
}
export interface GetSystemInfoSyncResultSafeArea {
    /**
     * 安全区域左上角横坐标
     */
    left: number;
    /**
     * 安全区域右下角横坐标
     */
    right: number;
    /**
     * 安全区域左上角纵坐标
     */
    top: number;
    /**
     * 安全区域右下角纵坐标
     */
    bottom: number;
    /**
     * 安全区域的宽度，单位逻辑像素
     */
    width: number;
    /**
     * 安全区域的高度，单位逻辑像素
     */
    height: number;
}
export interface GetSystemInfoSyncResult {
    /**
     * 设备品牌
     * @since 1.5.0
     */
    brand: string;
    /**
     * 设备型号
     */
    model: string;
    /**
     * 设备像素比
     */
    pixelRatio: number;
    /**
     * 屏幕宽度，单位px
     * @since 1.1.0
     */
    screenWidth: number;
    /**
     * 屏幕高度，单位px
     * @since 1.1.0
     */
    screenHeight: number;
    /**
     * 可使用窗口宽度，单位px
     */
    windowWidth: number;
    /**
     * 可使用窗口高度，单位px
     */
    windowHeight: number;
    /**
     * 状态栏的高度，单位px
     * @since 1.9.0
     */
    statusBarHeight: number;
    /**
     * 微信设置的语言
     */
    language: string;
    /**
     * 微信版本号
     */
    version: string;
    /**
     * 操作系统及版本
     */
    system: string;
    /**
     * 客户端平台
     */
    platform: string;
    /**
     * 用户字体大小（单位px）。以微信客户端「我-设置-通用-字体大小」中的设置为准
     * @since 1.5.0
     */
    fontSizeSetting: number;
    /**
     * 客户端基础库版本
     * @since 1.1.0
     */
    SDKVersion: string;
    /**
     * 设备性能等级（仅Android小游戏）。取值为：-2 或 0（该设备无法运行小游戏），-1（性能未知），>=1（设备性能值，该值越高，设备性能越好，目前最高不到50）
     * @since 1.8.0
     */
    benchmarkLevel: number;
    /**
     * 允许微信使用相册的开关（仅 iOS 有效）
     * @since 2.6.0
     */
    albumAuthorized: boolean;
    /**
     * 允许微信使用摄像头的开关
     * @since 2.6.0
     */
    cameraAuthorized: boolean;
    /**
     * 允许微信使用定位的开关
     * @since 2.6.0
     */
    locationAuthorized: boolean;
    /**
     * 允许微信使用麦克风的开关
     * @since 2.6.0
     */
    microphoneAuthorized: boolean;
    /**
     * 允许微信通知的开关
     * @since 2.6.0
     */
    notificationAuthorized: boolean;
    /**
     * 允许微信通知带有提醒的开关（仅 iOS 有效）
     * @since 2.6.0
     */
    notificationAlertAuthorized: boolean;
    /**
     * 允许微信通知带有标记的开关（仅 iOS 有效）
     * @since 2.6.0
     */
    notificationBadgeAuthorized: boolean;
    /**
     * 允许微信通知带有声音的开关（仅 iOS 有效）
     * @since 2.6.0
     */
    notificationSoundAuthorized: boolean;
    /**
     * 蓝牙的系统开关
     * @since 2.6.0
     */
    bluetoothEnabled: boolean;
    /**
     * 地理位置的系统开关
     * @since 2.6.0
     */
    locationEnabled: boolean;
    /**
     * Wi-Fi 的系统开关
     * @since 2.6.0
     */
    wifiEnabled: boolean;
    /**
     * 在竖屏正方向下的安全区域
     * @since 2.7.0
     */
    safeArea: GetSystemInfoSyncResultSafeArea;
}
export interface GetSystemInfoSuccessSafeArea {
    /**
     * 安全区域左上角横坐标
     */
    left: number;
    /**
     * 安全区域右下角横坐标
     */
    right: number;
    /**
     * 安全区域左上角纵坐标
     */
    top: number;
    /**
     * 安全区域右下角纵坐标
     */
    bottom: number;
    /**
     * 安全区域的宽度，单位逻辑像素
     */
    width: number;
    /**
     * 安全区域的高度，单位逻辑像素
     */
    height: number;
}
export interface GetSystemInfoSuccess {
    /**
     * 设备品牌
     * @since 1.5.0
     */
    brand: string;
    /**
     * 设备型号
     */
    model: string;
    /**
     * 设备像素比
     */
    pixelRatio: number;
    /**
     * 屏幕宽度，单位px
     * @since 1.1.0
     */
    screenWidth: number;
    /**
     * 屏幕高度，单位px
     * @since 1.1.0
     */
    screenHeight: number;
    /**
     * 可使用窗口宽度，单位px
     */
    windowWidth: number;
    /**
     * 可使用窗口高度，单位px
     */
    windowHeight: number;
    /**
     * 状态栏的高度，单位px
     * @since 1.9.0
     */
    statusBarHeight: number;
    /**
     * 微信设置的语言
     */
    language: string;
    /**
     * 微信版本号
     */
    version: string;
    /**
     * 操作系统及版本
     */
    system: string;
    /**
     * 客户端平台
     */
    platform: string;
    /**
     * 用户字体大小（单位px）。以微信客户端「我-设置-通用-字体大小」中的设置为准
     * @since 1.5.0
     */
    fontSizeSetting: number;
    /**
     * 客户端基础库版本
     * @since 1.1.0
     */
    SDKVersion: string;
    /**
     * 设备性能等级（仅Android小游戏）。取值为：-2 或 0（该设备无法运行小游戏），-1（性能未知），>=1（设备性能值，该值越高，设备性能越好，目前最高不到50）
     * @since 1.8.0
     */
    benchmarkLevel: number;
    /**
     * 允许微信使用相册的开关（仅 iOS 有效）
     * @since 2.6.0
     */
    albumAuthorized: boolean;
    /**
     * 允许微信使用摄像头的开关
     * @since 2.6.0
     */
    cameraAuthorized: boolean;
    /**
     * 允许微信使用定位的开关
     * @since 2.6.0
     */
    locationAuthorized: boolean;
    /**
     * 允许微信使用麦克风的开关
     * @since 2.6.0
     */
    microphoneAuthorized: boolean;
    /**
     * 允许微信通知的开关
     * @since 2.6.0
     */
    notificationAuthorized: boolean;
    /**
     * 允许微信通知带有提醒的开关（仅 iOS 有效）
     * @since 2.6.0
     */
    notificationAlertAuthorized: boolean;
    /**
     * 允许微信通知带有标记的开关（仅 iOS 有效）
     * @since 2.6.0
     */
    notificationBadgeAuthorized: boolean;
    /**
     * 允许微信通知带有声音的开关（仅 iOS 有效）
     * @since 2.6.0
     */
    notificationSoundAuthorized: boolean;
    /**
     * 蓝牙的系统开关
     * @since 2.6.0
     */
    bluetoothEnabled: boolean;
    /**
     * 地理位置的系统开关
     * @since 2.6.0
     */
    locationEnabled: boolean;
    /**
     * Wi-Fi 的系统开关
     * @since 2.6.0
     */
    wifiEnabled: boolean;
    /**
     * 在竖屏正方向下的安全区域
     * @since 2.7.0
     */
    safeArea: GetSystemInfoSuccessSafeArea;
}
export interface GetLaunchOptionsSyncResultReferrerInfo {
    /**
     * 来源小程序、公众号或 App 的 appId
     */
    appId: string;
    /**
     * 来源小程序传过来的数据，scene=1037或1038时支持
     */
    extraData: object;
}
export interface GetLaunchOptionsSyncResult {
    /**
     * 启动小程序的路径 (代码包路径)
     */
    path: string;
    /**
     * 启动小程序的场景值
     */
    scene: number;
    /**
     * 启动小程序的 query 参数
     */
    query: object;
    /**
     * shareTicket，详见获取更多转发信息
     */
    shareTicket: string;
    /**
     * 来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 {}。(参见后文注意)
     */
    referrerInfo: GetLaunchOptionsSyncResultReferrerInfo;
}
export interface OnPageNotFoundResult {
    /**
     * 不存在页面的路径 (代码包路径)
     */
    path: string;
    /**
     * 打开不存在页面的 query 参数
     */
    query: object;
    /**
     * 是否本次启动的首个页面（例如从分享等入口进来，首个页面是开发者配置的分享页面）
     */
    isEntryPage: boolean;
}
export interface OnAppShowResultReferrerInfo {
    /**
     * 来源小程序、公众号或 App 的 appId
     */
    appId: string;
    /**
     * 来源小程序传过来的数据，scene=1037或1038时支持
     */
    extraData: object;
}
export interface OnAppShowResult {
    /**
     * 小程序切前台的路径 (代码包路径)
     */
    path: string;
    /**
     * 小程序切前台的场景值
     */
    scene: number;
    /**
     * 小程序切前台的 query 参数
     */
    query: object;
    /**
     * shareTicket，详见获取更多转发信息
     */
    shareTicket: string;
    /**
     * 来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 {}。(参见后文注意)
     */
    referrerInfo: OnAppShowResultReferrerInfo;
}
export interface SetEnableDebugParam {
    /**
     * 是否打开调试
     */
    enableDebug: boolean;
}
export interface GetLogManagerParam {
    /**
     * 取值为0/1，取值为0表示是否会把 App、Page 的生命周期函数和 wx 命名空间下的函数调用写入日志，取值为1则不会。默认值是 0
     * @default 0
     * @since 2.3.2
     */
    level?: number;
}
export interface SwitchTabParam {
    /**
     * 需要跳转的 tabBar 页面的路径 (代码包路径)（需在 app.json 的 tabBar 字段定义的页面），路径后不能带参数。
     */
    url: string;
}
export interface ReLaunchParam {
    /**
     * 需要跳转的应用内页面路径 (代码包路径)，路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2'
     */
    url: string;
}
export interface RedirectToParam {
    /**
     * 需要跳转的应用内非 tabBar 的页面的路径 (代码包路径), 路径后可以带参数。参数与路径之间使用 ? 分隔，参数键与参数值用 = 相连，不同参数用 & 分隔；如 'path?key=value&key2=value2'
     */
    url: string;
}
export interface NavigateToParam {
    /**
     * 需要跳转的应用内非 tabBar 的页面的路径 (代码包路径), 路径后可以带参数。参数与路径之间使用 ? 分隔，参数键与参数值用 = 相连，不同参数用 & 分隔；如 'path?key=value&key2=value2'
     */
    url: string;
    /**
     * 页面间通信接口，用于监听被打开页面发送到当前页面的数据。基础库 2.7.3 开始支持。
     */
    events?: object;
}
export interface NavigateToSuccess {
    /**
     * 和被打开页面进行通信
     */
    eventChannel: EventChannel;
}
export interface NavigateBackParam {
    /**
     * 返回的页面数，如果 delta 大于现有页面数，则返回到首页。
     * @default 1
     */
    delta?: number;
}
/**
 * @enum "success" 显示成功图标，此时 title 文本最多显示 7 个汉字长度
 * @enum "loading" 显示加载图标，此时 title 文本最多显示 7 个汉字长度
 * @enum "none" 不显示图标，此时 title 文本最多可显示两行，1.9.0及以上版本支持
 */
export type ShowToastParamIcon = "success" | "loading" | "none";

export interface ShowToastParam {
    /**
     * 提示的内容
     */
    title: string;
    /**
     * 图标
     * @default 'success'
     */
    icon?: string | ShowToastParamIcon;
    /**
     * 自定义图标的本地路径，image 的优先级高于 icon
     * @since 1.1.0
     */
    image?: string;
    /**
     * 提示的延迟时间
     * @default 1500
     */
    duration?: number;
    /**
     * 是否显示透明蒙层，防止触摸穿透
     * @default false
     */
    mask?: boolean;
}
export interface ShowModalParam {
    /**
     * 提示的标题
     */
    title?: string;
    /**
     * 提示的内容
     */
    content?: string;
    /**
     * 是否显示取消按钮
     * @default true
     */
    showCancel?: boolean;
    /**
     * 取消按钮的文字，最多 4 个字符
     * @default '取消'
     */
    cancelText?: string;
    /**
     * 取消按钮的文字颜色，必须是 16 进制格式的颜色字符串
     * @default #000000
     */
    cancelColor?: string;
    /**
     * 确认按钮的文字，最多 4 个字符
     * @default '确定'
     */
    confirmText?: string;
    /**
     * 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串
     * @default #576B95
     */
    confirmColor?: string;
}
export interface ShowModalSuccess {
    /**
     * 为 true 时，表示用户点击了确定按钮
     */
    confirm: boolean;
    /**
     * 为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭）
     * @since 1.1.0
     */
    cancel: boolean;
}
export interface ShowLoadingParam {
    /**
     * 提示的内容
     */
    title: string;
    /**
     * 是否显示透明蒙层，防止触摸穿透
     * @default false
     */
    mask?: boolean;
}
export interface ShowActionSheetParam {
    /**
     * 按钮的文字数组，数组长度最大为 6
     */
    itemList: Array<string>;
    /**
     * 按钮的文字颜色
     * @default #000000
     */
    itemColor?: string;
}
export interface ShowActionSheetSuccess {
    /**
     * 用户点击的按钮序号，从上到下的顺序，从0开始
     */
    tapIndex: number;
}
export interface SetNavigationBarTitleParam {
    /**
     * 页面标题
     */
    title: string;
}
/**
 * @enum "linear'" 动画从头到尾的速度是相同的
 * @enum "easeIn'" 动画以低速开始
 * @enum "easeOut'" 动画以低速结束
 * @enum "easeInOut'" 动画以低速开始和结束
 */
export type SetNavigationBarColorParamAnimationTimingFunc = "linear'" | "easeIn'" | "easeOut'" | "easeInOut'";

export interface SetNavigationBarColorParamAnimation {
    /**
     * 动画变化时间，单位 ms
     * @default 0
     */
    duration?: number;
    /**
     * 动画变化方式
     * @default 'linear'
     */
    timingFunc?: string | SetNavigationBarColorParamAnimationTimingFunc;
}
export interface SetNavigationBarColorParam {
    /**
     * 前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000
     */
    frontColor: string;
    /**
     * 背景颜色值，有效值为十六进制颜色
     */
    backgroundColor: string;
    /**
     * 动画效果
     */
    animation?: SetNavigationBarColorParamAnimation;
}
/**
 * @enum "dark" dark 样式
 * @enum "light" light 样式
 */
export type SetBackgroundTextStyleParamTextStyle = "dark" | "light";

export interface SetBackgroundTextStyleParam {
    /**
     * 下拉背景字体、loading 图的样式。
     */
    textStyle: string | SetBackgroundTextStyleParamTextStyle;
}
export interface SetBackgroundColorParam {
    /**
     * 窗口的背景色，必须为十六进制颜色值
     */
    backgroundColor?: string;
    /**
     * 顶部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持
     */
    backgroundColorTop?: string;
    /**
     * 底部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持
     */
    backgroundColorBottom?: string;
}
export interface ShowTabBarRedDotParam {
    /**
     * tabBar 的哪一项，从左边算起
     */
    index: number;
}
export interface ShowTabBarParam {
    /**
     * 是否需要动画效果
     * @default false
     */
    animation?: boolean;
}
export interface SetTabBarStyleParam {
    /**
     * tab 上的文字默认颜色，HexColor
     */
    color?: string;
    /**
     * tab 上的文字选中时的颜色，HexColor
     */
    selectedColor?: string;
    /**
     * tab 的背景色，HexColor
     */
    backgroundColor?: string;
    /**
     * tabBar上边框的颜色， 仅支持 black/white
     */
    borderStyle?: string;
}
export interface SetTabBarItemParam {
    /**
     * tabBar 的哪一项，从左边算起
     */
    index: number;
    /**
     * tab 上的按钮文字
     */
    text?: string;
    /**
     * 图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，当 postion 为 top 时，此参数无效
     */
    iconPath?: string;
    /**
     * 选中时的图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px ，当 postion 为 top 时，此参数无效
     */
    selectedIconPath?: string;
}
export interface SetTabBarBadgeParam {
    /**
     * tabBar 的哪一项，从左边算起
     */
    index: number;
    /**
     * 显示的文本，超过 4 个字符则显示成 ...
     */
    text: string;
}
export interface RemoveTabBarBadgeParam {
    /**
     * tabBar 的哪一项，从左边算起
     */
    index: number;
}
export interface HideTabBarRedDotParam {
    /**
     * tabBar 的哪一项，从左边算起
     */
    index: number;
}
export interface HideTabBarParam {
    /**
     * 是否需要动画效果
     * @default false
     */
    animation?: boolean;
}
export interface LoadFontFaceParamDesc {
    /**
     * 字体样式，可选值为 normal / italic / oblique
     * @default 'normal'
     */
    style?: string;
    /**
     * 字体粗细，可选值为 normal / bold / 100 / 200../ 900
     * @default 'normal'
     */
    weight?: string;
    /**
     * 设置小型大写字母的字体显示文本，可选值为 normal / small-caps / inherit
     * @default 'normal'
     */
    variant?: string;
}
export interface LoadFontFaceParam {
    /**
     * 定义的字体名称
     */
    family: string;
    /**
     * 字体资源的地址。建议格式为 TTF 和 WOFF，WOFF2 在低版本的iOS上会不兼容。
     */
    source: string;
    /**
     * 可选的字体描述符
     */
    desc?: LoadFontFaceParamDesc;
}
export interface LoadFontFaceSuccess {
    /**
     * 加载字体结果
     */
    status: string;
}
export interface LoadFontFaceFail {
    /**
     * 加载字体结果
     */
    status: string;
}
export interface LoadFontFaceComplete {
    /**
     * 加载字体结果
     */
    status: string;
}
export interface PageScrollToParam {
    /**
     * 滚动到页面的目标位置，单位 px
     */
    scrollTop?: number;
    /**
     * 滚动动画的时长，单位 ms
     * @default 300
     */
    duration?: number;
    /**
     * 选择器
     * @since 2.7.3
     */
    selector?: string;
}
/**
 * @enum "linear'" 动画从头到尾的速度是相同的
 * @enum "ease'" 动画以低速开始，然后加快，在结束前变慢
 * @enum "ease-in'" 动画以低速开始
 * @enum "ease-in-out'" 动画以低速开始和结束
 * @enum "ease-out'" 动画以低速结束
 * @enum "step-start'" 动画第一帧就跳至结束状态直到结束
 * @enum "step-end'" 动画一直保持开始状态，最后一帧跳到结束状态
 */
export type CreateAnimationParamTimingFunction = "linear'" | "ease'" | "ease-in'" | "ease-in-out'" | "ease-out'" | "step-start'" | "step-end'";

export interface CreateAnimationParam {
    /**
     * 动画持续时间，单位 ms
     * @default 400
     */
    duration?: number;
    /**
     * 动画的效果
     * @default 'linear'
     */
    timingFunction?: string | CreateAnimationParamTimingFunction;
    /**
     * 动画延迟时间，单位 ms
     * @default 0
     */
    delay?: number;
    /**
     * @default '50% 50% 0'
     */
    transformOrigin?: string;
}
export interface SetTopBarTextParam {
    /**
     * 置顶栏文字
     */
    text: string;
}
export interface GetMenuButtonBoundingClientRectResult {
    /**
     * 宽度，单位：px
     */
    width: number;
    /**
     * 高度，单位：px
     */
    height: number;
    /**
     * 上边界坐标，单位：px
     */
    top: number;
    /**
     * 右边界坐标，单位：px
     */
    right: number;
    /**
     * 下边界坐标，单位：px
     */
    bottom: number;
    /**
     * 左边界坐标，单位：px
     */
    left: number;
}
export interface OnWindowResizeResultSize {
    /**
     * 变化后的窗口宽度，单位 px
     */
    windowWidth: number;
    /**
     * 变化后的窗口高度，单位 px
     */
    windowHeight: number;
}
export interface OnWindowResizeResult {
    /**
     */
    size: OnWindowResizeResultSize;
}
export interface OnKeyboardHeightChangeResult {
    /**
     * 键盘高度
     */
    height: number;
}
export interface GetSelectedTextRangeSuccess {
    /**
     * 输入框光标起始位置
     */
    start: number;
    /**
     * 输入框光标结束位置
     */
    end: number;
}
/**
 * @enum "OPTIONS" HTTP 请求 OPTIONS
 * @enum "GET" HTTP 请求 GET
 * @enum "HEAD" HTTP 请求 HEAD
 * @enum "POST" HTTP 请求 POST
 * @enum "PUT" HTTP 请求 PUT
 * @enum "DELETE" HTTP 请求 DELETE
 * @enum "TRACE" HTTP 请求 TRACE
 * @enum "CONNECT" HTTP 请求 CONNECT
 */
export type RequestParamMethod = "OPTIONS" | "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT";

/**
 * @enum "json" 返回的数据为 JSON，返回后会对返回的数据进行一次 JSON.parse
 * @enum "其他" 不对返回的内容进行 JSON.parse
 */
export type RequestParamDataType = "json" | "其他";

/**
 * @enum "text" 响应的数据为文本
 * @enum "arraybuffer" 响应的数据为 ArrayBuffer
 */
export type RequestParamResponseType = "text" | "arraybuffer";

export interface RequestParam {
    /**
     * 开发者服务器接口地址
     */
    url: string;
    /**
     * 请求的参数
     */
    data?: string | object | ArrayBuffer;
    /**
     * 设置请求的 header，header 中不能设置 Referer。content-type 默认为 application/json
     */
    header?: object;
    /**
     * HTTP 请求方法
     * @default GET
     */
    method?: string | RequestParamMethod;
    /**
     * 返回的数据格式
     * @default json
     */
    dataType?: string | RequestParamDataType;
    /**
     * 响应的数据类型
     * @default text
     * @since 1.7.0
     */
    responseType?: string | RequestParamResponseType;
}
export interface RequestSuccess {
    /**
     * 开发者服务器返回的数据
     */
    data: string | object | ArrayBuffer;
    /**
     * 开发者服务器返回的 HTTP 状态码
     */
    statusCode: number;
    /**
     * 开发者服务器返回的 HTTP Response Header
     * @since 1.2.0
     */
    header: object;
}
export interface DownloadFileParam {
    /**
     * 下载资源的 url
     */
    url: string;
    /**
     * HTTP 请求的 Header，Header 中不能设置 Referer
     */
    header?: object;
    /**
     * 指定文件下载后存储的路径 (本地路径)
     * @since 1.8.0
     */
    filePath?: string;
}
export interface DownloadFileSuccess {
    /**
     * 临时文件路径 (本地路径)。没传入 filePath 指定文件存储路径时会返回，下载后的文件会存储到一个临时文件
     */
    tempFilePath: string;
    /**
     * 用户文件路径 (本地路径)。传入 filePath 时会返回，跟传入的 filePath 一致
     */
    filePath: string;
    /**
     * 开发者服务器返回的 HTTP 状态码
     */
    statusCode: number;
}
export interface UploadFileParam {
    /**
     * 开发者服务器地址
     */
    url: string;
    /**
     * 要上传文件资源的路径 (网络路径)
     */
    filePath: string;
    /**
     * 文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容
     */
    name: string;
    /**
     * HTTP 请求 Header，Header 中不能设置 Referer
     */
    header?: object;
    /**
     * HTTP 请求中其他额外的 form data
     */
    formData?: object;
}
export interface UploadFileSuccess {
    /**
     * 开发者服务器返回的数据
     */
    data: string;
    /**
     * 开发者服务器返回的 HTTP 状态码
     */
    statusCode: number;
}
export interface SendSocketMessageParam {
    /**
     * 需要发送的内容
     */
    data: string | ArrayBuffer;
}
export interface OnSocketOpenResult {
    /**
     * 连接成功的 HTTP 响应 Header
     * @since 2.0.0
     */
    header: object;
}
export interface OnSocketMessageResult {
    /**
     * 服务器返回的消息
     */
    data: string | ArrayBuffer;
}
export interface OnSocketErrorResult {
    /**
     * 错误信息
     */
    errMsg: string;
}
export interface OnSocketCloseResult {
    /**
     * 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。
     */
    code: number;
    /**
     * 一个可读的字符串，表示连接被关闭的原因。
     */
    reason: string;
}
export interface ConnectSocketParam {
    /**
     * 开发者服务器 wss 接口地址
     */
    url: string;
    /**
     * HTTP Header，Header 中不能设置 Referer
     */
    header?: object;
    /**
     * 子协议数组
     * @since 1.4.0
     */
    protocols?: Array<string>;
    /**
     * 建立 TCP 连接的时候的 TCP_NODELAY 设置
     * @default false
     * @since 2.4.0
     */
    tcpNoDelay?: boolean;
    /**
     * 是否开启压缩扩展
     * @default false
     * @since 2.8.0
     */
    perMessageDeflate?: boolean;
}
export interface CloseSocketParam {
    /**
     * 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。
     * @default 1000（表示正常关闭连接）
     */
    code?: number;
    /**
     * 一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于 123 字节的 UTF-8 文本（不是字符）。
     */
    reason?: string;
}
/**
 * @enum "task not found" 在当前没有处在搜索服务中的情况下调用 stopLocalServiceDiscovery
 */
export type StopLocalServiceDiscoveryFailErrMsg = "task not found";

export interface StopLocalServiceDiscoveryFail {
    /**
     * 错误信息
     */
    errMsg: string | StopLocalServiceDiscoveryFailErrMsg;
}
export interface StartLocalServiceDiscoveryParam {
    /**
     * 要搜索的服务类型
     */
    serviceType: string;
}
/**
 * @enum "invalid param" serviceType 为空
 * @enum "scan task already exist" 在当前 startLocalServiceDiscovery 发起的搜索未停止的情况下，再次调用 startLocalServiceDiscovery
 */
export type StartLocalServiceDiscoveryFailErrMsg = "invalid param" | "scan task already exist";

export interface StartLocalServiceDiscoveryFail {
    /**
     * 错误信息
     */
    errMsg: string | StartLocalServiceDiscoveryFailErrMsg;
}
export interface OnLocalServiceResolveFailResult {
    /**
     * 服务的类型
     */
    serviceType: string;
    /**
     * 服务的名称
     */
    serviceName: string;
}
export interface OnLocalServiceLostResult {
    /**
     * 服务的类型
     */
    serviceType: string;
    /**
     * 服务的名称
     */
    serviceName: string;
}
export interface OnLocalServiceFoundResult {
    /**
     * 服务的类型
     */
    serviceType: string;
    /**
     * 服务的名称
     */
    serviceName: string;
    /**
     * 服务的 ip 地址
     */
    ip: string;
    /**
     * 服务的端口
     */
    port: number;
}
export interface SetStorageParam {
    /**
     * 本地缓存中指定的 key
     */
    key: string;
    /**
     * 需要存储的内容。只支持原生类型、Date、及能够通过JSON.stringify序列化的对象。
     */
    data: any;
}
export interface RemoveStorageParam {
    /**
     * 本地缓存中指定的 key
     */
    key: string;
}
export interface GetStorageInfoSyncResult {
    /**
     * 当前 storage 中所有的 key
     */
    keys: Array<string>;
    /**
     * 当前占用的空间大小, 单位 KB
     */
    currentSize: number;
    /**
     * 限制的空间大小，单位 KB
     */
    limitSize: number;
}
export interface GetStorageInfoSuccess {
    /**
     * 当前 storage 中所有的 key
     */
    keys: Array<string>;
    /**
     * 当前占用的空间大小, 单位 KB
     */
    currentSize: number;
    /**
     * 限制的空间大小，单位 KB
     */
    limitSize: number;
}
export interface GetStorageParam {
    /**
     * 本地缓存中指定的 key
     */
    key: string;
}
export interface GetStorageSuccess {
    /**
     * key对应的内容
     */
    data: any;
}
export interface SetBackgroundFetchTokenParam {
    /**
     * 自定义的登录态
     */
    token: String;
}
export interface GetBackgroundFetchDataParam {
    /**
     * 取值为 periodic
     */
    fetchType: String;
}
export interface SaveImageToPhotosAlbumParam {
    /**
     * 图片文件路径，可以是临时文件路径或永久文件路径 (本地路径) ，不支持网络路径
     */
    filePath: string;
}
export interface PreviewImageParam {
    /**
     * 需要预览的图片链接列表。2.2.3 起支持云文件ID。
     */
    urls: Array<string>;
    /**
     * 当前显示图片的链接
     * @default urls 的第一张
     */
    current?: string;
}
export interface GetImageInfoParam {
    /**
     * 图片的路径，支持网络路径、本地路径、代码包路径
     */
    src: string;
}
/**
 * @enum "up" 默认方向（手机横持拍照），对应 Exif 中的 1。或无 orientation 信息。
 * @enum "up-mirrored" 同 up，但镜像翻转，对应 Exif 中的 2
 * @enum "down" 旋转180度，对应 Exif 中的 3
 * @enum "down-mirrored" 同 down，但镜像翻转，对应 Exif 中的 4
 * @enum "left-mirrored" 同 left，但镜像翻转，对应 Exif 中的 5
 * @enum "right" 顺时针旋转90度，对应 Exif 中的 6
 * @enum "right-mirrored" 同 right，但镜像翻转，对应 Exif 中的 7
 * @enum "left" 逆时针旋转90度，对应 Exif 中的 8
 */
export type GetImageInfoSuccessOrientation = "up" | "up-mirrored" | "down" | "down-mirrored" | "left-mirrored" | "right" | "right-mirrored" | "left";

export interface GetImageInfoSuccess {
    /**
     * 图片原始宽度，单位px。不考虑旋转。
     */
    width: number;
    /**
     * 图片原始高度，单位px。不考虑旋转。
     */
    height: number;
    /**
     * 图片的本地路径
     */
    path: string;
    /**
     * 拍照时设备方向
     * @since 1.9.90
     */
    orientation: string | GetImageInfoSuccessOrientation;
    /**
     * 图片格式
     * @since 1.9.90
     */
    type: string;
}
export interface CompressImageParam {
    /**
     * 图片路径，图片的路径，支持本地路径、代码包路径
     */
    src: string;
    /**
     * 压缩质量，范围0～100，数值越小，质量越低，压缩率越高（仅对jpg有效）。
     * @default 80
     */
    quality?: number;
}
export interface CompressImageSuccess {
    /**
     * 压缩后图片的临时文件路径 (本地路径)
     */
    tempFilePath: string;
}
/**
 * @enum "all" 从所有文件选择
 * @enum "video" 只能选择视频文件
 * @enum "image" 只能选择图片文件
 * @enum "file" 可以选择除了图片和视频之外的其它的文件
 */
export type ChooseMessageFileParamType = "all" | "video" | "image" | "file";

export interface ChooseMessageFileParam {
    /**
     * 最多可以选择的文件个数，可以 0～100
     */
    count: number;
    /**
     * 所选的文件的类型
     * @default 'all'
     */
    type?: string | ChooseMessageFileParamType;
    /**
     * 根据文件拓展名过滤，仅 type==file 时有效。每一项都不能是空字符串。默认不过滤。
     * @since 2.6.0
     */
    extension?: Array<string>;
}
/**
 * @enum "video" 选择了视频文件
 * @enum "image" 选择了图片文件
 * @enum "file" 选择了除图片和视频的文件
 */
export type ChooseMessageFileSuccessTempFilesType = "video" | "image" | "file";

export interface ChooseMessageFileSuccessTempFiles {
    /**
     * 本地临时文件路径 (本地路径)
     */
    path: string;
    /**
     * 本地临时文件大小，单位 B
     */
    size: number;
    /**
     * 选择的文件名称
     */
    name: string;
    /**
     * 选择的文件类型
     */
    type: string | ChooseMessageFileSuccessTempFilesType;
    /**
     * 选择的文件的会话发送时间，Unix时间戳，工具暂不支持此属性
     */
    time: number;
}
export interface ChooseMessageFileSuccess {
    /**
     * 返回选择的文件的本地临时文件对象数组
     */
    tempFiles: Array<ChooseMessageFileSuccessTempFiles>;
}
/**
 * @enum "original" 原图
 * @enum "compressed" 压缩图
 */
export type ChooseImageParamSizeType = "original" | "compressed";

/**
 * @enum "album" 从相册选图
 * @enum "camera" 使用相机
 */
export type ChooseImageParamSourceType = "album" | "camera";

export interface ChooseImageParam {
    /**
     * 最多可以选择的图片张数
     * @default 9
     */
    count?: number;
    /**
     * 所选的图片的尺寸
     * @default ['original', 'compressed']
     */
    sizeType?: Array<string> | Array<ChooseImageParamSizeType>;
    /**
     * 选择图片的来源
     * @default ['album', 'camera']
     */
    sourceType?: Array<string> | Array<ChooseImageParamSourceType>;
}
export interface ChooseImageSuccessTempFiles {
    /**
     * 本地临时文件路径 (本地路径)
     */
    path: string;
    /**
     * 本地临时文件大小，单位 B
     */
    size: number;
}
export interface ChooseImageSuccess {
    /**
     * 图片的本地临时文件路径列表 (本地路径)
     */
    tempFilePaths: Array<string>;
    /**
     * 图片的本地临时文件列表
     * @since 1.2.0
     */
    tempFiles: Array<ChooseImageSuccessTempFiles>;
}
export interface SaveVideoToPhotosAlbumParam {
    /**
     * 视频文件路径，可以是临时文件路径也可以是永久文件路径 (本地路径)
     */
    filePath: string;
}
/**
 * @enum "album" 从相册选择视频
 * @enum "camera" 使用相机拍摄视频
 */
export type ChooseVideoParamSourceType = "album" | "camera";

export interface ChooseVideoParam {
    /**
     * 视频选择的来源
     * @default ['album', 'camera']
     */
    sourceType?: Array<string> | Array<ChooseVideoParamSourceType>;
    /**
     * 是否压缩所选择的视频文件
     * @default true
     * @since 1.6.0
     */
    compressed?: boolean;
    /**
     * 拍摄视频最长拍摄时间，单位秒
     * @default 60
     */
    maxDuration?: number;
    /**
     * 默认拉起的是前置或者后置摄像头。部分 Android 手机下由于系统 ROM 不支持无法生效
     * @default 'back'
     */
    camera?: string;
}
export interface ChooseVideoSuccess {
    /**
     * 选定视频的临时文件路径 (本地路径)
     */
    tempFilePath: string;
    /**
     * 选定视频的时间长度
     */
    duration: number;
    /**
     * 选定视频的数据量大小
     */
    size: number;
    /**
     * 返回选定视频的高度
     */
    height: number;
    /**
     * 返回选定视频的宽度
     */
    width: number;
}
export interface SetInnerAudioOptionParam {
    /**
     * 是否与其他音频混播，设置为 true 之后，不会终止其他应用或微信内的音乐
     * @default true
     */
    mixWithOther?: boolean;
    /**
     * （仅在 iOS 生效）是否遵循静音开关，设置为 false 之后，即使是在静音模式下，也能播放声音
     * @default true
     */
    obeyMuteSwitch?: boolean;
}
export interface PlayVoiceParam {
    /**
     * 需要播放的语音文件的文件路径 (本地路径)
     */
    filePath: string;
    /**
     * 指定录音时长，到达指定的录音时长后会自动停止录音，单位：秒
     * @default 60
     * @since 1.6.0
     */
    duration?: number;
}
/**
 * @enum "auto" 自动设置，默认使用手机麦克风，插上耳麦后自动切换使用耳机麦克风，所有平台适用
 * @enum "buildInMic" 手机麦克风，仅限 iOS
 * @enum "headsetMic" 耳机麦克风，仅限 iOS
 * @enum "mic" 麦克风（没插耳麦时是手机麦克风，插耳麦时是耳机麦克风），仅限 Android
 * @enum "camcorder" 同 mic，适用于录制音视频内容，仅限 Android
 * @enum "voice_communication" 同 mic，适用于实时沟通，仅限 Android
 * @enum "voice_recognition" 同 mic，适用于语音识别，仅限 Android
 */
export type GetAvailableAudioSourcesSuccessAudioSources = "auto" | "buildInMic" | "headsetMic" | "mic" | "camcorder" | "voice_communication" | "voice_recognition";

export interface GetAvailableAudioSourcesSuccess {
    /**
     * 支持的音频输入源列表，可在 RecorderManager.start() 接口中使用。返回值定义参考 https://developer.android.com/reference/kotlin/android/media/MediaRecorder.AudioSource
     */
    audioSources: Array<string> | Array<GetAvailableAudioSourcesSuccessAudioSources>;
}
export interface SeekBackgroundAudioParam {
    /**
     * 音乐位置，单位：秒
     */
    position: number;
}
export interface PlayBackgroundAudioParam {
    /**
     * 音乐链接，目前支持的格式有 m4a, aac, mp3, wav
     */
    dataUrl: string;
    /**
     * 音乐标题
     */
    title?: string;
    /**
     * 封面URL
     */
    coverImgUrl?: string;
}
/**
 * @enum 0 暂停中
 * @enum 1 播放中
 * @enum 2 没有音乐播放
 */
export type GetBackgroundAudioPlayerStateSuccessStatus = 0 | 1 | 2;

export interface GetBackgroundAudioPlayerStateSuccess {
    /**
     * 选定音频的长度（单位：s），只有在音乐播放中时返回
     */
    duration: number;
    /**
     * 选定音频的播放位置（单位：s），只有在音乐播放中时返回
     */
    currentPosition: number;
    /**
     * 播放状态
     */
    status: number | GetBackgroundAudioPlayerStateSuccessStatus;
    /**
     * 音频的下载进度百分比，只有在音乐播放中时返回
     */
    downloadPercent: number;
    /**
     * 歌曲数据链接，只有在音乐播放中时返回
     */
    dataUrl: string;
}
export interface StartRecordSuccess {
    /**
     * 录音文件的临时路径 (本地路径)
     */
    tempFilePath: string;
}
export interface OpenLocationParam {
    /**
     * 纬度，范围为-90~90，负数表示南纬。使用 gcj02 国测局坐标系
     */
    latitude: number;
    /**
     * 经度，范围为-180~180，负数表示西经。使用 gcj02 国测局坐标系
     */
    longitude: number;
    /**
     * 缩放比例，范围5~18
     * @default 18
     */
    scale?: number;
    /**
     * 位置名
     */
    name?: string;
    /**
     * 地址的详细说明
     */
    address?: string;
}
export interface OnLocationChangeResult {
    /**
     * 纬度，范围为 -90~90，负数表示南纬
     */
    latitude: number;
    /**
     * 经度，范围为 -180~180，负数表示西经
     */
    longitude: number;
    /**
     * 速度，单位 m/s
     */
    speed: number;
    /**
     * 位置的精确度
     */
    accuracy: number;
    /**
     * 高度，单位 m
     * @since 1.2.0
     */
    altitude: number;
    /**
     * 垂直精度，单位 m（Android 无法获取，返回 0）
     * @since 1.2.0
     */
    verticalAccuracy: number;
    /**
     * 水平精度，单位 m
     * @since 1.2.0
     */
    horizontalAccuracy: number;
}
export interface GetLocationParam {
    /**
     * wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
     * @default wgs84
     */
    type?: string;
    /**
     * 传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度
     * @default false
     * @since 1.6.0
     */
    altitude?: string;
    /**
     * 开启高精度定位
     * @default false
     * @since 2.9.0
     */
    isHighAccuracy?: boolean;
    /**
     * 高精度定位超时时间(ms)，指定时间内返回最高精度，该值3000ms以上高精度定位才有效果
     * @since 2.9.0
     */
    highAccuracyExpireTime?: number;
}
export interface GetLocationSuccess {
    /**
     * 纬度，范围为 -90~90，负数表示南纬
     */
    latitude: number;
    /**
     * 经度，范围为 -180~180，负数表示西经
     */
    longitude: number;
    /**
     * 速度，单位 m/s
     */
    speed: number;
    /**
     * 位置的精确度
     */
    accuracy: number;
    /**
     * 高度，单位 m
     * @since 1.2.0
     */
    altitude: number;
    /**
     * 垂直精度，单位 m（Android 无法获取，返回 0）
     * @since 1.2.0
     */
    verticalAccuracy: number;
    /**
     * 水平精度，单位 m
     * @since 1.2.0
     */
    horizontalAccuracy: number;
}
export interface ChooseLocationParam {
    /**
     * 目标地纬度
     * @since 2.9.0
     */
    latitude?: number;
    /**
     * 目标地经度
     * @since 2.9.0
     */
    longitude?: number;
}
export interface ChooseLocationSuccess {
    /**
     * 位置名称
     */
    name: string;
    /**
     * 详细地址
     */
    address: string;
    /**
     * 纬度，浮点数，范围为-90~90，负数表示南纬。使用 gcj02 国测局坐标系
     */
    latitude: string;
    /**
     * 经度，浮点数，范围为-180~180，负数表示西经。使用 gcj02 国测局坐标系
     */
    longitude: string;
}
export interface UpdateShareMenuParamTemplateInfoParameterList {
    /**
     * 参数名
     */
    name: string;
    /**
     * 参数值
     */
    value: string;
}
export interface UpdateShareMenuParamTemplateInfo {
    /**
     * 参数列表
     */
    parameterList: Array<UpdateShareMenuParamTemplateInfoParameterList>;
}
export interface UpdateShareMenuParam {
    /**
     * 是否使用带 shareTicket 的转发详情
     * @default false
     */
    withShareTicket?: boolean;
    /**
     * 是否是动态消息，详见动态消息
     * @default false
     * @since 2.4.0
     */
    isUpdatableMessage?: boolean;
    /**
     * 动态消息的 activityId。通过 updatableMessage.createActivityId 接口获取
     * @since 2.4.0
     */
    activityId?: string;
    /**
     * 动态消息的模板信息
     * @since 2.4.0
     */
    templateInfo: UpdateShareMenuParamTemplateInfo;
}
export interface ShowShareMenuParam {
    /**
     * 是否使用带 shareTicket 的转发详情
     * @default false
     */
    withShareTicket?: boolean;
}
export interface GetShareInfoParam {
    /**
     * shareTicket
     */
    shareTicket: string;
    /**
     * 超时时间，单位 ms
     * @since 1.9.90
     */
    timeout?: number;
}
export interface GetShareInfoSuccess {
    /**
     * 错误信息
     */
    errMsg: string;
    /**
     * 包括敏感数据在内的完整转发信息的加密数据，详细见加密数据解密算法
     */
    encryptedData: string;
    /**
     * 加密算法的初始向量，详细见加密数据解密算法
     */
    iv: string;
    /**
     * 敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过云调用直接获取开放数据，详细见云调用直接获取开放数据
     * @since 2.7.0
     */
    cloudID: string;
}
/**
 * @enum "jpg" jpg 图片
 * @enum "png" png 图片
 */
export type CanvasToTempFilePathParamFileType = "jpg" | "png";

export interface CanvasToTempFilePathParam {
    /**
     * 指定的画布区域的左上角横坐标
     * @default 0
     * @since 1.2.0
     */
    x?: number;
    /**
     * 指定的画布区域的左上角纵坐标
     * @default 0
     * @since 1.2.0
     */
    y?: number;
    /**
     * 指定的画布区域的宽度
     * @default canvas宽度-x
     * @since 1.2.0
     */
    width?: number;
    /**
     * 指定的画布区域的高度
     * @default canvas高度-y
     * @since 1.2.0
     */
    height?: number;
    /**
     * 输出的图片的宽度
     * @default width*屏幕像素密度
     * @since 1.2.0
     */
    destWidth?: number;
    /**
     * 输出的图片的高度
     * @default height*屏幕像素密度
     * @since 1.2.0
     */
    destHeight?: number;
    /**
     * 画布标识，传入 canvas 组件的 canvas-id
     */
    canvasId: string;
    /**
     * 画布标识，传入 canvas 组件实例 （canvas type="2d" 时使用该属性）。
     */
    canvas: string;
    /**
     * 目标文件的类型
     * @default png
     * @since 1.7.0
     */
    fileType?: string | CanvasToTempFilePathParamFileType;
    /**
     * 图片的质量，目前仅对 jpg 有效。取值范围为 (0, 1]，不在范围内时当作 1.0 处理。
     * @since 1.7.0
     */
    quality: number;
}
export interface CanvasToTempFilePathSuccess {
    /**
     * 生成文件的临时路径 (本地路径)
     */
    tempFilePath: string;
}
export interface CanvasPutImageDataParam {
    /**
     * 画布标识，传入 canvas 组件的 canvas-id 属性。
     */
    canvasId: string;
    /**
     * 图像像素点数据，一维数组，每四项表示一个像素点的 rgba
     */
    data: Uint8ClampedArray;
    /**
     * 源图像数据在目标画布中的位置偏移量（x 轴方向的偏移量）
     */
    x: number;
    /**
     * 源图像数据在目标画布中的位置偏移量（y 轴方向的偏移量）
     */
    y: number;
    /**
     * 源图像数据矩形区域的宽度
     */
    width: number;
    /**
     * 源图像数据矩形区域的高度
     */
    height: number;
}
export interface CanvasGetImageDataParam {
    /**
     * 画布标识，传入 canvas 组件的 canvas-id 属性。
     */
    canvasId: string;
    /**
     * 将要被提取的图像数据矩形区域的左上角横坐标
     */
    x: number;
    /**
     * 将要被提取的图像数据矩形区域的左上角纵坐标
     */
    y: number;
    /**
     * 将要被提取的图像数据矩形区域的宽度
     */
    width: number;
    /**
     * 将要被提取的图像数据矩形区域的高度
     */
    height: number;
}
export interface CanvasGetImageDataSuccess {
    /**
     * 图像数据矩形的宽度
     */
    width: number;
    /**
     * 图像数据矩形的高度
     */
    height: number;
    /**
     * 图像像素点数据，一维数组，每四项表示一个像素点的 rgba
     */
    data: Uint8ClampedArray;
}
export interface SaveFileParam {
    /**
     * 需要保存的文件的临时路径 (本地路径)
     */
    tempFilePath: string;
}
export interface SaveFileSuccess {
    /**
     * 存储后的文件路径 (本地路径)
     */
    savedFilePath: number;
}
export interface RemoveSavedFileParam {
    /**
     * 需要删除的文件路径 (本地路径)
     */
    filePath: string;
}
/**
 * @enum "doc" doc 格式
 * @enum "docx" docx 格式
 * @enum "xls" xls 格式
 * @enum "xlsx" xlsx 格式
 * @enum "ppt" ppt 格式
 * @enum "pptx" pptx 格式
 * @enum "pdf" pdf 格式
 */
export type OpenDocumentParamFileType = "doc" | "docx" | "xls" | "xlsx" | "ppt" | "pptx" | "pdf";

export interface OpenDocumentParam {
    /**
     * 文件路径 (本地路径) ，可通过 downloadFile 获得
     */
    filePath: string;
    /**
     * 文件类型，指定文件类型打开文件
     * @since 1.4.0
     */
    fileType?: string | OpenDocumentParamFileType;
}
export interface GetSavedFileListSuccessFileList {
    /**
     * 文件路径 (本地路径)
     */
    filePath: string;
    /**
     * 本地文件大小，以字节为单位
     */
    size: number;
    /**
     * 文件保存时的时间戳，从1970/01/01 08:00:00 到当前时间的秒数
     */
    createTime: number;
}
export interface GetSavedFileListSuccess {
    /**
     * 文件数组，每一项是一个 FileItem
     */
    fileList: Array<GetSavedFileListSuccessFileList>;
}
export interface GetSavedFileInfoParam {
    /**
     * 文件路径 (本地路径)
     */
    filePath: string;
}
export interface GetSavedFileInfoSuccess {
    /**
     * 文件大小，单位 B
     */
    size: number;
    /**
     * 文件保存时的时间戳，从1970/01/01 08:00:00 到该时刻的秒数
     */
    createTime: number;
}
/**
 * @enum "md5" md5 算法
 * @enum "sha1" sha1 算法
 */
export type GetFileInfoParamDigestAlgorithm = "md5" | "sha1";

export interface GetFileInfoParam {
    /**
     * 本地文件路径 (本地路径)
     */
    filePath: string;
    /**
     * 计算文件摘要的算法
     * @default 'md5'
     */
    digestAlgorithm?: string | GetFileInfoParamDigestAlgorithm;
}
export interface GetFileInfoSuccess {
    /**
     * 文件大小，以字节为单位
     */
    size: number;
    /**
     * 按照传入的 digestAlgorithm 计算得出的的文件摘要
     */
    digest: string;
}
export interface LoginParam {
    /**
     * 超时时间，单位ms
     * @since 1.9.90
     */
    timeout?: number;
}
export interface LoginSuccess {
    /**
     * 用户登录凭证（有效期五分钟）。开发者需要在开发者服务器后台调用 auth.code2Session，使用 code 换取 openid 和 session_key 等信息
     */
    code: string;
}
/**
 * @enum "develop" 开发版
 * @enum "trial" 体验版
 * @enum "release" 正式版
 */
export type NavigateToMiniProgramParamEnvVersion = "develop" | "trial" | "release";

export interface NavigateToMiniProgramParam {
    /**
     * 要打开的小程序 appId
     */
    appId: string;
    /**
     * 打开的页面路径，如果为空则打开首页。path 中 ? 后面的部分会成为 query，在小程序的 App.onLaunch、App.onShow 和 Page.onLoad 的回调函数或小游戏的 wx.onShow 回调函数、wx.getLaunchOptionsSync 中可以获取到 query 数据。对于小游戏，可以只传入 query 部分，来实现传参效果，如：传入 "?foo=bar"。
     */
    path?: string;
    /**
     * 需要传递给目标小程序的数据，目标小程序可在 App.onLaunch，App.onShow 中获取到这份数据。如果跳转的是小游戏，可以在 wx.onShow、wx.getLaunchOptionsSync 中可以获取到这份数据数据。
     */
    extraData?: object;
    /**
     * 要打开的小程序版本。仅在当前小程序为开发版或体验版时此参数有效。如果当前小程序是正式版，则打开的小程序必定是正式版。
     * @default release
     */
    envVersion?: string | NavigateToMiniProgramParamEnvVersion;
}
export interface NavigateBackMiniProgramParam {
    /**
     * 需要返回给上一个小程序的数据，上一个小程序可在 App.onShow 中获取到这份数据。 详情。
     * @default {}
     */
    extraData?: object;
}
export interface GetAccountInfoSyncResultMiniProgram {
    /**
     * 小程序 appId
     */
    appId: string;
}
export interface GetAccountInfoSyncResultPlugin {
    /**
     * 插件 appId
     */
    appId: string;
    /**
     * 插件版本号
     */
    version: string;
}
export interface GetAccountInfoSyncResult {
    /**
     * 小程序帐号信息
     */
    miniProgram: GetAccountInfoSyncResultMiniProgram;
    /**
     * 插件帐号信息（仅在插件中调用时包含这一项）
     */
    plugin: GetAccountInfoSyncResultPlugin;
}
/**
 * @enum "en" 英文
 * @enum "zh_CN" 简体中文
 * @enum "zh_TW" 繁体中文
 */
export type GetUserInfoParamLang = "en" | "zh_CN" | "zh_TW";

export interface GetUserInfoParam {
    /**
     * 是否带上登录态信息。当 withCredentials 为 true 时，要求此前有调用过 wx.login 且登录态尚未过期，此时返回的数据会包含 encryptedData, iv 等敏感信息；当 withCredentials 为 false 时，不要求有登录态，返回的数据不包含 encryptedData, iv 等敏感信息。
     */
    withCredentials?: boolean;
    /**
     * 显示用户信息的语言
     * @default en
     */
    lang?: string | GetUserInfoParamLang;
}
export interface GetUserInfoSuccess {
    /**
     * 用户信息对象，不包含 openid 等敏感信息
     */
    userInfo: UserInfo;
    /**
     * 不包括敏感信息的原始数据字符串，用于计算签名
     */
    rawData: string;
    /**
     * 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息，详见 用户数据的签名验证和加解密
     */
    signature: string;
    /**
     * 包括敏感数据在内的完整用户信息的加密数据，详见 用户数据的签名验证和加解密
     */
    encryptedData: string;
    /**
     * 加密算法的初始向量，详见 用户数据的签名验证和加解密
     */
    iv: string;
    /**
     * 敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过云调用直接获取开放数据，详细见云调用直接获取开放数据
     * @since 2.7.0
     */
    cloudID: string;
}
/**
 * @enum "MD5" MD5
 * @enum "HMAC-SHA256" HMAC-SHA256
 */
export type RequestPaymentParamSignType = "MD5" | "HMAC-SHA256";

export interface RequestPaymentParam {
    /**
     * 时间戳，从 1970 年 1 月 1 日 00:00:00 至今的秒数，即当前的时间
     */
    timeStamp: string;
    /**
     * 随机字符串，长度为32个字符以下
     */
    nonceStr: string;
    /**
     * 统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=***
     */
    package: string;
    /**
     * 签名算法
     * @default MD5
     */
    signType?: string | RequestPaymentParamSignType;
    /**
     * 签名，具体签名方案参见 小程序支付接口文档
     */
    paySign: string;
}
export interface AuthorizeParam {
    /**
     * 需要获取权限的 scope，详见 scope 列表
     */
    scope: string;
}
export interface OpenSettingSuccess {
    /**
     * 用户授权结果
     */
    authSetting: AuthSetting;
}
export interface GetSettingSuccess {
    /**
     * 用户授权结果
     */
    authSetting: AuthSetting;
}
export interface ChooseAddressSuccess {
    /**
     * 收货人姓名
     */
    userName: string;
    /**
     * 邮编
     */
    postalCode: string;
    /**
     * 国标收货地址第一级地址
     */
    provinceName: string;
    /**
     * 国标收货地址第二级地址
     */
    cityName: string;
    /**
     * 国标收货地址第三级地址
     */
    countyName: string;
    /**
     * 详细收货地址信息
     */
    detailInfo: string;
    /**
     * 收货地址国家码
     */
    nationalCode: string;
    /**
     * 收货人手机号码
     */
    telNumber: string;
    /**
     * 错误信息
     */
    errMsg: string;
}
export interface OpenCardParamCardList {
    /**
     * 卡券 ID
     */
    cardId: string;
    /**
     * 由 wx.addCard 的返回对象中的加密 code 通过解密后得到，解密请参照：code 解码接口
     */
    code: string;
}
export interface OpenCardParam {
    /**
     * 需要打开的卡券列表
     */
    cardList: Array<OpenCardParamCardList>;
}
export interface AddCardParamCardList {
    /**
     * 卡券 ID
     */
    cardId: string;
    /**
     * 卡券的扩展参数。需将 CardExt 对象 JSON 序列化为字符串传入
     */
    cardExt: string;
}
export interface AddCardParam {
    /**
     * 需要添加的卡券列表
     */
    cardList: Array<AddCardParamCardList>;
}
export interface AddCardSuccessCardList {
    /**
     * 加密 code，为用户领取到卡券的code加密后的字符串，解密请参照：code 解码接口
     */
    code: string;
    /**
     * 用户领取到卡券的 ID
     */
    cardId: string;
    /**
     * 卡券的扩展参数，结构请参考下文
     */
    cardExt: string;
    /**
     * 是否成功
     */
    isSuccess: boolean;
}
export interface AddCardSuccess {
    /**
     * 卡券添加结果列表
     */
    cardList: Array<AddCardSuccessCardList>;
}
/**
 * @enum "0" 单位
 * @enum "1" 个人
 */
export type ChooseInvoiceTitleSuccessType = "0" | "1";

export interface ChooseInvoiceTitleSuccess {
    /**
     * 抬头类型
     */
    type: string | ChooseInvoiceTitleSuccessType;
    /**
     * 抬头名称
     */
    title: string;
    /**
     * 抬头税号
     */
    taxNumber: string;
    /**
     * 单位地址
     */
    companyAddress: string;
    /**
     * 手机号码
     */
    telephone: string;
    /**
     * 银行名称
     */
    bankName: string;
    /**
     * 银行账号
     */
    bankAccount: string;
    /**
     * 错误信息
     */
    errMsg: string;
}
export interface ChooseInvoiceSuccess {
    /**
     * 用户选中的发票信息，格式为一个 JSON 字符串，包含三个字段： card_id：所选发票卡券的 cardId，encrypt_code：所选发票卡券的加密 code，报销方可以通过 cardId 和 encryptCode 获得报销发票的信息，app_id： 发票方的 appId。
     */
    invoiceInfo: String;
}
/**
 * @enum "fingerPrint" 指纹识别
 * @enum "facial" 人脸识别
 * @enum "speech" 声纹识别（暂未支持）
 */
export type StartSoterAuthenticationParamRequestAuthModes = "fingerPrint" | "facial" | "speech";

export interface StartSoterAuthenticationParam {
    /**
     * 请求使用的可接受的生物认证方式
     */
    requestAuthModes: Array<string> | Array<StartSoterAuthenticationParamRequestAuthModes>;
    /**
     * 挑战因子。挑战因子为调用者为此次生物鉴权准备的用于签名的字符串关键识别信息，将作为 resultJSON 的一部分，供调用者识别本次请求。例如：如果场景为请求用户对某订单进行授权确认，则可以将订单号填入此参数。
     */
    challenge: string;
    /**
     * 验证描述，即识别过程中显示在界面上的对话框提示内容
     * @default ''
     */
    authContent?: string;
}
export interface StartSoterAuthenticationSuccess {
    /**
     * 生物认证方式
     */
    authMode: string;
    /**
     * 在设备安全区域（TEE）内获得的本机安全信息（如TEE名称版本号等以及防重放参数）以及本次认证信息（仅Android支持，本次认证的指纹ID）。具体说明见下文
     */
    resultJSON: string;
    /**
     * 用SOTER安全密钥对 resultJSON 的签名(SHA256 with RSA/PSS, saltlen=20)
     */
    resultJSONSignature: string;
    /**
     * 错误码
     */
    errCode: number;
    /**
     * 错误信息
     */
    errMsg: string;
}
/**
 * @enum "fingerPrint" 指纹识别
 * @enum "facial" 人脸识别
 * @enum "speech" 声纹识别（暂未支持）
 */
export type CheckIsSupportSoterAuthenticationSuccessSupportMode = "fingerPrint" | "facial" | "speech";

export interface CheckIsSupportSoterAuthenticationSuccess {
    /**
     * 该设备支持的可被SOTER识别的生物识别方式
     */
    supportMode: Array<string> | Array<CheckIsSupportSoterAuthenticationSuccessSupportMode>;
}
/**
 * @enum "fingerPrint" 指纹识别
 * @enum "facial" 人脸识别
 * @enum "speech" 声纹识别（暂未支持）
 */
export type CheckIsSoterEnrolledInDeviceParamCheckAuthMode = "fingerPrint" | "facial" | "speech";

export interface CheckIsSoterEnrolledInDeviceParam {
    /**
     * 认证方式
     */
    checkAuthMode: string | CheckIsSoterEnrolledInDeviceParamCheckAuthMode;
}
export interface CheckIsSoterEnrolledInDeviceSuccess {
    /**
     * 是否已录入信息
     */
    isEnrolled: boolean;
    /**
     * 错误信息
     */
    errMsg: string;
}
export interface GetWeRunDataSuccess {
    /**
     * 包括敏感数据在内的完整用户信息的加密数据，详细见加密数据解密算法。解密后得到的数据结构见后文
     */
    encryptedData: string;
    /**
     * 加密算法的初始向量，详细见加密数据解密算法
     */
    iv: string;
    /**
     * 敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过云调用直接获取开放数据，详细见云调用直接获取开放数据
     * @since 2.7.0
     */
    cloudID: string;
}
export interface RequestSubscribeMessageParam {
    /**
     * 需要订阅的消息模板的id的集合，一次调用最多可订阅3条消息（注意：iOS客户端7.0.6版本、Android客户端7.0.7版本之后的一次性订阅/长期订阅才支持多个模板消息，iOS客户端7.0.5版本、Android客户端7.0.6版本之前的一次订阅只支持一个模板消息）消息模板id在[微信公众平台(mp.weixin.qq.com)-功能-订阅消息]中配置
     */
    tmplIds: Array<any>;
}
export interface RequestSubscribeMessageSuccess {
    /**
     * 接口调用成功时errMsg值为'requestSubscribeMessage:ok'
     */
    errMsg: String;
    /**
     * [TEMPLATE_ID]是动态的键，即模板id，值包括'accept'、'reject'、'ban'。'accept'表示用户同意订阅该条id对应的模板消息，'reject'表示用户拒绝订阅该条id对应的模板消息，'ban'表示已被后台封禁。例如 { errMsg: "requestSubscribeMessage:ok", zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE: "accept"} 表示用户同意订阅zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE这条消息
     */
    TEMPLATE_ID: String;
}
export interface RequestSubscribeMessageFail {
    /**
     * 接口调用失败错误信息
     */
    errMsg: String;
    /**
     * 接口调用失败错误码
     */
    errCode: Number;
}
export interface StartBeaconDiscoveryParam {
    /**
     * iBeacon 设备广播的 uuid 列表
     */
    uuids: Array<string>;
    /**
     * 是否校验蓝牙开关，仅在 iOS 下有效
     * @default false
     */
    ignoreBluetoothAvailable?: boolean;
}
export interface OnBeaconUpdateResult {
    /**
     * 当前搜寻到的所有 iBeacon 设备列表
     */
    beacons: Array<IBeaconInfo>;
}
export interface OnBeaconServiceChangeResult {
    /**
     * 服务目前是否可用
     */
    available: boolean;
    /**
     * 目前是否处于搜索状态
     */
    discovering: boolean;
}
export interface GetBeaconsSuccess {
    /**
     * iBeacon 设备列表
     */
    beacons: Array<IBeaconInfo>;
}
export interface SetWifiListParamWifiList {
    /**
     * Wi-Fi 的 SSID
     */
    SSID?: string;
    /**
     * Wi-Fi 的 BSSID
     */
    BSSID?: string;
    /**
     * Wi-Fi 设备密码
     */
    password?: string;
}
export interface SetWifiListParam {
    /**
     * 提供预设的 Wi-Fi 信息列表
     */
    wifiList?: Array<SetWifiListParamWifiList>;
}
export interface OnWifiConnectedResult {
    /**
     * Wi-Fi 信息
     */
    wifi: WifiInfo;
}
export interface OnGetWifiListResult {
    /**
     * Wi-Fi 列表数据
     */
    wifiList: Array<WifiInfo>;
}
export interface GetConnectedWifiSuccess {
    /**
     * Wi-Fi 信息
     */
    wifi: WifiInfo;
}
export interface ConnectWifiParam {
    /**
     * Wi-Fi 设备 SSID
     */
    SSID: string;
    /**
     * Wi-Fi 设备 BSSID
     */
    BSSID?: string;
    /**
     * Wi-Fi 设备密码
     */
    password: string;
}
export interface AddPhoneContactParam {
    /**
     * 名字
     */
    firstName: string;
    /**
     * 头像本地文件路径
     */
    photoFilePath?: string;
    /**
     * 昵称
     */
    nickName?: string;
    /**
     * 姓氏
     */
    lastName?: string;
    /**
     * 中间名
     */
    middleName?: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 手机号
     */
    mobilePhoneNumber?: string;
    /**
     * 微信号
     */
    weChatNumber?: string;
    /**
     * 联系地址国家
     */
    addressCountry?: string;
    /**
     * 联系地址省份
     */
    addressState?: string;
    /**
     * 联系地址城市
     */
    addressCity?: string;
    /**
     * 联系地址街道
     */
    addressStreet?: string;
    /**
     * 联系地址邮政编码
     */
    addressPostalCode?: string;
    /**
     * 公司
     */
    organization?: string;
    /**
     * 职位
     */
    title?: string;
    /**
     * 工作传真
     */
    workFaxNumber?: string;
    /**
     * 工作电话
     */
    workPhoneNumber?: string;
    /**
     * 公司电话
     */
    hostNumber?: string;
    /**
     * 电子邮件
     */
    email?: string;
    /**
     * 网站
     */
    url?: string;
    /**
     * 工作地址国家
     */
    workAddressCountry?: string;
    /**
     * 工作地址省份
     */
    workAddressState?: string;
    /**
     * 工作地址城市
     */
    workAddressCity?: string;
    /**
     * 工作地址街道
     */
    workAddressStreet?: string;
    /**
     * 工作地址邮政编码
     */
    workAddressPostalCode?: string;
    /**
     * 住宅传真
     */
    homeFaxNumber?: string;
    /**
     * 住宅电话
     */
    homePhoneNumber?: string;
    /**
     * 住宅地址国家
     */
    homeAddressCountry?: string;
    /**
     * 住宅地址省份
     */
    homeAddressState?: string;
    /**
     * 住宅地址城市
     */
    homeAddressCity?: string;
    /**
     * 住宅地址街道
     */
    homeAddressStreet?: string;
    /**
     * 住宅地址邮政编码
     */
    homeAddressPostalCode?: string;
}
export interface WriteBLECharacteristicValueParam {
    /**
     * 蓝牙设备 id
     */
    deviceId: string;
    /**
     * 蓝牙特征值对应服务的 uuid
     */
    serviceId: string;
    /**
     * 蓝牙特征值的 uuid
     */
    characteristicId: string;
    /**
     * 蓝牙设备特征值对应的二进制值
     */
    value: ArrayBuffer;
}
export interface ReadBLECharacteristicValueParam {
    /**
     * 蓝牙设备 id
     */
    deviceId: string;
    /**
     * 蓝牙特征值对应服务的 uuid
     */
    serviceId: string;
    /**
     * 蓝牙特征值的 uuid
     */
    characteristicId: string;
}
export interface OnBLEConnectionStateChangeResult {
    /**
     * 蓝牙设备ID
     */
    deviceId: string;
    /**
     * 是否处于已连接状态
     */
    connected: boolean;
}
export interface OnBLECharacteristicValueChangeResult {
    /**
     * 蓝牙设备 id
     */
    deviceId: string;
    /**
     * 蓝牙特征值对应服务的 uuid
     */
    serviceId: string;
    /**
     * 蓝牙特征值的 uuid
     */
    characteristicId: string;
    /**
     * 特征值最新的值
     */
    value: ArrayBuffer;
}
export interface NotifyBLECharacteristicValueChangeParam {
    /**
     * 蓝牙设备 id
     */
    deviceId: string;
    /**
     * 蓝牙特征值对应服务的 uuid
     */
    serviceId: string;
    /**
     * 蓝牙特征值的 uuid
     */
    characteristicId: string;
    /**
     * 是否启用 notify
     */
    state: boolean;
}
export interface GetBLEDeviceServicesParam {
    /**
     * 蓝牙设备 id
     */
    deviceId: string;
}
export interface GetBLEDeviceServicesSuccessServices {
    /**
     * 蓝牙设备服务的 uuid
     */
    uuid: string;
    /**
     * 该服务是否为主服务
     */
    isPrimary: boolean;
}
export interface GetBLEDeviceServicesSuccess {
    /**
     * 设备服务列表
     */
    services: Array<GetBLEDeviceServicesSuccessServices>;
}
export interface GetBLEDeviceCharacteristicsParam {
    /**
     * 蓝牙设备 id
     */
    deviceId: string;
    /**
     * 蓝牙服务 uuid，需要使用 getBLEDeviceServices 获取
     */
    serviceId: string;
}
export interface GetBLEDeviceCharacteristicsSuccessCharacteristicsProperties {
    /**
     * 该特征值是否支持 read 操作
     */
    read: boolean;
    /**
     * 该特征值是否支持 write 操作
     */
    write: boolean;
    /**
     * 该特征值是否支持 notify 操作
     */
    notify: boolean;
    /**
     * 该特征值是否支持 indicate 操作
     */
    indicate: boolean;
}
export interface GetBLEDeviceCharacteristicsSuccessCharacteristics {
    /**
     * 蓝牙设备特征值的 uuid
     */
    uuid: string;
    /**
     * 该特征值支持的操作类型
     */
    properties: GetBLEDeviceCharacteristicsSuccessCharacteristicsProperties;
}
export interface GetBLEDeviceCharacteristicsSuccess {
    /**
     * 设备特征值列表
     */
    characteristics: Array<GetBLEDeviceCharacteristicsSuccessCharacteristics>;
}
export interface CreateBLEConnectionParam {
    /**
     * 用于区分设备的 id
     */
    deviceId: string;
    /**
     * 超时时间，单位ms，不填表示不会超时
     */
    timeout?: number;
}
export interface CloseBLEConnectionParam {
    /**
     * 用于区分设备的 id
     */
    deviceId: string;
}
export interface StartBluetoothDevicesDiscoveryParam {
    /**
     * 要搜索的蓝牙设备主 service 的 uuid 列表。某些蓝牙设备会广播自己的主 service 的 uuid。如果设置此参数，则只搜索广播包有对应 uuid 的主服务的蓝牙设备。建议主要通过该参数过滤掉周边不需要处理的其他蓝牙设备。
     */
    services?: Array<string>;
    /**
     * 是否允许重复上报同一设备。如果允许重复上报，则 wx.onBlueToothDeviceFound 方法会多次上报同一设备，但是 RSSI 值会有不同。
     * @default false
     */
    allowDuplicatesKey?: boolean;
    /**
     * 上报设备的间隔。0 表示找到新设备立即上报，其他数值根据传入的间隔上报。
     * @default 0
     */
    interval?: number;
}
export interface OnBluetoothDeviceFoundResultDevices {
    /**
     * 蓝牙设备名称，某些设备可能没有
     */
    name: string;
    /**
     * 用于区分设备的 id
     */
    deviceId: string;
    /**
     * 当前蓝牙设备的信号强度
     */
    RSSI: number;
    /**
     * 当前蓝牙设备的广播数据段中的 ManufacturerData 数据段。
     */
    advertisData: ArrayBuffer;
    /**
     * 当前蓝牙设备的广播数据段中的 ServiceUUIDs 数据段
     */
    advertisServiceUUIDs: Array<string>;
    /**
     * 当前蓝牙设备的广播数据段中的 LocalName 数据段
     */
    localName: string;
    /**
     * 当前蓝牙设备的广播数据段中的 ServiceData 数据段
     */
    serviceData: object;
}
export interface OnBluetoothDeviceFoundResult {
    /**
     * 新搜索到的设备列表
     */
    devices: Array<OnBluetoothDeviceFoundResultDevices>;
}
export interface OnBluetoothAdapterStateChangeResult {
    /**
     * 蓝牙适配器是否可用
     */
    available: boolean;
    /**
     * 蓝牙适配器是否处于搜索状态
     */
    discovering: boolean;
}
export interface GetConnectedBluetoothDevicesParam {
    /**
     * 蓝牙设备主 service 的 uuid 列表
     */
    services: Array<string>;
}
export interface GetConnectedBluetoothDevicesSuccessDevices {
    /**
     * 蓝牙设备名称，某些设备可能没有
     */
    name: string;
    /**
     * 用于区分设备的 id
     */
    deviceId: string;
}
export interface GetConnectedBluetoothDevicesSuccess {
    /**
     * 搜索到的设备列表
     */
    devices: Array<GetConnectedBluetoothDevicesSuccessDevices>;
}
export interface GetBluetoothDevicesSuccessDevices {
    /**
     * 蓝牙设备名称，某些设备可能没有
     */
    name: string;
    /**
     * 用于区分设备的 id
     */
    deviceId: string;
    /**
     * 当前蓝牙设备的信号强度
     */
    RSSI: number;
    /**
     * 当前蓝牙设备的广播数据段中的 ManufacturerData 数据段。
     */
    advertisData: ArrayBuffer;
    /**
     * 当前蓝牙设备的广播数据段中的 ServiceUUIDs 数据段
     */
    advertisServiceUUIDs: Array<string>;
    /**
     * 当前蓝牙设备的广播数据段中的 LocalName 数据段
     */
    localName: string;
    /**
     * 当前蓝牙设备的广播数据段中的 ServiceData 数据段
     */
    serviceData: object;
}
export interface GetBluetoothDevicesSuccess {
    /**
     * uuid 对应的的已连接设备列表
     */
    devices: Array<GetBluetoothDevicesSuccessDevices>;
}
export interface GetBluetoothAdapterStateSuccess {
    /**
     * 是否正在搜索设备
     */
    discovering: boolean;
    /**
     * 蓝牙适配器是否可用
     */
    available: boolean;
}
export interface GetBatteryInfoSyncResult {
    /**
     * 设备电量，范围 1 - 100
     */
    level: string;
    /**
     * 是否正在充电中
     */
    isCharging: boolean;
}
export interface GetBatteryInfoSuccess {
    /**
     * 设备电量，范围 1 - 100
     */
    level: string;
    /**
     * 是否正在充电中
     */
    isCharging: boolean;
}
export interface SetClipboardDataParam {
    /**
     * 剪贴板的内容
     */
    data: string;
}
export interface GetClipboardDataSuccess {
    /**
     * 剪贴板的内容
     */
    data: string;
}
export interface StartHCEParam {
    /**
     * 需要注册到系统的 AID 列表
     */
    aid_list: Array<string>;
}
export interface SendHCEMessageParam {
    /**
     * 二进制数据
     */
    data: ArrayBuffer;
}
/**
 * @enum 1 HCE APDU Command类型，小程序需对此指令进行处理，并调用 sendHCEMessage 接口返回处理指令
 * @enum 2 设备离场事件类型
 */
export type OnHCEMessageResultMessageType = 1 | 2;

export interface OnHCEMessageResult {
    /**
     * 消息类型
     */
    messageType: number | OnHCEMessageResultMessageType;
    /**
     * messageType=1 时 ,客户端接收到 NFC 设备的指令
     */
    data: ArrayBuffer;
    /**
     * messageType=2 时，原因
     */
    reason: number;
}
/**
 * @enum "wifi" wifi 网络
 * @enum "2g" 2g 网络
 * @enum "3g" 3g 网络
 * @enum "4g" 4g 网络
 * @enum "unknown" Android 下不常见的网络类型
 * @enum "none" 无网络
 */
export type OnNetworkStatusChangeResultNetworkType = "wifi" | "2g" | "3g" | "4g" | "unknown" | "none";

export interface OnNetworkStatusChangeResult {
    /**
     * 当前是否有网络连接
     */
    isConnected: boolean;
    /**
     * 网络类型
     */
    networkType: string | OnNetworkStatusChangeResultNetworkType;
}
/**
 * @enum "wifi" wifi 网络
 * @enum "2g" 2g 网络
 * @enum "3g" 3g 网络
 * @enum "4g" 4g 网络
 * @enum "unknown" Android 下不常见的网络类型
 * @enum "none" 无网络
 */
export type GetNetworkTypeSuccessNetworkType = "wifi" | "2g" | "3g" | "4g" | "unknown" | "none";

export interface GetNetworkTypeSuccess {
    /**
     * 网络类型
     */
    networkType: string | GetNetworkTypeSuccessNetworkType;
}
export interface SetScreenBrightnessParam {
    /**
     * 屏幕亮度值，范围 0 ~ 1。0 最暗，1 最亮
     */
    value: number;
}
export interface SetKeepScreenOnParam {
    /**
     * 是否保持屏幕常亮
     */
    keepScreenOn: boolean;
}
export interface GetScreenBrightnessSuccess {
    /**
     * 屏幕亮度值，范围 0 ~ 1，0 最暗，1 最亮
     */
    value: number;
}
export interface MakePhoneCallParam {
    /**
     * 需要拨打的电话号码
     */
    phoneNumber: string;
}
/**
 * @enum "game" 适用于更新游戏的回调频率，在 20ms/次 左右
 * @enum "ui" 适用于更新 UI 的回调频率，在 60ms/次 左右
 * @enum "normal" 普通的回调频率，在 200ms/次 左右
 */
export type StartAccelerometerParamInterval = "game" | "ui" | "normal";

export interface StartAccelerometerParam {
    /**
     * 监听加速度数据回调函数的执行频率
     * @default normal
     * @since 2.1.0
     */
    interval?: string | StartAccelerometerParamInterval;
}
export interface OnAccelerometerChangeResult {
    /**
     * X 轴
     */
    x: number;
    /**
     * Y 轴
     */
    y: number;
    /**
     * Z 轴
     */
    z: number;
}
export interface OnCompassChangeResult {
    /**
     * 面对的方向度数
     */
    direction: number;
    /**
     * 精度
     * @since 2.4.0
     */
    accuracy: number | string;
}
/**
 * @enum "game" 适用于更新游戏的回调频率，在 20ms/次 左右
 * @enum "ui" 适用于更新 UI 的回调频率，在 60ms/次 左右
 * @enum "normal" 普通的回调频率，在 200ms/次 左右
 */
export type StartDeviceMotionListeningParamInterval = "game" | "ui" | "normal";

export interface StartDeviceMotionListeningParam {
    /**
     * 监听设备方向的变化回调函数的执行频率
     * @default normal
     */
    interval?: string | StartDeviceMotionListeningParamInterval;
}
export interface OnDeviceMotionChangeResult {
    /**
     * 当 手机坐标 X/Y 和 地球 X/Y 重合时，绕着 Z 轴转动的夹角为 alpha，范围值为 [0, 2*PI)。逆时针转动为正。
     */
    alpha: number;
    /**
     * 当手机坐标 Y/Z 和地球 Y/Z 重合时，绕着 X 轴转动的夹角为 beta。范围值为 [-1*PI, PI) 。顶部朝着地球表面转动为正。也有可能朝着用户为正。
     */
    beta: number;
    /**
     * 当手机 X/Z 和地球 X/Z 重合时，绕着 Y 轴转动的夹角为 gamma。范围值为 [-1*PI/2, PI/2)。右边朝着地球表面转动为正。
     */
    gamma: number;
}
/**
 * @enum "game" 适用于更新游戏的回调频率，在 20ms/次 左右
 * @enum "ui" 适用于更新 UI 的回调频率，在 60ms/次 左右
 * @enum "normal" 普通的回调频率，在 200ms/次 左右
 */
export type StartGyroscopeParamInterval = "game" | "ui" | "normal";

export interface StartGyroscopeParam {
    /**
     * 监听陀螺仪数据回调函数的执行频率
     * @default normal
     */
    interval?: string | StartGyroscopeParamInterval;
}
export interface OnGyroscopeChangeResult {
    /**
     * x 轴的角速度
     */
    x: number;
    /**
     * y 轴的角速度
     */
    y: number;
    /**
     * z 轴的角速度
     */
    z: number;
}
/**
 * @enum 5 TRIM_MEMORY_RUNNING_MODERATE
 * @enum 10 TRIM_MEMORY_RUNNING_LOW
 * @enum 15 TRIM_MEMORY_RUNNING_CRITICAL
 */
export type OnMemoryWarningResultLevel = 5 | 10 | 15;

export interface OnMemoryWarningResult {
    /**
     * 内存告警等级，只有 Android 才有，对应系统宏定义
     */
    level: number | OnMemoryWarningResultLevel;
}
/**
 * @enum "barCode" 一维码
 * @enum "qrCode" 二维码
 * @enum "datamatrix" Data Matrix 码
 * @enum "pdf417" PDF417 条码
 */
export type ScanCodeParamScanType = "barCode" | "qrCode" | "datamatrix" | "pdf417";

export interface ScanCodeParam {
    /**
     * 是否只能从相机扫码，不允许从相册选择图片
     * @default false
     * @since 1.2.0
     */
    onlyFromCamera?: boolean;
    /**
     * 扫码类型
     * @default ['barCode', 'qrCode']
     * @since 1.7.0
     */
    scanType?: Array<string> | Array<ScanCodeParamScanType>;
}
/**
 * @enum "QR_CODE" 二维码
 * @enum "AZTEC" 一维码
 * @enum "CODABAR" 一维码
 * @enum "CODE_39" 一维码
 * @enum "CODE_93" 一维码
 * @enum "CODE_128" 一维码
 * @enum "DATA_MATRIX" 二维码
 * @enum "EAN_8" 一维码
 * @enum "EAN_13" 一维码
 * @enum "ITF" 一维码
 * @enum "MAXICODE" 一维码
 * @enum "PDF_417" 二维码
 * @enum "RSS_14" 一维码
 * @enum "RSS_EXPANDED" 一维码
 * @enum "UPC_A" 一维码
 * @enum "UPC_E" 一维码
 * @enum "UPC_EAN_EXTENSION" 一维码
 * @enum "WX_CODE" 二维码
 * @enum "CODE_25" 一维码
 */
export type ScanCodeSuccessScanType = "QR_CODE" | "AZTEC" | "CODABAR" | "CODE_39" | "CODE_93" | "CODE_128" | "DATA_MATRIX" | "EAN_8" | "EAN_13" | "ITF" | "MAXICODE" | "PDF_417" | "RSS_14" | "RSS_EXPANDED" | "UPC_A" | "UPC_E" | "UPC_EAN_EXTENSION" | "WX_CODE" | "CODE_25";

export interface ScanCodeSuccess {
    /**
     * 所扫码的内容
     */
    result: string;
    /**
     * 所扫码的类型
     */
    scanType: string | ScanCodeSuccessScanType;
    /**
     * 所扫码的字符集
     */
    charSet: string;
    /**
     * 当所扫的码为当前小程序二维码时，会返回此字段，内容为二维码携带的 path
     */
    path: string;
    /**
     * 原始数据，base64编码
     */
    rawData: string;
}
export interface GetExtConfigSuccess {
    /**
     * 第三方平台自定义的数据
     */
    extConfig: object;
}
export interface CreateRewardedVideoAdParam {
    /**
     * 广告单元 id
     */
    adUnitId: string;
    /**
     * 是否启用多例模式，默认为false
     * @since 2.8.0
     */
    multiton?: boolean;
}
export interface CreateInterstitialAdParam {
    /**
     * 广告单元 id
     */
    adUnitId: string;
}



export interface IWXApiProvider {
     /**
      * 判断小程序的API，回调，参数，组件等是否在当前版本可用。
      * @param schema 使用 ${API}.${method}.${param}.${option} 或者 ${component}.${attribute}.${option} 方式来调用
      * @return 当前版本是否可用
      * @since 1.1.1
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/base/wx.canIUse.html
      */
      canIUse(schema: string): boolean;
     /**
      * 将 Base64 字符串转成 ArrayBuffer 对象
      * @param base64 要转化成 ArrayBuffer 对象的 Base64 字符串
      * @return ArrayBuffer 对象
      * @since 1.1.0
      * @deprecated 2.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/base/wx.base64ToArrayBuffer.html
      */
      base64ToArrayBuffer(base64: string): ArrayBuffer;
     /**
      * 将 ArrayBuffer 对象转成 Base64 字符串
      * @param arrayBuffer 要转换成 Base64 字符串的 ArrayBuffer 对象
      * @return Base64 字符串
      * @since 1.1.0
      * @deprecated 2.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/base/wx.arrayBufferToBase64.html
      */
      arrayBufferToBase64(arrayBuffer: ArrayBuffer): string;
     /**
      * wx.getSystemInfo 的同步版本
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/base/system/system-info/wx.getSystemInfoSync.html
      */
      getSystemInfoSync(): GetSystemInfoSyncResult;
     /**
      * 获取系统信息
      * @param object
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/base/system/system-info/wx.getSystemInfo.html
      */
      getSystemInfo(object: CallbackParam<GetSystemInfoSuccess, any>): void;
     /**
      * 获取系统信息
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/base/system/system-info/wx.getSystemInfo.html
      */
      getSystemInfo(): Promise<GetSystemInfoSuccess>;

     /**
      * 获取全局唯一的版本更新管理器，用于管理小程序更新。关于小程序的更新机制，可以查看运行机制文档。
      * @return 更新管理器对象
      * @since 1.9.90
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/base/update/wx.getUpdateManager.html
      */
      getUpdateManager(): UpdateManager;
     /**
      * 获取小程序启动时的参数。与 App.onLaunch 的回调参数一致。
      * @return 启动参数
      * @since 2.1.2
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html
      */
      getLaunchOptionsSync(): GetLaunchOptionsSyncResult;
     /**
      * 监听小程序要打开的页面不存在事件。该事件与 App.onPageNotFound 的回调时机一致。
      * @param callback 小程序要打开的页面不存在事件的回调函数
      * @since 2.1.2
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onPageNotFound.html
      */
      onPageNotFound(callback: Function): OnPageNotFoundResult;
     /**
      * 监听小程序错误事件。如脚本错误或 API 调用报错等。该事件与 App.onError 的回调时机与参数一致。
      * @param callback 小程序错误事件的回调函数
      * @since 2.1.2
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onError.html
      */
      onError(callback: Function): void;
     /**
      * 监听音频中断结束事件。在收到 onAudioInterruptionBegin 事件之后，小程序内所有音频会暂停，收到此事件之后才可再次播放成功
      * @param callback 音频中断结束事件的回调函数
      * @since 2.6.2
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAudioInterruptionEnd.html
      */
      onAudioInterruptionEnd(callback: Function): void;
     /**
      * 监听音频因为受到系统占用而被中断开始事件。以下场景会触发此事件：闹钟、电话、FaceTime 通话、微信语音聊天、微信视频聊天。此事件触发后，小程序内所有音频会暂停。
      * @param callback 音频因为受到系统占用而被中断开始事件的回调函数
      * @since 2.6.2
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAudioInterruptionBegin.html
      */
      onAudioInterruptionBegin(callback: Function): void;
     /**
      * 监听小程序切前台事件。该事件与 App.onShow 的回调参数一致。
      * @param callback 小程序切前台事件的回调函数
      * @since 2.1.2
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppShow.html
      */
      onAppShow(callback: Function): OnAppShowResult;
     /**
      * 监听小程序切后台事件。该事件与 App.onHide 的回调时机一致。
      * @param callback 小程序切后台事件的回调函数
      * @since 2.1.2
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppHide.html
      */
      onAppHide(callback: Function): void;
     /**
      * 取消监听小程序要打开的页面不存在事件
      * @param callback 小程序要打开的页面不存在事件的回调函数
      * @since 2.1.2
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offPageNotFound.html
      */
      offPageNotFound(callback: Function): void;
     /**
      * 取消监听小程序错误事件。
      * @param callback 小程序错误事件的回调函数
      * @since 2.1.2
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offError.html
      */
      offError(callback: Function): void;
     /**
      * 取消监听音频中断结束事件
      * @param callback 音频中断结束事件的回调函数
      * @since 2.6.2
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offAudioInterruptionEnd.html
      */
      offAudioInterruptionEnd(callback: Function): void;
     /**
      * 取消监听音频因为受到系统占用而被中断开始事件
      * @param callback 音频因为受到系统占用而被中断开始事件的回调函数
      * @since 2.6.2
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offAudioInterruptionBegin.html
      */
      offAudioInterruptionBegin(callback: Function): void;
     /**
      * 取消监听小程序切前台事件
      * @param callback 小程序切前台事件的回调函数
      * @since 2.1.2
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offAppShow.html
      */
      offAppShow(callback: Function): void;
     /**
      * 取消监听小程序切后台事件
      * @param callback 小程序切后台事件的回调函数
      * @since 2.1.2
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offAppHide.html
      */
      offAppHide(callback: Function): void;
     /**
      * 设置是否打开调试开关。此开关对正式版也能生效。
      * @param param
      * @since 1.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/wx.setEnableDebug.html
      */
      setEnableDebug<T extends SetEnableDebugParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 获取实时日志管理器对象。
      * @since 2.7.1
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/wx.getRealtimeLogManager.html
      */
      getRealtimeLogManager(): RealtimeLogManager;
     /**
      * 获取日志管理器对象。
      * @param param
      * @since 2.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/wx.getLogManager.html
      */
      getLogManager(param: GetLogManagerParam): LogManager;
     /**
      * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.switchTab.html
      */
      switchTab<T extends SwitchTabParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 关闭所有页面，打开到应用内的某个页面
      * @param param
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.reLaunch.html
      */
      reLaunch<T extends ReLaunchParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.redirectTo.html
      */
      redirectTo<T extends RedirectToParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用 wx.navigateBack 可以返回到原页面。小程序中页面栈最多十层。
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html
      */
      navigateTo<T extends NavigateToParam & CallbackParam<NavigateToSuccess, any>>(param: T): CallbackResult<T, NavigateToSuccess, void>;
     /**
      * 关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages 获取当前的页面栈，决定需要返回几层。
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateBack.html
      */
      navigateBack<T extends NavigateBackParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages 获取当前的页面栈，决定需要返回几层。
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateBack.html
      */
      navigateBack(): Promise<void>;
     /**
      * 显示消息提示框
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showToast.html
      */
      showToast<T extends ShowToastParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 显示模态对话框
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showModal.html
      */
      showModal<T extends ShowModalParam & CallbackParam<ShowModalSuccess, any>>(param: T): CallbackResult<T, ShowModalSuccess, void>;
     /**
      * 显示模态对话框
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showModal.html
      */
      showModal(): Promise<ShowModalSuccess>;
     /**
      * 显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框
      * @param param
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showLoading.html
      */
      showLoading<T extends ShowLoadingParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 显示操作菜单
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showActionSheet.html
      */
      showActionSheet<T extends ShowActionSheetParam & CallbackParam<ShowActionSheetSuccess, any>>(param: T): CallbackResult<T, ShowActionSheetSuccess, void>;
     /**
      * 隐藏消息提示框
      * @param object
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.hideToast.html
      */
      hideToast(object: CallbackParam<void, any>): void;
     /**
      * 隐藏消息提示框
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.hideToast.html
      */
      hideToast(): Promise<void>;

     /**
      * 隐藏 loading 提示框
      * @param object
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.hideLoading.html
      */
      hideLoading(object: CallbackParam<void, any>): void;
     /**
      * 隐藏 loading 提示框
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.hideLoading.html
      */
      hideLoading(): Promise<void>;

     /**
      * 在当前页面显示导航条加载动画
      * @param object
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.showNavigationBarLoading.html
      */
      showNavigationBarLoading(object: CallbackParam<void, any>): void;
     /**
      * 在当前页面显示导航条加载动画
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.showNavigationBarLoading.html
      */
      showNavigationBarLoading(): Promise<void>;

     /**
      * 动态设置当前页面的标题
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.setNavigationBarTitle.html
      */
      setNavigationBarTitle<T extends SetNavigationBarTitleParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 设置页面导航条颜色
      * @param param
      * @since 1.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.setNavigationBarColor.html
      */
      setNavigationBarColor<T extends SetNavigationBarColorParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 在当前页面隐藏导航条加载动画
      * @param object
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.hideNavigationBarLoading.html
      */
      hideNavigationBarLoading(object: CallbackParam<void, any>): void;
     /**
      * 在当前页面隐藏导航条加载动画
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.hideNavigationBarLoading.html
      */
      hideNavigationBarLoading(): Promise<void>;

     /**
      * 隐藏返回首页按钮。微信7.0.7版本起，当用户打开的小程序最底层页面是非首页时，默认展示“返回首页”按钮，开发者可在页面 onShow 中调用 hideHomeButton 进行隐藏。
      * @param object
      * @since 2.8.3
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.hideHomeButton.html
      */
      hideHomeButton(object: CallbackParam<void, any>): void;
     /**
      * 隐藏返回首页按钮。微信7.0.7版本起，当用户打开的小程序最底层页面是非首页时，默认展示“返回首页”按钮，开发者可在页面 onShow 中调用 hideHomeButton 进行隐藏。
      * @since 2.8.3
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.hideHomeButton.html
      */
      hideHomeButton(): Promise<void>;

     /**
      * 动态设置下拉背景字体、loading 图的样式
      * @param param
      * @since 2.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/background/wx.setBackgroundTextStyle.html
      */
      setBackgroundTextStyle<T extends SetBackgroundTextStyleParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 动态设置窗口的背景色
      * @param param
      * @since 2.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/background/wx.setBackgroundColor.html
      */
      setBackgroundColor<T extends SetBackgroundColorParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 动态设置窗口的背景色
      * @since 2.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/background/wx.setBackgroundColor.html
      */
      setBackgroundColor(): Promise<void>;
     /**
      * 显示 tabBar 某一项的右上角的红点
      * @param param
      * @since 1.9.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.showTabBarRedDot.html
      */
      showTabBarRedDot<T extends ShowTabBarRedDotParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 显示 tabBar
      * @param param
      * @since 1.9.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.showTabBar.html
      */
      showTabBar<T extends ShowTabBarParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 显示 tabBar
      * @since 1.9.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.showTabBar.html
      */
      showTabBar(): Promise<void>;
     /**
      * 动态设置 tabBar 的整体样式
      * @param param
      * @since 1.9.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarStyle.html
      */
      setTabBarStyle<T extends SetTabBarStyleParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 动态设置 tabBar 的整体样式
      * @since 1.9.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarStyle.html
      */
      setTabBarStyle(): Promise<void>;
     /**
      * 动态设置 tabBar 某一项的内容，2.7.0 起图片支持临时文件和网络文件。
      * @param param
      * @since 1.9.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarItem.html
      */
      setTabBarItem<T extends SetTabBarItemParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 为 tabBar 某一项的右上角添加文本
      * @param param
      * @since 1.9.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarBadge.html
      */
      setTabBarBadge<T extends SetTabBarBadgeParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 移除 tabBar 某一项右上角的文本
      * @param param
      * @since 1.9.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.removeTabBarBadge.html
      */
      removeTabBarBadge<T extends RemoveTabBarBadgeParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 隐藏 tabBar 某一项的右上角的红点
      * @param param
      * @since 1.9.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.hideTabBarRedDot.html
      */
      hideTabBarRedDot<T extends HideTabBarRedDotParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 隐藏 tabBar
      * @param param
      * @since 1.9.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.hideTabBar.html
      */
      hideTabBar<T extends HideTabBarParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 隐藏 tabBar
      * @since 1.9.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.hideTabBar.html
      */
      hideTabBar(): Promise<void>;
     /**
      * 动态加载网络字体。文件地址需为下载类型。iOS 仅支持 https 格式文件地址。
      * @param param
      * @since 2.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/font/wx.loadFontFace.html
      */
      loadFontFace<T extends LoadFontFaceParam & CallbackParam<LoadFontFaceSuccess, LoadFontFaceFail>>(param: T): CallbackResult<T, LoadFontFaceSuccess, void>;
     /**
      * 停止当前页面下拉刷新。
      * @param object
      * @since 1.5.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/pull-down-refresh/wx.stopPullDownRefresh.html
      */
      stopPullDownRefresh(object: CallbackParam<void, any>): void;
     /**
      * 停止当前页面下拉刷新。
      * @since 1.5.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/pull-down-refresh/wx.stopPullDownRefresh.html
      */
      stopPullDownRefresh(): Promise<void>;

     /**
      * 开始下拉刷新。调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。
      * @param object
      * @since 1.5.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/pull-down-refresh/wx.startPullDownRefresh.html
      */
      startPullDownRefresh(object: CallbackParam<void, any>): void;
     /**
      * 开始下拉刷新。调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。
      * @since 1.5.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/pull-down-refresh/wx.startPullDownRefresh.html
      */
      startPullDownRefresh(): Promise<void>;

     /**
      * 将页面滚动到目标位置，支持选择器和滚动距离两种方式定位
      * @param param
      * @since 1.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/scroll/wx.pageScrollTo.html
      */
      pageScrollTo<T extends PageScrollToParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 将页面滚动到目标位置，支持选择器和滚动距离两种方式定位
      * @since 1.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/scroll/wx.pageScrollTo.html
      */
      pageScrollTo(): Promise<void>;
     /**
      * 创建一个动画实例 animation。调用实例的方法来描述动画。最后通过动画实例的 export 方法导出动画数据传递给组件的 animation 属性。
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/wx.createAnimation.html
      */
      createAnimation(param: CreateAnimationParam): Animation;
     /**
      * 动态设置置顶栏文字内容。只有当前小程序被置顶时能生效，如果当前小程序没有被置顶，也能调用成功，但是不会立即生效，只有在用户将这个小程序置顶后才换上设置的文字内容.
      * @param param
      * @since 1.4.3
      * @deprecated 1.9.9
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/sticky/wx.setTopBarText.html
      */
      setTopBarText<T extends SetTopBarTextParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 延迟一部分操作到下一个时间片再执行。（类似于 setTimeout）
      * @param callback
      * @since 2.2.3
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/custom-component/wx.nextTick.html
      */
      nextTick(callback: Function): void;
     /**
      * 获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。
      * @return 菜单按钮的布局位置信息
      * @since 2.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/menu/wx.getMenuButtonBoundingClientRect.html
      */
      getMenuButtonBoundingClientRect(): GetMenuButtonBoundingClientRectResult;
     /**
      * 监听窗口尺寸变化事件
      * @param callback 窗口尺寸变化事件的回调函数
      * @since 2.3.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/window/wx.onWindowResize.html
      */
      onWindowResize(callback: Function): OnWindowResizeResult;
     /**
      * 取消监听窗口尺寸变化事件
      * @param callback 窗口尺寸变化事件的回调函数
      * @since 2.3.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/window/wx.offWindowResize.html
      */
      offWindowResize(callback: Function): void;
     /**
      * 监听键盘高度变化
      * @param callback
      * @since 2.7.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/keyboard/wx.onKeyboardHeightChange.html
      */
      onKeyboardHeightChange(callback: Function): OnKeyboardHeightChangeResult;
     /**
      * 在input、textarea等focus拉起键盘之后，手动调用此接口收起键盘
      * @param object
      * @since 2.8.2
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/keyboard/wx.hideKeyboard.html
      */
      hideKeyboard(object: CallbackParam<void, any>): void;
     /**
      * 在input、textarea等focus拉起键盘之后，手动调用此接口收起键盘
      * @since 2.8.2
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/keyboard/wx.hideKeyboard.html
      */
      hideKeyboard(): Promise<void>;

     /**
      * 在input、textarea等focus之后，获取输入框的光标位置。注意：只有在focus的时候调用此接口才有效。
      * @param object
      * @since 2.7.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/keyboard/wx.getSelectedTextRange.html
      */
      getSelectedTextRange(object: CallbackParam<GetSelectedTextRangeSuccess, any>): void;
     /**
      * 在input、textarea等focus之后，获取输入框的光标位置。注意：只有在focus的时候调用此接口才有效。
      * @since 2.7.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ui/keyboard/wx.getSelectedTextRange.html
      */
      getSelectedTextRange(): Promise<GetSelectedTextRangeSuccess>;

     /**
      * 发起 HTTPS 网络请求。使用前请注意阅读相关说明。
      * @param param
      * @return 基础库 1.4.0 开始支持，低版本需做兼容处理。
      * @since 1.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html
      */
      request<T extends RequestParam & CallbackParam<RequestSuccess, any>>(param: T): CallbackResult<T, RequestSuccess, RequestTask>;
     /**
      * 下载文件资源到本地。客户端直接发起一个 HTTPS GET 请求，返回文件的本地临时路径 (本地路径)，单次下载允许的最大文件为 50MB。使用前请注意阅读相关说明。
      * @param param
      * @return 基础库 1.4.0 开始支持，低版本需做兼容处理。
      * @since 1.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/download/wx.downloadFile.html
      */
      downloadFile<T extends DownloadFileParam & CallbackParam<DownloadFileSuccess, any>>(param: T): CallbackResult<T, DownloadFileSuccess, DownloadTask>;
     /**
      * 将本地资源上传到服务器。客户端发起一个 HTTPS POST 请求，其中 content-type 为 multipart/form-data。使用前请注意阅读相关说明。
      * @param param
      * @return 基础库 1.4.0 开始支持，低版本需做兼容处理。
      * @since 1.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/wx.uploadFile.html
      */
      uploadFile<T extends UploadFileParam & CallbackParam<UploadFileSuccess, any>>(param: T): CallbackResult<T, UploadFileSuccess, UploadTask>;
     /**
      * 通过 WebSocket 连接发送数据。需要先 wx.connectSocket，并在 wx.onSocketOpen 回调之后才能发送。
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.sendSocketMessage.html
      */
      sendSocketMessage<T extends SendSocketMessageParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 监听 WebSocket 连接打开事件
      * @param callback WebSocket 连接打开事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.onSocketOpen.html
      */
      onSocketOpen(callback: Function): OnSocketOpenResult;
     /**
      * 监听 WebSocket 接受到服务器的消息事件
      * @param callback WebSocket 接受到服务器的消息事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.onSocketMessage.html
      */
      onSocketMessage(callback: Function): OnSocketMessageResult;
     /**
      * 监听 WebSocket 错误事件
      * @param callback WebSocket 错误事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.onSocketError.html
      */
      onSocketError(callback: Function): OnSocketErrorResult;
     /**
      * 监听 WebSocket 连接关闭事件
      * @param callback WebSocket 连接关闭事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.onSocketClose.html
      */
      onSocketClose(callback: Function): OnSocketCloseResult;
     /**
      * 创建一个 WebSocket 连接。使用前请注意阅读相关说明。
      * @param param
      * @return 基础库 1.7.0 开始支持，低版本需做兼容处理。
      * @since 1.7.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.connectSocket.html
      */
      connectSocket<T extends ConnectSocketParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, SocketTask>;
     /**
      * 关闭 WebSocket 连接
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.closeSocket.html
      */
      closeSocket<T extends CloseSocketParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 关闭 WebSocket 连接
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.closeSocket.html
      */
      closeSocket(): Promise<void>;
     /**
      * 停止搜索 mDNS 服务
      * @param object
      * @since 2.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.stopLocalServiceDiscovery.html
      */
      stopLocalServiceDiscovery(object: CallbackParam<void, any>): void;
     /**
      * 停止搜索 mDNS 服务
      * @since 2.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.stopLocalServiceDiscovery.html
      */
      stopLocalServiceDiscovery(): Promise<void>;

     /**
      * 开始搜索局域网下的 mDNS 服务。搜索的结果会通过 wx.onLocalService* 事件返回。
      * @param param
      * @since 2.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.startLocalServiceDiscovery.html
      */
      startLocalServiceDiscovery<T extends StartLocalServiceDiscoveryParam & CallbackParam<void, StartLocalServiceDiscoveryFail>>(param: T): CallbackResult<T, void, void>;
     /**
      * 监听 mDNS 服务解析失败的事件
      * @param callback mDNS 服务解析失败的事件的回调函数
      * @since 2.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.onLocalServiceResolveFail.html
      */
      onLocalServiceResolveFail(callback: Function): OnLocalServiceResolveFailResult;
     /**
      * 监听 mDNS 服务离开的事件
      * @param callback mDNS 服务离开的事件的回调函数
      * @since 2.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.onLocalServiceLost.html
      */
      onLocalServiceLost(callback: Function): OnLocalServiceLostResult;
     /**
      * 监听 mDNS 服务发现的事件
      * @param callback mDNS 服务发现的事件的回调函数
      * @since 2.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.onLocalServiceFound.html
      */
      onLocalServiceFound(callback: Function): OnLocalServiceFoundResult;
     /**
      * 监听 mDNS 服务停止搜索的事件
      * @param callback mDNS 服务停止搜索的事件的回调函数
      * @since 2.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.onLocalServiceDiscoveryStop.html
      */
      onLocalServiceDiscoveryStop(callback: Function): void;
     /**
      * 取消监听 mDNS 服务解析失败的事件
      * @param callback mDNS 服务解析失败的事件的回调函数
      * @since 2.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.offLocalServiceResolveFail.html
      */
      offLocalServiceResolveFail(callback: Function): void;
     /**
      * 取消监听 mDNS 服务离开的事件
      * @param callback mDNS 服务离开的事件的回调函数
      * @since 2.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.offLocalServiceLost.html
      */
      offLocalServiceLost(callback: Function): void;
     /**
      * 取消监听 mDNS 服务发现的事件
      * @param callback mDNS 服务发现的事件的回调函数
      * @since 2.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.offLocalServiceFound.html
      */
      offLocalServiceFound(callback: Function): void;
     /**
      * 取消监听 mDNS 服务停止搜索的事件
      * @param callback mDNS 服务停止搜索的事件的回调函数
      * @since 2.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.offLocalServiceDiscoveryStop.html
      */
      offLocalServiceDiscoveryStop(callback: Function): void;
     /**
      * 创建一个 UDP Socket 实例。使用前请注意阅读相关说明。
      * @return 一个 UDP Socket 实例
      * @since 2.7.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/wx.createUDPSocket.html
      */
      createUDPSocket(): UDPSocket;
     /**
      * wx.setStorage 的同步版本
      * @param key 本地缓存中指定的 key
      * @param data 需要存储的内容。只支持原生类型、Date、及能够通过JSON.stringify序列化的对象。
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorageSync.html
      */
      setStorageSync(key: string, data: any): void;
     /**
      * 将数据存储在本地缓存中指定的 key 中。会覆盖掉原来该 key 对应的内容。除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB。
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorage.html
      */
      setStorage<T extends SetStorageParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * wx.removeStorage 的同步版本
      * @param key 本地缓存中指定的 key
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.removeStorageSync.html
      */
      removeStorageSync(key: string): void;
     /**
      * 从本地缓存中移除指定 key
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.removeStorage.html
      */
      removeStorage<T extends RemoveStorageParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * wx.getStorage 的同步版本
      * @param key 本地缓存中指定的 key
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorageSync.html
      */
      getStorageSync(key: string): any;
     /**
      * wx.getStorageInfo 的同步版本
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorageInfoSync.html
      */
      getStorageInfoSync(): GetStorageInfoSyncResult;
     /**
      * 异步获取当前storage的相关信息
      * @param object
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorageInfo.html
      */
      getStorageInfo(object: CallbackParam<GetStorageInfoSuccess, any>): void;
     /**
      * 异步获取当前storage的相关信息
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorageInfo.html
      */
      getStorageInfo(): Promise<GetStorageInfoSuccess>;

     /**
      * 从本地缓存中异步获取指定 key 的内容
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorage.html
      */
      getStorage<T extends GetStorageParam & CallbackParam<GetStorageSuccess, any>>(param: T): CallbackResult<T, GetStorageSuccess, void>;
     /**
      * wx.clearStorage 的同步版本
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.clearStorageSync.html
      */
      clearStorageSync(): void;
     /**
      * 清理本地数据缓存
      * @param object
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.clearStorage.html
      */
      clearStorage(object: CallbackParam<void, any>): void;
     /**
      * 清理本地数据缓存
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.clearStorage.html
      */
      clearStorage(): Promise<void>;

     /**
      * 设置自定义登录态，在周期性拉取数据时带上，便于第三方服务器验证请求合法性
      * @param param
      * @since 2.8.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/storage/background-fetch/wx.setBackgroundFetchToken.html
      */
      setBackgroundFetchToken<T extends SetBackgroundFetchTokenParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 收到 backgroundFetch 数据时的回调
      * @param object
      * @since 2.8.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/storage/background-fetch/wx.onBackgroundFetchData.html
      */
      onBackgroundFetchData(object: CallbackParam<void, any>): void;
     /**
      * 收到 backgroundFetch 数据时的回调
      * @since 2.8.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/storage/background-fetch/wx.onBackgroundFetchData.html
      */
      onBackgroundFetchData(): Promise<void>;

     /**
      * 获取设置过的自定义登录态。若无，则返回 fail。
      * @param object
      * @since 2.8.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/storage/background-fetch/wx.getBackgroundFetchToken.html
      */
      getBackgroundFetchToken(object: CallbackParam<void, any>): void;
     /**
      * 获取设置过的自定义登录态。若无，则返回 fail。
      * @since 2.8.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/storage/background-fetch/wx.getBackgroundFetchToken.html
      */
      getBackgroundFetchToken(): Promise<void>;

     /**
      * 拉取 backgroundFetch 客户端缓存数据
      * @param param
      * @since 2.8.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/storage/background-fetch/wx.getBackgroundFetchData.html
      */
      getBackgroundFetchData<T extends GetBackgroundFetchDataParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 创建 map 上下文 MapContext 对象。
      * @param mapId map 组件的 id
      * @param thisArg 在自定义组件下，当前组件实例的this，以操作组件内 map 组件
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/map/wx.createMapContext.html
      */
      createMapContext(mapId: string, thisArg: object): MapContext;
     /**
      * 保存图片到系统相册。
      * @param param
      * @since 1.2.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.saveImageToPhotosAlbum.html
      */
      saveImageToPhotosAlbum<T extends SaveImageToPhotosAlbumParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 在新页面中全屏预览图片。预览的过程中用户可以进行保存图片、发送给朋友等操作。
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.previewImage.html
      */
      previewImage<T extends PreviewImageParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 获取图片信息。网络图片需先配置download域名才能生效。
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.getImageInfo.html
      */
      getImageInfo<T extends GetImageInfoParam & CallbackParam<GetImageInfoSuccess, any>>(param: T): CallbackResult<T, GetImageInfoSuccess, void>;
     /**
      * 压缩图片接口，可选压缩质量
      * @param param
      * @since 2.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.compressImage.html
      */
      compressImage<T extends CompressImageParam & CallbackParam<CompressImageSuccess, any>>(param: T): CallbackResult<T, CompressImageSuccess, void>;
     /**
      * 从客户端会话选择文件。
      * @param param
      * @since 2.5.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseMessageFile.html
      */
      chooseMessageFile<T extends ChooseMessageFileParam & CallbackParam<ChooseMessageFileSuccess, any>>(param: T): CallbackResult<T, ChooseMessageFileSuccess, void>;
     /**
      * 从本地相册选择图片或使用相机拍照。
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html
      */
      chooseImage<T extends ChooseImageParam & CallbackParam<ChooseImageSuccess, any>>(param: T): CallbackResult<T, ChooseImageSuccess, void>;
     /**
      * 从本地相册选择图片或使用相机拍照。
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html
      */
      chooseImage(): Promise<ChooseImageSuccess>;
     /**
      * 保存视频到系统相册。支持mp4视频格式。
      * @param param
      * @since 1.2.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.saveVideoToPhotosAlbum.html
      */
      saveVideoToPhotosAlbum<T extends SaveVideoToPhotosAlbumParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 创建 video 上下文 VideoContext 对象。
      * @param id video 组件的 id
      * @param thisArg 在自定义组件下，当前组件实例的this，以操作组件内 video 组件
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.createVideoContext.html
      */
      createVideoContext(id: string, thisArg: object): VideoContext;
     /**
      * 拍摄视频或从手机相册中选视频。
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseVideo.html
      */
      chooseVideo<T extends ChooseVideoParam & CallbackParam<ChooseVideoSuccess, any>>(param: T): CallbackResult<T, ChooseVideoSuccess, void>;
     /**
      * 拍摄视频或从手机相册中选视频。
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseVideo.html
      */
      chooseVideo(): Promise<ChooseVideoSuccess>;
     /**
      * 结束播放语音。
      * @param object
      * @since 1.6.0
      * @deprecated 1.6.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.stopVoice.html
      */
      stopVoice(object: CallbackParam<void, any>): void;
     /**
      * 结束播放语音。
      * @since 1.6.0
      * @deprecated 1.6.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.stopVoice.html
      */
      stopVoice(): Promise<void>;

     /**
      * 设置 InnerAudioContext 的播放选项。设置之后对当前小程序全局生效。
      * @param param
      * @since 2.3.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.setInnerAudioOption.html
      */
      setInnerAudioOption<T extends SetInnerAudioOptionParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 设置 InnerAudioContext 的播放选项。设置之后对当前小程序全局生效。
      * @since 2.3.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.setInnerAudioOption.html
      */
      setInnerAudioOption(): Promise<void>;
     /**
      * 开始播放语音。同时只允许一个语音文件正在播放，如果前一个语音文件还没播放完，将中断前一个语音播放。
      * @param param
      * @since 1.6.0
      * @deprecated 1.6.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.playVoice.html
      */
      playVoice<T extends PlayVoiceParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 暂停正在播放的语音。再次调用 wx.playVoice 播放同一个文件时，会从暂停处开始播放。如果想从头开始播放，需要先调用 wx.stopVoice。
      * @param object
      * @since 1.6.0
      * @deprecated 1.6.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.pauseVoice.html
      */
      pauseVoice(object: CallbackParam<void, any>): void;
     /**
      * 暂停正在播放的语音。再次调用 wx.playVoice 播放同一个文件时，会从暂停处开始播放。如果想从头开始播放，需要先调用 wx.stopVoice。
      * @since 1.6.0
      * @deprecated 1.6.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.pauseVoice.html
      */
      pauseVoice(): Promise<void>;

     /**
      * 获取当前支持的音频输入源
      * @param object
      * @since 2.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.getAvailableAudioSources.html
      */
      getAvailableAudioSources(object: CallbackParam<GetAvailableAudioSourcesSuccess, any>): void;
     /**
      * 获取当前支持的音频输入源
      * @since 2.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.getAvailableAudioSources.html
      */
      getAvailableAudioSources(): Promise<GetAvailableAudioSourcesSuccess>;

     /**
      * 创建内部 audio 上下文 InnerAudioContext 对象。
      * @since 1.6.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.createInnerAudioContext.html
      */
      createInnerAudioContext(): InnerAudioContext;
     /**
      * 创建 audio 上下文 AudioContext 对象。
      * @param id audio 组件的 id
      * @param thisArg 在自定义组件下，当前组件实例的this，以操作组件内 audio 组件
      * @since 1.6.0
      * @deprecated 1.6.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.createAudioContext.html
      */
      createAudioContext(id: string, thisArg: object): AudioContext;
     /**
      * 停止播放音乐。
      * @param object
      * @since 1.2.0
      * @deprecated 1.2.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.stopBackgroundAudio.html
      */
      stopBackgroundAudio(object: CallbackParam<void, any>): void;
     /**
      * 停止播放音乐。
      * @since 1.2.0
      * @deprecated 1.2.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.stopBackgroundAudio.html
      */
      stopBackgroundAudio(): Promise<void>;

     /**
      * 控制音乐播放进度。
      * @param param
      * @since 1.2.0
      * @deprecated 1.2.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.seekBackgroundAudio.html
      */
      seekBackgroundAudio<T extends SeekBackgroundAudioParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 使用后台播放器播放音乐。对于微信客户端来说，只能同时有一个后台音乐在播放。当用户离开小程序后，音乐将暂停播放；当用户在其他小程序占用了音乐播放器，原有小程序内的音乐将停止播放。
      * @param param
      * @since 1.2.0
      * @deprecated 1.2.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.playBackgroundAudio.html
      */
      playBackgroundAudio<T extends PlayBackgroundAudioParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 暂停播放音乐。
      * @param object
      * @since 1.2.0
      * @deprecated 1.2.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.pauseBackgroundAudio.html
      */
      pauseBackgroundAudio(object: CallbackParam<void, any>): void;
     /**
      * 暂停播放音乐。
      * @since 1.2.0
      * @deprecated 1.2.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.pauseBackgroundAudio.html
      */
      pauseBackgroundAudio(): Promise<void>;

     /**
      * 监听音乐停止事件。
      * @param callback 音乐停止事件的回调函数
      * @since 1.2.0
      * @deprecated 1.2.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.onBackgroundAudioStop.html
      */
      onBackgroundAudioStop(callback: Function): void;
     /**
      * 监听音乐播放事件。
      * @param callback 音乐播放事件的回调函数
      * @since 1.2.0
      * @deprecated 1.2.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.onBackgroundAudioPlay.html
      */
      onBackgroundAudioPlay(callback: Function): void;
     /**
      * 监听音乐暂停事件。
      * @param callback 音乐暂停事件的回调函数
      * @since 1.2.0
      * @deprecated 1.2.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.onBackgroundAudioPause.html
      */
      onBackgroundAudioPause(callback: Function): void;
     /**
      * 获取后台音乐播放状态。
      * @param object
      * @since 1.2.0
      * @deprecated 1.2.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.getBackgroundAudioPlayerState.html
      */
      getBackgroundAudioPlayerState(object: CallbackParam<GetBackgroundAudioPlayerStateSuccess, any>): void;
     /**
      * 获取后台音乐播放状态。
      * @since 1.2.0
      * @deprecated 1.2.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.getBackgroundAudioPlayerState.html
      */
      getBackgroundAudioPlayerState(): Promise<GetBackgroundAudioPlayerStateSuccess>;

     /**
      * 获取全局唯一的背景音频管理器。
小程序切入后台，如果音频处于播放状态，可以继续播放。但是后台状态不能通过调用API操纵音频的播放状态。
      * @since 1.2.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.getBackgroundAudioManager.html
      */
      getBackgroundAudioManager(): BackgroundAudioManager;
     /**
      * 创建 live-pusher 上下文 LivePusherContext 对象。
      * @since 1.7.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/wx.createLivePusherContext.html
      */
      createLivePusherContext(): LivePusherContext;
     /**
      * 创建 live-player 上下文 LivePlayerContext 对象。
      * @param id live-player 组件的 id
      * @param thisArg 在自定义组件下，当前组件实例的this，以操作组件内 live-player 组件
      * @since 1.7.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/live/wx.createLivePlayerContext.html
      */
      createLivePlayerContext(id: string, thisArg: object): LivePlayerContext;
     /**
      * 停止录音。
      * @param object
      * @since 1.6.0
      * @deprecated 1.6.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/wx.stopRecord.html
      */
      stopRecord(object: CallbackParam<void, any>): void;
     /**
      * 停止录音。
      * @since 1.6.0
      * @deprecated 1.6.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/wx.stopRecord.html
      */
      stopRecord(): Promise<void>;

     /**
      * 开始录音。当主动调用 wx.stopRecord，或者录音超过1分钟时自动结束录音。当用户离开小程序时，此接口无法调用。
      * @param object
      * @deprecated 1.6.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/wx.startRecord.html
      */
      startRecord(object: CallbackParam<StartRecordSuccess, any>): void;
     /**
      * 开始录音。当主动调用 wx.stopRecord，或者录音超过1分钟时自动结束录音。当用户离开小程序时，此接口无法调用。
      * @deprecated 1.6.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/wx.startRecord.html
      */
      startRecord(): Promise<StartRecordSuccess>;

     /**
      * 获取全局唯一的录音管理器 RecorderManager
      * @since 1.6.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/wx.getRecorderManager.html
      */
      getRecorderManager(): RecorderManager;
     /**
      * 创建 camera 上下文 CameraContext 对象。
      * @since 1.6.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/wx.createCameraContext.html
      */
      createCameraContext(): CameraContext;
     /**
      * 创建音视频处理容器，最终可将容器中的轨道合成一个视频
      * @since 2.9.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/wx.createMediaContainer.html
      */
      createMediaContainer(): MediaContainer;
     /**
      * 关闭监听实时位置变化，前后台都停止消息接收
      * @param object
      * @since 2.8.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.stopLocationUpdate.html
      */
      stopLocationUpdate(object: CallbackParam<void, any>): void;
     /**
      * 关闭监听实时位置变化，前后台都停止消息接收
      * @since 2.8.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.stopLocationUpdate.html
      */
      stopLocationUpdate(): Promise<void>;

     /**
      * 开启小程序进入前后台时均接收位置消息，需引导用户开启授权。授权以后，小程序在运行中或进入后台均可接受位置消息变化。
      * @param object
      * @since 2.8.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.startLocationUpdateBackground.html
      */
      startLocationUpdateBackground(object: CallbackParam<void, any>): void;
     /**
      * 开启小程序进入前后台时均接收位置消息，需引导用户开启授权。授权以后，小程序在运行中或进入后台均可接受位置消息变化。
      * @since 2.8.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.startLocationUpdateBackground.html
      */
      startLocationUpdateBackground(): Promise<void>;

     /**
      * 开启小程序进入前台时接收位置消息
      * @param object
      * @since 2.8.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.startLocationUpdate.html
      */
      startLocationUpdate(object: CallbackParam<void, any>): void;
     /**
      * 开启小程序进入前台时接收位置消息
      * @since 2.8.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.startLocationUpdate.html
      */
      startLocationUpdate(): Promise<void>;

     /**
      * 使用微信内置地图查看位置
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.openLocation.html
      */
      openLocation<T extends OpenLocationParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 监听实时地理位置变化事件，需结合 wx.startLocationUpdateBackground、wx.startLocationUpdate使用。
      * @param callback 实时地理位置变化事件的回调函数
      * @since 2.8.1
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.onLocationChange.html
      */
      onLocationChange(callback: Function): OnLocationChangeResult;
     /**
      * 取消监听实时地理位置变化事件
      * @param callback 实时地理位置变化事件的回调函数
      * @since 2.8.1
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.offLocationChange.html
      */
      offLocationChange(callback: Function): void;
     /**
      * 获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用。开启高精度定位，接口耗时会增加，可指定 highAccuracyExpireTime 作为超时时间。
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html
      */
      getLocation<T extends GetLocationParam & CallbackParam<GetLocationSuccess, any>>(param: T): CallbackResult<T, GetLocationSuccess, void>;
     /**
      * 获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用。开启高精度定位，接口耗时会增加，可指定 highAccuracyExpireTime 作为超时时间。
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html
      */
      getLocation(): Promise<GetLocationSuccess>;
     /**
      * 打开地图选择位置。
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.chooseLocation.html
      */
      chooseLocation<T extends ChooseLocationParam & CallbackParam<ChooseLocationSuccess, any>>(param: T): CallbackResult<T, ChooseLocationSuccess, void>;
     /**
      * 打开地图选择位置。
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.chooseLocation.html
      */
      chooseLocation(): Promise<ChooseLocationSuccess>;
     /**
      * 更新转发属性
      * @param param
      * @since 1.2.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.updateShareMenu.html
      */
      updateShareMenu<T extends UpdateShareMenuParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 更新转发属性
      * @since 1.2.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.updateShareMenu.html
      */
      updateShareMenu(): Promise<void>;
     /**
      * 显示当前页面的转发按钮
      * @param param
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.showShareMenu.html
      */
      showShareMenu<T extends ShowShareMenuParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 显示当前页面的转发按钮
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.showShareMenu.html
      */
      showShareMenu(): Promise<void>;
     /**
      * 隐藏转发按钮
      * @param object
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.hideShareMenu.html
      */
      hideShareMenu(object: CallbackParam<void, any>): void;
     /**
      * 隐藏转发按钮
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.hideShareMenu.html
      */
      hideShareMenu(): Promise<void>;

     /**
      * 获取转发详细信息
      * @param param
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.getShareInfo.html
      */
      getShareInfo<T extends GetShareInfoParam & CallbackParam<GetShareInfoSuccess, any>>(param: T): CallbackResult<T, GetShareInfoSuccess, void>;
     /**
      * 创建离屏 canvas 实例
      * @since 2.7.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.createOffscreenCanvas.html
      */
      createOffscreenCanvas(): OffscreenCanvas;
     /**
      * 创建 canvas 的绘图上下文 CanvasContext 对象
      * @param canvasId 要获取上下文的 canvas 组件 canvas-id 属性
      * @param thisArg 在自定义组件下，当前组件实例的this，表示在这个自定义组件下查找拥有 canvas-id 的 canvas ，如果省略则不在任何自定义组件内查找
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.createCanvasContext.html
      */
      createCanvasContext(canvasId: string, thisArg: object): CanvasContext;
     /**
      * 把当前画布指定区域的内容导出生成指定大小的图片。在 draw() 回调里调用该方法才能保证图片导出成功。
      * @param param
      * @param thisArg 在自定义组件下，当前组件实例的this，以操作组件内 canvas 组件
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasToTempFilePath.html
      */
      canvasToTempFilePath<T extends CanvasToTempFilePathParam & CallbackParam<CanvasToTempFilePathSuccess, any>>(param: T, thisArg: object): CallbackResult<T, CanvasToTempFilePathSuccess, void>;
     /**
      * 将像素数据绘制到画布。在自定义组件下，第二个参数传入自定义组件实例 this，以操作组件内 <canvas> 组件
      * @param param
      * @param thisArg 在自定义组件下，当前组件实例的this，以操作组件内 canvas 组件
      * @since 1.9.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasPutImageData.html
      */
      canvasPutImageData<T extends CanvasPutImageDataParam & CallbackParam<void, any>>(param: T, thisArg: object): CallbackResult<T, void, void>;
     /**
      * 获取 canvas 区域隐含的像素数据。
      * @param param
      * @param thisArg 在自定义组件下，当前组件实例的this，以操作组件内 canvas 组件
      * @since 1.9.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasGetImageData.html
      */
      canvasGetImageData<T extends CanvasGetImageDataParam & CallbackParam<CanvasGetImageDataSuccess, any>>(param: T, thisArg: object): CallbackResult<T, CanvasGetImageDataSuccess, void>;
     /**
      * 保存文件到本地。注意：saveFile 会把临时文件移动，因此调用成功后传入的 tempFilePath 将不可用
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.saveFile.html
      */
      saveFile<T extends SaveFileParam & CallbackParam<SaveFileSuccess, any>>(param: T): CallbackResult<T, SaveFileSuccess, void>;
     /**
      * 删除本地缓存文件
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.removeSavedFile.html
      */
      removeSavedFile<T extends RemoveSavedFileParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 新开页面打开文档
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.openDocument.html
      */
      openDocument<T extends OpenDocumentParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 获取该小程序下已保存的本地缓存文件列表
      * @param object
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getSavedFileList.html
      */
      getSavedFileList(object: CallbackParam<GetSavedFileListSuccess, any>): void;
     /**
      * 获取该小程序下已保存的本地缓存文件列表
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getSavedFileList.html
      */
      getSavedFileList(): Promise<GetSavedFileListSuccess>;

     /**
      * 获取本地文件的文件信息。此接口只能用于获取已保存到本地的文件，若需要获取临时文件信息，请使用 wx.getFileInfo() 接口。
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getSavedFileInfo.html
      */
      getSavedFileInfo<T extends GetSavedFileInfoParam & CallbackParam<GetSavedFileInfoSuccess, any>>(param: T): CallbackResult<T, GetSavedFileInfoSuccess, void>;
     /**
      * 获取全局唯一的文件管理器
      * @return 文件管理器
      * @since 1.9.9
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getFileSystemManager.html
      */
      getFileSystemManager(): FileSystemManager;
     /**
      * 获取文件信息
      * @param param
      * @since 1.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getFileInfo.html
      */
      getFileInfo<T extends GetFileInfoParam & CallbackParam<GetFileInfoSuccess, any>>(param: T): CallbackResult<T, GetFileInfoSuccess, void>;
     /**
      * 调用接口获取登录凭证（code）。通过凭证进而换取用户登录态信息，包括用户的唯一标识（openid）及本次登录的会话密钥（session_key）等。用户数据的加解密通讯需要依赖会话密钥完成。更多使用方法详见 小程序登录。
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html
      */
      login<T extends LoginParam & CallbackParam<LoginSuccess, any>>(param: T): CallbackResult<T, LoginSuccess, void>;
     /**
      * 调用接口获取登录凭证（code）。通过凭证进而换取用户登录态信息，包括用户的唯一标识（openid）及本次登录的会话密钥（session_key）等。用户数据的加解密通讯需要依赖会话密钥完成。更多使用方法详见 小程序登录。
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html
      */
      login(): Promise<LoginSuccess>;
     /**
      * 检查登录态是否过期。
      * @param object
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.checkSession.html
      */
      checkSession(object: CallbackParam<void, any>): void;
     /**
      * 检查登录态是否过期。
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.checkSession.html
      */
      checkSession(): Promise<void>;

     /**
      * 打开另一个小程序
      * @param param
      * @since 1.3.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/open-api/miniprogram-navigate/wx.navigateToMiniProgram.html
      */
      navigateToMiniProgram<T extends NavigateToMiniProgramParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 返回到上一个小程序。只有在当前小程序是被其他小程序打开时可以调用成功
      * @param param
      * @since 1.3.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/open-api/miniprogram-navigate/wx.navigateBackMiniProgram.html
      */
      navigateBackMiniProgram<T extends NavigateBackMiniProgramParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 返回到上一个小程序。只有在当前小程序是被其他小程序打开时可以调用成功
      * @since 1.3.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/open-api/miniprogram-navigate/wx.navigateBackMiniProgram.html
      */
      navigateBackMiniProgram(): Promise<void>;
     /**
      * 获取当前帐号信息
      * @return 帐号信息
      * @since 2.2.2
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/open-api/account-info/wx.getAccountInfoSync.html
      */
      getAccountInfoSync(): GetAccountInfoSyncResult;
     /**
      * 获取用户信息。
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html
      */
      getUserInfo<T extends GetUserInfoParam & CallbackParam<GetUserInfoSuccess, any>>(param: T): CallbackResult<T, GetUserInfoSuccess, void>;
     /**
      * 获取用户信息。
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html
      */
      getUserInfo(): Promise<GetUserInfoSuccess>;
     /**
      * 自定义业务数据监控上报接口。
      * @param name 监控ID，在「小程序管理后台」新建数据指标后获得
      * @param value 上报数值，经处理后会在「小程序管理后台」上展示每分钟的上报总量
      * @since 2.0.1
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/open-api/report/wx.reportMonitor.html
      */
      reportMonitor(name: string, value: number): void;
     /**
      * 自定义分析数据上报接口。使用前，需要在小程序管理后台自定义分析中新建事件，配置好事件名与字段。
      * @param eventName 事件名
      * @param data 上报的自定义数据，key 为配置中的字段名，value 为上报的数据。
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/open-api/data-analysis/wx.reportAnalytics.html
      */
      reportAnalytics(eventName: string, data: object): void;
     /**
      * 发起微信支付。了解更多信息，请查看微信支付接口文档
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/open-api/payment/wx.requestPayment.html
      */
      requestPayment<T extends RequestPaymentParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 提前向用户发起授权请求。调用后会立刻弹窗询问用户是否同意授权小程序使用某项功能或获取用户的某些数据，但不会实际调用对应接口。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功。更多用法详见 用户授权。
      * @param param
      * @since 1.2.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/open-api/authorize/wx.authorize.html
      */
      authorize<T extends AuthorizeParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 调起客户端小程序设置界面，返回用户设置的操作结果。设置界面只会出现小程序已经向用户请求过的权限。
      * @param object
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.openSetting.html
      */
      openSetting(object: CallbackParam<OpenSettingSuccess, any>): void;
     /**
      * 调起客户端小程序设置界面，返回用户设置的操作结果。设置界面只会出现小程序已经向用户请求过的权限。
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.openSetting.html
      */
      openSetting(): Promise<OpenSettingSuccess>;

     /**
      * 获取用户的当前设置。返回值中只会出现小程序已经向用户请求过的权限。
      * @param object
      * @since 1.2.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.getSetting.html
      */
      getSetting(object: CallbackParam<GetSettingSuccess, any>): void;
     /**
      * 获取用户的当前设置。返回值中只会出现小程序已经向用户请求过的权限。
      * @since 1.2.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.getSetting.html
      */
      getSetting(): Promise<GetSettingSuccess>;

     /**
      * 获取用户收货地址。调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址。
      * @param object
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/open-api/address/wx.chooseAddress.html
      */
      chooseAddress(object: CallbackParam<ChooseAddressSuccess, any>): void;
     /**
      * 获取用户收货地址。调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址。
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/open-api/address/wx.chooseAddress.html
      */
      chooseAddress(): Promise<ChooseAddressSuccess>;

     /**
      * 查看微信卡包中的卡券。只有通过 认证 的小程序或文化互动类目的小游戏才能使用。更多文档请参考 微信卡券接口文档。
      * @param param
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/open-api/card/wx.openCard.html
      */
      openCard<T extends OpenCardParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 批量添加卡券。只有通过 认证 的小程序或文化互动类目的小游戏才能使用。更多文档请参考 微信卡券接口文档。
      * @param param
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/open-api/card/wx.addCard.html
      */
      addCard<T extends AddCardParam & CallbackParam<AddCardSuccess, any>>(param: T): CallbackResult<T, AddCardSuccess, void>;
     /**
      * 选择用户的发票抬头。当前小程序必须关联一个公众号，且这个公众号是完成了微信认证的，才能调用 chooseInvoiceTitle。
      * @param object
      * @since 1.5.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/open-api/invoice/wx.chooseInvoiceTitle.html
      */
      chooseInvoiceTitle(object: CallbackParam<ChooseInvoiceTitleSuccess, any>): void;
     /**
      * 选择用户的发票抬头。当前小程序必须关联一个公众号，且这个公众号是完成了微信认证的，才能调用 chooseInvoiceTitle。
      * @since 1.5.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/open-api/invoice/wx.chooseInvoiceTitle.html
      */
      chooseInvoiceTitle(): Promise<ChooseInvoiceTitleSuccess>;

     /**
      * 选择用户已有的发票。
      * @param object
      * @since 2.3.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/open-api/invoice/wx.chooseInvoice.html
      */
      chooseInvoice(object: CallbackParam<ChooseInvoiceSuccess, any>): void;
     /**
      * 选择用户已有的发票。
      * @since 2.3.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/open-api/invoice/wx.chooseInvoice.html
      */
      chooseInvoice(): Promise<ChooseInvoiceSuccess>;

     /**
      * 开始 SOTER 生物认证。验证流程请参考说明。
      * @param param
      * @since 1.5.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/open-api/soter/wx.startSoterAuthentication.html
      */
      startSoterAuthentication<T extends StartSoterAuthenticationParam & CallbackParam<StartSoterAuthenticationSuccess, any>>(param: T): CallbackResult<T, StartSoterAuthenticationSuccess, void>;
     /**
      * 获取本机支持的 SOTER 生物认证方式
      * @param object
      * @since 1.5.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/open-api/soter/wx.checkIsSupportSoterAuthentication.html
      */
      checkIsSupportSoterAuthentication(object: CallbackParam<CheckIsSupportSoterAuthenticationSuccess, any>): void;
     /**
      * 获取本机支持的 SOTER 生物认证方式
      * @since 1.5.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/open-api/soter/wx.checkIsSupportSoterAuthentication.html
      */
      checkIsSupportSoterAuthentication(): Promise<CheckIsSupportSoterAuthenticationSuccess>;

     /**
      * 获取设备内是否录入如指纹等生物信息的接口
      * @param param
      * @since 1.6.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/open-api/soter/wx.checkIsSoterEnrolledInDevice.html
      */
      checkIsSoterEnrolledInDevice<T extends CheckIsSoterEnrolledInDeviceParam & CallbackParam<CheckIsSoterEnrolledInDeviceSuccess, any>>(param: T): CallbackResult<T, CheckIsSoterEnrolledInDeviceSuccess, void>;
     /**
      * 获取用户过去三十天微信运动步数。需要先调用 wx.login 接口。步数信息会在用户主动进入小程序时更新。
      * @param object
      * @since 1.2.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/open-api/werun/wx.getWeRunData.html
      */
      getWeRunData(object: CallbackParam<GetWeRunDataSuccess, any>): void;
     /**
      * 获取用户过去三十天微信运动步数。需要先调用 wx.login 接口。步数信息会在用户主动进入小程序时更新。
      * @since 1.2.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/open-api/werun/wx.getWeRunData.html
      */
      getWeRunData(): Promise<GetWeRunDataSuccess>;

     /**
      * 注意：2.8.2 版本开始，用户发生点击行为或者发起支付回调后，才可以调起订阅消息界面。
      * @param param
      * @since 2.8.2
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/open-api/subscribe-message/wx.requestSubscribeMessage.html
      */
      requestSubscribeMessage<T extends RequestSubscribeMessageParam & CallbackParam<RequestSubscribeMessageSuccess, RequestSubscribeMessageFail>>(param: T): CallbackResult<T, RequestSubscribeMessageSuccess, void>;
     /**
      * 停止搜索附近的 iBeacon 设备
      * @param object
      * @since 1.2.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.stopBeaconDiscovery.html
      */
      stopBeaconDiscovery(object: CallbackParam<void, any>): void;
     /**
      * 停止搜索附近的 iBeacon 设备
      * @since 1.2.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.stopBeaconDiscovery.html
      */
      stopBeaconDiscovery(): Promise<void>;

     /**
      * 开始搜索附近的 iBeacon 设备
      * @param param
      * @since 1.2.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.startBeaconDiscovery.html
      */
      startBeaconDiscovery<T extends StartBeaconDiscoveryParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 监听 iBeacon 设备更新事件，仅能注册一个监听
      * @param callback iBeacon 设备更新事件的回调函数
      * @since 1.2.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.onBeaconUpdate.html
      */
      onBeaconUpdate(callback: Function): OnBeaconUpdateResult;
     /**
      * 监听 iBeacon 服务状态变化事件，仅能注册一个监听
      * @param callback iBeacon 服务状态变化事件的回调函数
      * @since 1.2.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.onBeaconServiceChange.html
      */
      onBeaconServiceChange(callback: Function): OnBeaconServiceChangeResult;
     /**
      * 取消监听 iBeacon 设备更新事件
      * @param callback iBeacon 设备更新事件的回调函数
      * @since 2.8.1
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.offBeaconUpdate.html
      */
      offBeaconUpdate(callback: Function): void;
     /**
      * 取消监听 iBeacon 服务状态变化事件
      * @param callback iBeacon 服务状态变化事件的回调函数
      * @since 2.8.1
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.offBeaconServiceChange.html
      */
      offBeaconServiceChange(callback: Function): void;
     /**
      * 获取所有已搜索到的 iBeacon 设备
      * @param object
      * @since 1.2.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.getBeacons.html
      */
      getBeacons(object: CallbackParam<GetBeaconsSuccess, any>): void;
     /**
      * 获取所有已搜索到的 iBeacon 设备
      * @since 1.2.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.getBeacons.html
      */
      getBeacons(): Promise<GetBeaconsSuccess>;

     /**
      * 关闭 Wi-Fi 模块。
      * @param object
      * @since 1.6.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.stopWifi.html
      */
      stopWifi(object: CallbackParam<void, any>): void;
     /**
      * 关闭 Wi-Fi 模块。
      * @since 1.6.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.stopWifi.html
      */
      stopWifi(): Promise<void>;

     /**
      * 初始化 Wi-Fi 模块。
      * @param object
      * @since 1.6.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.startWifi.html
      */
      startWifi(object: CallbackParam<void, any>): void;
     /**
      * 初始化 Wi-Fi 模块。
      * @since 1.6.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.startWifi.html
      */
      startWifi(): Promise<void>;

     /**
      * 设置 wifiList 中 AP 的相关信息。在 onGetWifiList 回调后调用，iOS特有接口。
      * @param param
      * @since 1.6.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.setWifiList.html
      */
      setWifiList<T extends SetWifiListParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 监听连接上 Wi-Fi 的事件
      * @param callback 连接上 Wi-Fi 的事件的回调函数
      * @since 1.6.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.onWifiConnected.html
      */
      onWifiConnected(callback: Function): OnWifiConnectedResult;
     /**
      * 监听获取到 Wi-Fi 列表数据事件
      * @param callback 获取到 Wi-Fi 列表数据事件的回调函数
      * @since 1.6.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.onGetWifiList.html
      */
      onGetWifiList(callback: Function): OnGetWifiListResult;
     /**
      * 取消监听连接上 Wi-Fi 的事件。
      * @param callback 连接上 Wi-Fi 的事件的回调函数
      * @since 2.9.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.offWifiConnected.html
      */
      offWifiConnected(callback: Function): void;
     /**
      * 取消监听获取到 Wi-Fi 列表数据事件。
      * @param callback 获取到 Wi-Fi 列表数据事件的回调函数
      * @since 2.9.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.offGetWifiList.html
      */
      offGetWifiList(callback: Function): void;
     /**
      * 请求获取 Wi-Fi 列表。在 onGetWifiList 注册的回调中返回 wifiList 数据。 Android 调用前需要 用户授权 scope.userLocation。
      * @param object
      * @since 1.6.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.getWifiList.html
      */
      getWifiList(object: CallbackParam<void, any>): void;
     /**
      * 请求获取 Wi-Fi 列表。在 onGetWifiList 注册的回调中返回 wifiList 数据。 Android 调用前需要 用户授权 scope.userLocation。
      * @since 1.6.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.getWifiList.html
      */
      getWifiList(): Promise<void>;

     /**
      * 获取已连接中的 Wi-Fi 信息。
      * @param object
      * @since 1.6.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.getConnectedWifi.html
      */
      getConnectedWifi(object: CallbackParam<GetConnectedWifiSuccess, any>): void;
     /**
      * 获取已连接中的 Wi-Fi 信息。
      * @since 1.6.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.getConnectedWifi.html
      */
      getConnectedWifi(): Promise<GetConnectedWifiSuccess>;

     /**
      * 连接 Wi-Fi。若已知 Wi-Fi 信息，可以直接利用该接口连接。仅 Android 与 iOS 11 以上版本支持。
      * @param param
      * @since 1.6.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.connectWifi.html
      */
      connectWifi<T extends ConnectWifiParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 添加手机通讯录联系人。用户可以选择将该表单以「新增联系人」或「添加到已有联系人」的方式，写入手机系统通讯录。
      * @param param
      * @since 1.2.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/contact/wx.addPhoneContact.html
      */
      addPhoneContact<T extends AddPhoneContactParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 向低功耗蓝牙设备特征值中写入二进制数据。注意：必须设备的特征值支持 write 才可以成功调用。
      * @param param
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.writeBLECharacteristicValue.html
      */
      writeBLECharacteristicValue<T extends WriteBLECharacteristicValueParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 读取低功耗蓝牙设备的特征值的二进制数据值。注意：必须设备的特征值支持 read 才可以成功调用。
      * @param param
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.readBLECharacteristicValue.html
      */
      readBLECharacteristicValue<T extends ReadBLECharacteristicValueParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 监听低功耗蓝牙连接状态的改变事件。包括开发者主动连接或断开连接，设备丢失，连接异常断开等等
      * @param callback 低功耗蓝牙连接状态的改变事件的回调函数
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.onBLEConnectionStateChange.html
      */
      onBLEConnectionStateChange(callback: Function): OnBLEConnectionStateChangeResult;
     /**
      * 监听低功耗蓝牙设备的特征值变化事件。必须先启用 notifyBLECharacteristicValueChange 接口才能接收到设备推送的 notification。
      * @param callback 低功耗蓝牙设备的特征值变化事件的回调函数
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.onBLECharacteristicValueChange.html
      */
      onBLECharacteristicValueChange(callback: Function): OnBLECharacteristicValueChangeResult;
     /**
      * 取消监听低功耗蓝牙连接状态的改变事件
      * @param callback 低功耗蓝牙连接状态的改变事件的回调函数
      * @since 2.9.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.offBLEConnectionStateChange.html
      */
      offBLEConnectionStateChange(callback: Function): void;
     /**
      * 取消监听低功耗蓝牙设备的特征值变化事件。
      * @param callback 低功耗蓝牙设备的特征值变化事件的回调函数
      * @since 2.9.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.offBLECharacteristicValueChange.html
      */
      offBLECharacteristicValueChange(callback: Function): void;
     /**
      * 启用低功耗蓝牙设备特征值变化时的 notify 功能，订阅特征值。注意：必须设备的特征值支持 notify 或者 indicate 才可以成功调用。
      * @param param
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.notifyBLECharacteristicValueChange.html
      */
      notifyBLECharacteristicValueChange<T extends NotifyBLECharacteristicValueChangeParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 获取蓝牙设备所有服务(service)。
      * @param param
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.getBLEDeviceServices.html
      */
      getBLEDeviceServices<T extends GetBLEDeviceServicesParam & CallbackParam<GetBLEDeviceServicesSuccess, any>>(param: T): CallbackResult<T, GetBLEDeviceServicesSuccess, void>;
     /**
      * 获取蓝牙设备某个服务中所有特征值(characteristic)。
      * @param param
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.getBLEDeviceCharacteristics.html
      */
      getBLEDeviceCharacteristics<T extends GetBLEDeviceCharacteristicsParam & CallbackParam<GetBLEDeviceCharacteristicsSuccess, any>>(param: T): CallbackResult<T, GetBLEDeviceCharacteristicsSuccess, void>;
     /**
      * 连接低功耗蓝牙设备。
      * @param param
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.createBLEConnection.html
      */
      createBLEConnection<T extends CreateBLEConnectionParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 断开与低功耗蓝牙设备的连接。
      * @param param
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.closeBLEConnection.html
      */
      closeBLEConnection<T extends CloseBLEConnectionParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 停止搜寻附近的蓝牙外围设备。若已经找到需要的蓝牙设备并不需要继续搜索时，建议调用该接口停止蓝牙搜索。
      * @param object
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.stopBluetoothDevicesDiscovery.html
      */
      stopBluetoothDevicesDiscovery(object: CallbackParam<void, any>): void;
     /**
      * 停止搜寻附近的蓝牙外围设备。若已经找到需要的蓝牙设备并不需要继续搜索时，建议调用该接口停止蓝牙搜索。
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.stopBluetoothDevicesDiscovery.html
      */
      stopBluetoothDevicesDiscovery(): Promise<void>;

     /**
      * 开始搜寻附近的蓝牙外围设备。此操作比较耗费系统资源，请在搜索并连接到设备后调用 wx.stopBluetoothDevicesDiscovery 方法停止搜索。
      * @param param
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.startBluetoothDevicesDiscovery.html
      */
      startBluetoothDevicesDiscovery<T extends StartBluetoothDevicesDiscoveryParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 开始搜寻附近的蓝牙外围设备。此操作比较耗费系统资源，请在搜索并连接到设备后调用 wx.stopBluetoothDevicesDiscovery 方法停止搜索。
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.startBluetoothDevicesDiscovery.html
      */
      startBluetoothDevicesDiscovery(): Promise<void>;
     /**
      * 初始化蓝牙模块
      * @param object
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.openBluetoothAdapter.html
      */
      openBluetoothAdapter(object: CallbackParam<void, any>): void;
     /**
      * 初始化蓝牙模块
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.openBluetoothAdapter.html
      */
      openBluetoothAdapter(): Promise<void>;

     /**
      * 监听寻找到新设备的事件
      * @param callback 寻找到新设备的事件的回调函数
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.onBluetoothDeviceFound.html
      */
      onBluetoothDeviceFound(callback: Function): OnBluetoothDeviceFoundResult;
     /**
      * 监听蓝牙适配器状态变化事件
      * @param callback 蓝牙适配器状态变化事件的回调函数
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.onBluetoothAdapterStateChange.html
      */
      onBluetoothAdapterStateChange(callback: Function): OnBluetoothAdapterStateChangeResult;
     /**
      * 取消监听寻找到新设备的事件。
      * @param callback 寻找到新设备的事件的回调函数
      * @since 2.9.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.offBluetoothDeviceFound.html
      */
      offBluetoothDeviceFound(callback: Function): void;
     /**
      * 取消监听蓝牙适配器状态变化事件。
      * @param callback 蓝牙适配器状态变化事件的回调函数
      * @since 2.9.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.offBluetoothAdapterStateChange.html
      */
      offBluetoothAdapterStateChange(callback: Function): void;
     /**
      * 根据 uuid 获取处于已连接状态的设备。
      * @param param
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.getConnectedBluetoothDevices.html
      */
      getConnectedBluetoothDevices<T extends GetConnectedBluetoothDevicesParam & CallbackParam<GetConnectedBluetoothDevicesSuccess, any>>(param: T): CallbackResult<T, GetConnectedBluetoothDevicesSuccess, void>;
     /**
      * 获取在蓝牙模块生效期间所有已发现的蓝牙设备。包括已经和本机处于连接状态的设备。
      * @param object
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.getBluetoothDevices.html
      */
      getBluetoothDevices(object: CallbackParam<GetBluetoothDevicesSuccess, any>): void;
     /**
      * 获取在蓝牙模块生效期间所有已发现的蓝牙设备。包括已经和本机处于连接状态的设备。
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.getBluetoothDevices.html
      */
      getBluetoothDevices(): Promise<GetBluetoothDevicesSuccess>;

     /**
      * 获取本机蓝牙适配器状态。
      * @param object
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.getBluetoothAdapterState.html
      */
      getBluetoothAdapterState(object: CallbackParam<GetBluetoothAdapterStateSuccess, any>): void;
     /**
      * 获取本机蓝牙适配器状态。
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.getBluetoothAdapterState.html
      */
      getBluetoothAdapterState(): Promise<GetBluetoothAdapterStateSuccess>;

     /**
      * 关闭蓝牙模块。调用该方法将断开所有已建立的连接并释放系统资源。建议在使用蓝牙流程后，与 wx.openBluetoothAdapter 成对调用。
      * @param object
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.closeBluetoothAdapter.html
      */
      closeBluetoothAdapter(object: CallbackParam<void, any>): void;
     /**
      * 关闭蓝牙模块。调用该方法将断开所有已建立的连接并释放系统资源。建议在使用蓝牙流程后，与 wx.openBluetoothAdapter 成对调用。
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.closeBluetoothAdapter.html
      */
      closeBluetoothAdapter(): Promise<void>;

     /**
      * wx.getBatteryInfo 的同步版本
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/battery/wx.getBatteryInfoSync.html
      */
      getBatteryInfoSync(): GetBatteryInfoSyncResult;
     /**
      * 获取设备电量。同步 API wx.getBatteryInfoSync 在 iOS 上不可用。
      * @param object
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/battery/wx.getBatteryInfo.html
      */
      getBatteryInfo(object: CallbackParam<GetBatteryInfoSuccess, any>): void;
     /**
      * 获取设备电量。同步 API wx.getBatteryInfoSync 在 iOS 上不可用。
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/battery/wx.getBatteryInfo.html
      */
      getBatteryInfo(): Promise<GetBatteryInfoSuccess>;

     /**
      * 设置系统剪贴板的内容。调用成功后，会弹出 toast 提示"内容已复制"，持续 1.5s
      * @param param
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/clipboard/wx.setClipboardData.html
      */
      setClipboardData<T extends SetClipboardDataParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 获取系统剪贴板的内容
      * @param object
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/clipboard/wx.getClipboardData.html
      */
      getClipboardData(object: CallbackParam<GetClipboardDataSuccess, any>): void;
     /**
      * 获取系统剪贴板的内容
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/clipboard/wx.getClipboardData.html
      */
      getClipboardData(): Promise<GetClipboardDataSuccess>;

     /**
      * 关闭 NFC 模块。仅在安卓系统下有效。
      * @param object
      * @since 1.7.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/wx.stopHCE.html
      */
      stopHCE(object: CallbackParam<void, any>): void;
     /**
      * 关闭 NFC 模块。仅在安卓系统下有效。
      * @since 1.7.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/wx.stopHCE.html
      */
      stopHCE(): Promise<void>;

     /**
      * 初始化 NFC 模块。
      * @param param
      * @since 1.7.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/wx.startHCE.html
      */
      startHCE<T extends StartHCEParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 发送 NFC 消息。仅在安卓系统下有效。
      * @param param
      * @since 1.7.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/wx.sendHCEMessage.html
      */
      sendHCEMessage<T extends SendHCEMessageParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 监听接收 NFC 设备消息事件，仅能注册一个监听
      * @param callback 接收 NFC 设备消息事件的回调函数
      * @since 1.7.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/wx.onHCEMessage.html
      */
      onHCEMessage(callback: Function): OnHCEMessageResult;
     /**
      * 接收 NFC 设备消息事件，取消事件监听。
      * @param callback 接收 NFC 设备消息事件的回调函数
      * @since 2.8.1
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/wx.offHCEMessage.html
      */
      offHCEMessage(callback: Function): void;
     /**
      * 判断当前设备是否支持 HCE 能力。
      * @param object
      * @since 1.7.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/wx.getHCEState.html
      */
      getHCEState(object: CallbackParam<void, any>): void;
     /**
      * 判断当前设备是否支持 HCE 能力。
      * @since 1.7.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/wx.getHCEState.html
      */
      getHCEState(): Promise<void>;

     /**
      * 监听网络状态变化事件
      * @param callback 网络状态变化事件的回调函数
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.onNetworkStatusChange.html
      */
      onNetworkStatusChange(callback: Function): OnNetworkStatusChangeResult;
     /**
      * 取消监听网络状态变化事件，参数为空，则取消所有的事件监听。
      * @param callback 网络状态变化事件的回调函数
      * @since 2.9.3
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.offNetworkStatusChange.html
      */
      offNetworkStatusChange(callback: Function): void;
     /**
      * 获取网络类型
      * @param object
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.getNetworkType.html
      */
      getNetworkType(object: CallbackParam<GetNetworkTypeSuccess, any>): void;
     /**
      * 获取网络类型
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.getNetworkType.html
      */
      getNetworkType(): Promise<GetNetworkTypeSuccess>;

     /**
      * 设置屏幕亮度
      * @param param
      * @since 1.2.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.setScreenBrightness.html
      */
      setScreenBrightness<T extends SetScreenBrightnessParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 设置是否保持常亮状态。仅在当前小程序生效，离开小程序后设置失效。
      * @param param
      * @since 1.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.setKeepScreenOn.html
      */
      setKeepScreenOn<T extends SetKeepScreenOnParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 监听用户主动截屏事件。用户使用系统截屏按键截屏时触发，只能注册一个监听
      * @param callback 用户主动截屏事件的回调函数
      * @since 1.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.onUserCaptureScreen.html
      */
      onUserCaptureScreen(callback: Function): void;
     /**
      * 用户主动截屏事件。取消事件监听。
      * @param callback 用户主动截屏事件的回调函数
      * @since 2.9.3
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.offUserCaptureScreen.html
      */
      offUserCaptureScreen(callback: Function): void;
     /**
      * 获取屏幕亮度
      * @param object
      * @since 1.2.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.getScreenBrightness.html
      */
      getScreenBrightness(object: CallbackParam<GetScreenBrightnessSuccess, any>): void;
     /**
      * 获取屏幕亮度
      * @since 1.2.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.getScreenBrightness.html
      */
      getScreenBrightness(): Promise<GetScreenBrightnessSuccess>;

     /**
      * 拨打电话
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/phone/wx.makePhoneCall.html
      */
      makePhoneCall<T extends MakePhoneCallParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 停止监听加速度数据。
      * @param object
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/accelerometer/wx.stopAccelerometer.html
      */
      stopAccelerometer(object: CallbackParam<void, any>): void;
     /**
      * 停止监听加速度数据。
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/accelerometer/wx.stopAccelerometer.html
      */
      stopAccelerometer(): Promise<void>;

     /**
      * 开始监听加速度数据。
      * @param param
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/accelerometer/wx.startAccelerometer.html
      */
      startAccelerometer<T extends StartAccelerometerParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 开始监听加速度数据。
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/accelerometer/wx.startAccelerometer.html
      */
      startAccelerometer(): Promise<void>;
     /**
      * 监听加速度数据事件。频率根据 wx.startAccelerometer() 的 interval 参数, 接口调用后会自动开始监听。
      * @param callback 加速度数据事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/accelerometer/wx.onAccelerometerChange.html
      */
      onAccelerometerChange(callback: Function): OnAccelerometerChangeResult;
     /**
      * 取消监听加速度数据事件，参数为空，则取消所有的事件监听。
      * @param callback 加速度数据事件的回调函数
      * @since 2.9.3
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/accelerometer/wx.offAccelerometerChange.html
      */
      offAccelerometerChange(callback: Function): void;
     /**
      * 停止监听罗盘数据
      * @param object
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/compass/wx.stopCompass.html
      */
      stopCompass(object: CallbackParam<void, any>): void;
     /**
      * 停止监听罗盘数据
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/compass/wx.stopCompass.html
      */
      stopCompass(): Promise<void>;

     /**
      * 开始监听罗盘数据
      * @param object
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/compass/wx.startCompass.html
      */
      startCompass(object: CallbackParam<void, any>): void;
     /**
      * 开始监听罗盘数据
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/compass/wx.startCompass.html
      */
      startCompass(): Promise<void>;

     /**
      * 监听罗盘数据变化事件。频率：5 次/秒，接口调用后会自动开始监听，可使用 wx.stopCompass 停止监听。
      * @param callback 罗盘数据变化事件的回调函数
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/compass/wx.onCompassChange.html
      */
      onCompassChange(callback: Function): OnCompassChangeResult;
     /**
      * 取消监听罗盘数据变化事件，参数为空，则取消所有的事件监听。
      * @param callback 罗盘数据变化事件的回调函数
      * @since 2.9.3
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/compass/wx.offCompassChange.html
      */
      offCompassChange(callback: Function): void;
     /**
      * 停止监听设备方向的变化。
      * @param object
      * @since 2.3.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/motion/wx.stopDeviceMotionListening.html
      */
      stopDeviceMotionListening(object: CallbackParam<void, any>): void;
     /**
      * 停止监听设备方向的变化。
      * @since 2.3.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/motion/wx.stopDeviceMotionListening.html
      */
      stopDeviceMotionListening(): Promise<void>;

     /**
      * 开始监听设备方向的变化。
      * @param param
      * @since 2.3.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/motion/wx.startDeviceMotionListening.html
      */
      startDeviceMotionListening<T extends StartDeviceMotionListeningParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 开始监听设备方向的变化。
      * @since 2.3.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/motion/wx.startDeviceMotionListening.html
      */
      startDeviceMotionListening(): Promise<void>;
     /**
      * 监听设备方向变化事件。频率根据 wx.startDeviceMotionListening() 的 interval 参数。可以使用 wx.stopDeviceMotionListening() 停止监听。
      * @param callback 设备方向变化事件的回调函数
      * @since 2.3.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/motion/wx.onDeviceMotionChange.html
      */
      onDeviceMotionChange(callback: Function): OnDeviceMotionChangeResult;
     /**
      * 取消监听设备方向变化事件，参数为空，则取消所有的事件监听。
      * @param callback 设备方向变化事件的回调函数
      * @since 2.9.3
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/motion/wx.offDeviceMotionChange.html
      */
      offDeviceMotionChange(callback: Function): void;
     /**
      * 停止监听陀螺仪数据。
      * @param object
      * @since 2.3.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/gyroscope/wx.stopGyroscope.html
      */
      stopGyroscope(object: CallbackParam<void, any>): void;
     /**
      * 停止监听陀螺仪数据。
      * @since 2.3.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/gyroscope/wx.stopGyroscope.html
      */
      stopGyroscope(): Promise<void>;

     /**
      * 开始监听陀螺仪数据。
      * @param param
      * @since 2.3.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/gyroscope/wx.startGyroscope.html
      */
      startGyroscope<T extends StartGyroscopeParam & CallbackParam<void, any>>(param: T): CallbackResult<T, void, void>;
     /**
      * 开始监听陀螺仪数据。
      * @since 2.3.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/gyroscope/wx.startGyroscope.html
      */
      startGyroscope(): Promise<void>;
     /**
      * 监听陀螺仪数据变化事件。频率根据 wx.startGyroscope() 的 interval 参数。可以使用 wx.stopGyroscope() 停止监听。
      * @param callback 陀螺仪数据变化事件的回调函数
      * @since 2.3.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/gyroscope/wx.onGyroscopeChange.html
      */
      onGyroscopeChange(callback: Function): OnGyroscopeChangeResult;
     /**
      * 取消监听陀螺仪数据变化事件。
      * @param callback 陀螺仪数据变化事件的回调函数
      * @since 2.9.3
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/gyroscope/wx.offGyroscopeChange.html
      */
      offGyroscopeChange(callback: Function): void;
     /**
      * 监听内存不足告警事件。
      * @param callback 内存不足告警事件的回调函数
      * @since 2.0.2
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/performance/wx.onMemoryWarning.html
      */
      onMemoryWarning(callback: Function): OnMemoryWarningResult;
     /**
      * 取消监听内存不足告警事件。
      * @param callback 内存不足告警事件的回调函数
      * @since 2.9.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/performance/wx.offMemoryWarning.html
      */
      offMemoryWarning(callback: Function): void;
     /**
      * 调起客户端扫码界面进行扫码
      * @param param
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/scan/wx.scanCode.html
      */
      scanCode<T extends ScanCodeParam & CallbackParam<ScanCodeSuccess, any>>(param: T): CallbackResult<T, ScanCodeSuccess, void>;
     /**
      * 调起客户端扫码界面进行扫码
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/scan/wx.scanCode.html
      */
      scanCode(): Promise<ScanCodeSuccess>;
     /**
      * 使手机发生较短时间的振动（15 ms）。仅在 iPhone 7 / 7 Plus 以上及 Android 机型生效
      * @param object
      * @since 1.2.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/vibrate/wx.vibrateShort.html
      */
      vibrateShort(object: CallbackParam<void, any>): void;
     /**
      * 使手机发生较短时间的振动（15 ms）。仅在 iPhone 7 / 7 Plus 以上及 Android 机型生效
      * @since 1.2.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/vibrate/wx.vibrateShort.html
      */
      vibrateShort(): Promise<void>;

     /**
      * 使手机发生较长时间的振动（400 ms)
      * @param object
      * @since 1.2.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/vibrate/wx.vibrateLong.html
      */
      vibrateLong(object: CallbackParam<void, any>): void;
     /**
      * 使手机发生较长时间的振动（400 ms)
      * @since 1.2.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/vibrate/wx.vibrateLong.html
      */
      vibrateLong(): Promise<void>;

     /**
      * 创建一个 Worker 线程。目前限制最多只能创建一个 Worker，创建下一个 Worker 前请先调用 Worker.terminate
      * @param scriptPath worker 入口文件的绝对路径
      * @return Worker 对象
      * @since 1.9.90
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/worker/wx.createWorker.html
      */
      createWorker(scriptPath: string): Worker;
     /**
      * wx.getExtConfig 的同步版本。
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ext/wx.getExtConfigSync.html
      */
      getExtConfigSync(): object;
     /**
      * 获取第三方平台自定义的数据字段。
      * @param object
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ext/wx.getExtConfig.html
      */
      getExtConfig(object: CallbackParam<GetExtConfigSuccess, any>): void;
     /**
      * 获取第三方平台自定义的数据字段。
      * @since 1.1.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ext/wx.getExtConfig.html
      */
      getExtConfig(): Promise<GetExtConfigSuccess>;

     /**
      * 返回一个 SelectorQuery 对象实例。在自定义组件或包含自定义组件的页面中，应使用 this.createSelectorQuery() 来代替。
      * @since 1.4.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createSelectorQuery.html
      */
      createSelectorQuery(): SelectorQuery;
     /**
      * 创建并返回一个 IntersectionObserver 对象实例。在自定义组件或包含自定义组件的页面中，应使用 this.createIntersectionObserver([options]) 来代替。
      * @param component 自定义组件实例
      * @param options 选项
      * @since 1.9.3
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createIntersectionObserver.html
      */
      createIntersectionObserver(component: object, options: object): IntersectionObserver;
     /**
      * 创建激励视频广告组件。请通过 wx.getSystemInfoSync() 返回对象的 SDKVersion 判断基础库版本号后再使用该 API（小游戏端要求 >= 2.0.4， 小程序端要求 >= 2.6.0）。调用该方法创建的激励视频广告是一个单例（小游戏端是全局单例，小程序端是页面内单例，在小程序端的单例对象不允许跨页面使用）。
      * @param param
      * @return 激励视频广告组件
      * @since 2.0.4
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ad/wx.createRewardedVideoAd.html
      */
      createRewardedVideoAd(param: CreateRewardedVideoAdParam): RewardedVideoAd;
     /**
      * 创建插屏广告组件。请通过 wx.getSystemInfoSync() 返回对象的 SDKVersion 判断基础库版本号后再使用该 API。每次调用该方法创建插屏广告都会返回一个全新的实例（小程序端的插屏广告实例不允许跨页面使用）。
      * @param param
      * @return 插屏广告组件
      * @since 2.6.0
      * @see https://developers.weixin.qq.com/miniprogram/dev/api/ad/wx.createInterstitialAd.html
      */
      createInterstitialAd(param: CreateInterstitialAdParam): InterstitialAd;
}