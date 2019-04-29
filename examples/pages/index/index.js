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
        console.log('index page loaded.');
    };
    IndexPage = __decorate([
        wxa_core_1.page
    ], IndexPage);
    return IndexPage;
}(wxa_core_1.BasePage));
exports.IndexPage = IndexPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxxQ0FBMEM7QUFDMUMsaUNBQXFDO0FBR3JDO0lBQStCLDZCQUFvQjtJQURuRDtRQUFBLHFFQU1DO1FBSkMsVUFBSSxHQUFHLElBQUksa0JBQVUsRUFBRSxDQUFDOztJQUkxQixDQUFDO0lBSEMsMEJBQU0sR0FBTjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBSlUsU0FBUztRQURyQixlQUFJO09BQ1EsU0FBUyxDQUtyQjtJQUFELGdCQUFDO0NBQUEsQUFMRCxDQUErQixtQkFBUSxHQUt0QztBQUxZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvaW5kZXgvaW5kZXgudHNcclxuaW1wb3J0IHsgcGFnZSwgQmFzZVBhZ2UgfSBmcm9tICd3eGEtY29yZSc7XHJcbmltcG9ydCB7IEluZGV4TW9kZWwgfSBmcm9tICcuL21vZGVsJztcclxuXHJcbkBwYWdlXHJcbmV4cG9ydCBjbGFzcyBJbmRleFBhZ2UgZXh0ZW5kcyBCYXNlUGFnZTxJbmRleE1vZGVsPiB7XHJcbiAgZGF0YSA9IG5ldyBJbmRleE1vZGVsKCk7XHJcbiAgb25Mb2FkKCkge1xyXG4gICAgY29uc29sZS5sb2coJ2luZGV4IHBhZ2UgbG9hZGVkLicpO1xyXG4gIH1cclxufVxyXG5cclxuIl19