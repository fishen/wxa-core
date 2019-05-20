import { page, Page } from 'wxa-core';

@page({
    ctor(obj: any) {
        const { onLoad } = obj;
        obj.onLoad = function (options: any) {
            console.log('ctor.', options);
            // do something;
            onLoad && onLoad.call(this, options);
        };
        console.log(obj);
        return obj;
    }
})
export class MyPage extends Page {
    onLoad(_options: Record<string, string>) {
        console.log('ctor page loaded.');
    }
}