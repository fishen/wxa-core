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
global.Reflect = global.Reflect || Reflect;
var wxa_core_1 = require("wxa-core");
var MyApp = (function (_super) {
    __extends(MyApp, _super);
    function MyApp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyApp.prototype.onLaunch = function () {
        console.log('app launched.');
    };
    MyApp = __decorate([
        wxa_core_1.app()
    ], MyApp);
    return MyApp;
}(wxa_core_1.App));
exports.default = MyApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUM7QUFDM0MscUNBQW9DO0FBR3BDO0lBQW1DLHlCQUFHO0lBQXRDOztJQUlBLENBQUM7SUFIQyx3QkFBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBSGtCLEtBQUs7UUFEekIsY0FBRyxFQUFFO09BQ2UsS0FBSyxDQUl6QjtJQUFELFlBQUM7Q0FBQSxBQUpELENBQW1DLGNBQUcsR0FJckM7a0JBSm9CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZGVjbGFyZSBjb25zdCBnbG9iYWw6IGFueTtcclxuZ2xvYmFsLlJlZmxlY3QgPSBnbG9iYWwuUmVmbGVjdCB8fCBSZWZsZWN0O1xyXG5pbXBvcnQgeyBBcHAsIGFwcCB9IGZyb20gXCJ3eGEtY29yZVwiO1xyXG5cclxuQGFwcCgpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcclxuICBvbkxhdW5jaCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdhcHAgbGF1bmNoZWQuJyk7XHJcbiAgfVxyXG59Il19