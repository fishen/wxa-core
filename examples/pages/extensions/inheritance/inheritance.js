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
var MyBasePage = (function (_super) {
    __extends(MyBasePage, _super);
    function MyBasePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyBasePage.prototype.onLoad = function (options) {
        console.log('inheritance.', options);
    };
    return MyBasePage;
}(wxa_core_1.Page));
exports.MyBasePage = MyBasePage;
var InheritancePage = (function (_super) {
    __extends(InheritancePage, _super);
    function InheritancePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InheritancePage.prototype.onLoad = function (options) {
        _super.prototype.onLoad.call(this, options);
        console.log('inheritance page loaded.');
    };
    InheritancePage = __decorate([
        wxa_core_1.page()
    ], InheritancePage);
    return InheritancePage;
}(MyBasePage));
exports.InheritancePage = InheritancePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5oZXJpdGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmhlcml0YW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBc0M7QUFFdEM7SUFBdUMsOEJBQU87SUFBOUM7O0lBS0EsQ0FBQztJQUpDLDJCQUFNLEdBQU4sVUFBTyxPQUFZO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRXZDLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUFMRCxDQUF1QyxlQUFJLEdBSzFDO0FBTFksZ0NBQVU7QUFRdkI7SUFBcUMsbUNBQVU7SUFBL0M7O0lBS0EsQ0FBQztJQUpDLGdDQUFNLEdBQU4sVUFBTyxPQUErQjtRQUNwQyxpQkFBTSxNQUFNLFlBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFKVSxlQUFlO1FBRDNCLGVBQUksRUFBRTtPQUNNLGVBQWUsQ0FLM0I7SUFBRCxzQkFBQztDQUFBLEFBTEQsQ0FBcUMsVUFBVSxHQUs5QztBQUxZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGFnZSwgUGFnZSB9IGZyb20gJ3d4YS1jb3JlJztcblxuZXhwb3J0IGNsYXNzIE15QmFzZVBhZ2U8VD1hbnk+IGV4dGVuZHMgUGFnZTxUPiB7XG4gIG9uTG9hZChvcHRpb25zOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZygnaW5oZXJpdGFuY2UuJywgb3B0aW9ucyk7XG4gICAgLy8gZG8gc29tZXRoaW5nO1xuICB9XG59XG5cbkBwYWdlKClcbmV4cG9ydCBjbGFzcyBJbmhlcml0YW5jZVBhZ2UgZXh0ZW5kcyBNeUJhc2VQYWdlIHtcbiAgb25Mb2FkKG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pIHtcbiAgICBzdXBlci5vbkxvYWQob3B0aW9ucyk7XG4gICAgY29uc29sZS5sb2coJ2luaGVyaXRhbmNlIHBhZ2UgbG9hZGVkLicpO1xuICB9XG59Il19