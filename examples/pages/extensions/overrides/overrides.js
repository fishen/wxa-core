"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var wxa_core_1 = require("wxa-core");
function mypage(constructor) {
    return wxa_core_1.cpage(function (p) {
        var onLoad = p.onLoad;
        p.onLoad = function (options) {
            console.log('overrides.', options);
            onLoad && onLoad.call(this, options);
        };
        p.onShow = function () {
            console.log("page '" + this.route + "' showing.");
        };
        return p;
    })(constructor);
}
var InheritancePage = (function (_super) {
    __extends(InheritancePage, _super);
    function InheritancePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InheritancePage.prototype.onLoad = function (_options) {
        console.log('overrides page loaded.');
    };
    InheritancePage = __decorate([
        mypage
    ], InheritancePage);
    return InheritancePage;
}(wxa_core_1.BasePage));
exports.InheritancePage = InheritancePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcnJpZGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3ZlcnJpZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUFrRDtBQUVsRCxTQUFTLE1BQU0sQ0FBQyxXQUFnQjtJQUM5QixPQUFPLGdCQUFLLENBQUMsVUFBQSxDQUFDO1FBQ0osSUFBQSxpQkFBTSxDQUFPO1FBQ3JCLENBQUMsQ0FBQyxNQUFNLEdBQUcsVUFBVSxPQUErQjtZQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztZQUVuQyxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDO1FBQ0YsQ0FBQyxDQUFDLE1BQU0sR0FBRztZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBUyxJQUFJLENBQUMsS0FBSyxlQUFZLENBQUMsQ0FBQTtRQUM5QyxDQUFDLENBQUM7UUFDRixPQUFPLENBQUMsQ0FBQztJQUNYLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ2xCLENBQUM7QUFHRDtJQUFxQyxtQ0FBUTtJQUE3Qzs7SUFJQSxDQUFDO0lBSEMsZ0NBQU0sR0FBTixVQUFPLFFBQWdDO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBSFUsZUFBZTtRQUQzQixNQUFNO09BQ00sZUFBZSxDQUkzQjtJQUFELHNCQUFDO0NBQUEsQUFKRCxDQUFxQyxtQkFBUSxHQUk1QztBQUpZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZVBhZ2UsIElQYWdlLCBjcGFnZSB9IGZyb20gJ3d4YS1jb3JlJztcblxuZnVuY3Rpb24gbXlwYWdlKGNvbnN0cnVjdG9yOiBhbnkpIHtcbiAgcmV0dXJuIGNwYWdlKHAgPT4ge1xuICAgIGNvbnN0IHsgb25Mb2FkIH0gPSBwO1xuICAgIHAub25Mb2FkID0gZnVuY3Rpb24gKG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pIHtcbiAgICAgIGNvbnNvbGUubG9nKCdvdmVycmlkZXMuJywgb3B0aW9ucyk7XG4gICAgICAvLyBkbyBzb21ldGhpbmc7XG4gICAgICBvbkxvYWQgJiYgb25Mb2FkLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgfTtcbiAgICBwLm9uU2hvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBwYWdlICcke3RoaXMucm91dGV9JyBzaG93aW5nLmApXG4gICAgfTtcbiAgICByZXR1cm4gcDtcbiAgfSkoY29uc3RydWN0b3IpO1xufVxuXG5AbXlwYWdlXG5leHBvcnQgY2xhc3MgSW5oZXJpdGFuY2VQYWdlIGV4dGVuZHMgQmFzZVBhZ2UgaW1wbGVtZW50cyBJUGFnZSB7XG4gIG9uTG9hZChfb3B0aW9uczogUmVjb3JkPHN0cmluZywgc3RyaW5nPikge1xuICAgIGNvbnNvbGUubG9nKCdvdmVycmlkZXMgcGFnZSBsb2FkZWQuJyk7XG4gIH1cbn1cblxuIl19