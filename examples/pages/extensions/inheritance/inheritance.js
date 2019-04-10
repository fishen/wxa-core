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
}(wxa_core_1.BasePage));
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
        wxa_core_1.page
    ], InheritancePage);
    return InheritancePage;
}(MyBasePage));
exports.InheritancePage = InheritancePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5oZXJpdGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmhlcml0YW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBMEM7QUFFMUM7SUFBdUMsOEJBQVc7SUFBbEQ7O0lBS0EsQ0FBQztJQUpDLDJCQUFNLEdBQU4sVUFBTyxPQUFZO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRXZDLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUFMRCxDQUF1QyxtQkFBUSxHQUs5QztBQUxZLGdDQUFVO0FBUXZCO0lBQXFDLG1DQUFVO0lBQS9DOztJQUtBLENBQUM7SUFKQyxnQ0FBTSxHQUFOLFVBQU8sT0FBK0I7UUFDcEMsaUJBQU0sTUFBTSxZQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBSlUsZUFBZTtRQUQzQixlQUFJO09BQ1EsZUFBZSxDQUszQjtJQUFELHNCQUFDO0NBQUEsQUFMRCxDQUFxQyxVQUFVLEdBSzlDO0FBTFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwYWdlLCBCYXNlUGFnZSB9IGZyb20gJ3d4YS1jb3JlJztcblxuZXhwb3J0IGNsYXNzIE15QmFzZVBhZ2U8VD1hbnk+IGV4dGVuZHMgQmFzZVBhZ2U8VD4ge1xuICBvbkxvYWQob3B0aW9uczogYW55KSB7XG4gICAgY29uc29sZS5sb2coJ2luaGVyaXRhbmNlLicsIG9wdGlvbnMpO1xuICAgIC8vIGRvIHNvbWV0aGluZztcbiAgfVxufVxuXG5AcGFnZVxuZXhwb3J0IGNsYXNzIEluaGVyaXRhbmNlUGFnZSBleHRlbmRzIE15QmFzZVBhZ2Uge1xuICBvbkxvYWQob3B0aW9uczogUmVjb3JkPHN0cmluZywgc3RyaW5nPikge1xuICAgIHN1cGVyLm9uTG9hZChvcHRpb25zKTtcbiAgICBjb25zb2xlLmxvZygnaW5oZXJpdGFuY2UgcGFnZSBsb2FkZWQuJyk7XG4gIH1cbn0iXX0=