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
console.log(wxa_core_1.BaseApp);
var MyApp = (function (_super) {
    __extends(MyApp, _super);
    function MyApp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyApp.prototype.onLaunch = function () {
        console.log('app launched.');
    };
    MyApp = __decorate([
        wxa_core_1.app
    ], MyApp);
    return MyApp;
}(wxa_core_1.BaseApp));
exports.default = MyApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHFDQUF3QztBQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFPLENBQUMsQ0FBQztBQUdyQjtJQUFtQyx5QkFBTztJQUExQzs7SUFJQSxDQUFDO0lBSEMsd0JBQVEsR0FBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUhrQixLQUFLO1FBRHpCLGNBQUc7T0FDaUIsS0FBSyxDQUl6QjtJQUFELFlBQUM7Q0FBQSxBQUpELENBQW1DLGtCQUFPLEdBSXpDO2tCQUpvQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwLnRzXHJcbmltcG9ydCB7IEJhc2VBcHAsIGFwcCB9IGZyb20gXCJ3eGEtY29yZVwiO1xyXG5jb25zb2xlLmxvZyhCYXNlQXBwKTtcclxuXHJcbkBhcHBcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlBcHAgZXh0ZW5kcyBCYXNlQXBwIHtcclxuICBvbkxhdW5jaCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdhcHAgbGF1bmNoZWQuJyk7XHJcbiAgfVxyXG59Il19