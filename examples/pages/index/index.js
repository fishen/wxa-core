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
var model_1 = require("./model");
var IndexPage = (function (_super) {
    __extends(IndexPage, _super);
    function IndexPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.data = new model_1.IndexModel();
        return _this;
    }
    IndexPage.prototype.onLoad = function () {
        var _this = this;
        console.log('index page loaded.');
        setTimeout(function () {
            _this.setData({ message: Math.random() });
        }, 3000);
    };
    IndexPage.prototype.message1 = function () {
        console.log('message changed.');
        return this.data.message + "11111";
    };
    __decorate([
        wxa_core_1.computed()
    ], IndexPage.prototype, "message1", null);
    IndexPage = __decorate([
        wxa_core_1.page()
    ], IndexPage);
    return IndexPage;
}(wxa_core_1.Page));
exports.IndexPage = IndexPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxxQ0FBZ0Q7QUFDaEQsaUNBQXFDO0FBR3JDO0lBQStCLDZCQUFnQjtJQUQvQztRQUFBLHFFQWNDO1FBWkMsVUFBSSxHQUFHLElBQUksa0JBQVUsRUFBRSxDQUFDOztJQVkxQixDQUFDO0lBWEMsMEJBQU0sR0FBTjtRQUFBLGlCQUtDO1FBSkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xDLFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMzQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsNEJBQVEsR0FBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUNyQyxDQUFDO0lBSEQ7UUFEQyxtQkFBUSxFQUFFOzZDQUlWO0lBWlUsU0FBUztRQURyQixlQUFJLEVBQUU7T0FDTSxTQUFTLENBYXJCO0lBQUQsZ0JBQUM7Q0FBQSxBQWJELENBQStCLGVBQUksR0FhbEM7QUFiWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2luZGV4L2luZGV4LnRzXHJcbmltcG9ydCB7IHBhZ2UsIFBhZ2UsIGNvbXB1dGVkIH0gZnJvbSAnd3hhLWNvcmUnO1xyXG5pbXBvcnQgeyBJbmRleE1vZGVsIH0gZnJvbSAnLi9tb2RlbCc7XHJcblxyXG5AcGFnZSgpXHJcbmV4cG9ydCBjbGFzcyBJbmRleFBhZ2UgZXh0ZW5kcyBQYWdlPEluZGV4TW9kZWw+IHtcclxuICBkYXRhID0gbmV3IEluZGV4TW9kZWwoKTtcclxuICBvbkxvYWQoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnaW5kZXggcGFnZSBsb2FkZWQuJyk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zZXREYXRhKHsgbWVzc2FnZTogTWF0aC5yYW5kb20oKSB9KTtcclxuICAgIH0sIDMwMDApO1xyXG4gIH1cclxuICBAY29tcHV0ZWQoKVxyXG4gIG1lc3NhZ2UxKCkge1xyXG4gICAgY29uc29sZS5sb2coJ21lc3NhZ2UgY2hhbmdlZC4nKTtcclxuICAgIHJldHVybiB0aGlzLmRhdGEubWVzc2FnZSArIFwiMTExMTFcIjtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==