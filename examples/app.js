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
require("reflect-metadata");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUM7QUFDM0MsNEJBQTBCO0FBQzFCLHFDQUFvQztBQUdwQztJQUFtQyx5QkFBRztJQUF0Qzs7SUFJQSxDQUFDO0lBSEMsd0JBQVEsR0FBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUhrQixLQUFLO1FBRHpCLGNBQUcsRUFBRTtPQUNlLEtBQUssQ0FJekI7SUFBRCxZQUFDO0NBQUEsQUFKRCxDQUFtQyxjQUFHLEdBSXJDO2tCQUpvQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSBjb25zdCBnbG9iYWw6IGFueTtcclxuZ2xvYmFsLlJlZmxlY3QgPSBnbG9iYWwuUmVmbGVjdCB8fCBSZWZsZWN0O1xyXG5pbXBvcnQgXCJyZWZsZWN0LW1ldGFkYXRhXCI7XHJcbmltcG9ydCB7IEFwcCwgYXBwIH0gZnJvbSBcInd4YS1jb3JlXCI7XHJcblxyXG5AYXBwKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xyXG4gIG9uTGF1bmNoKCkge1xyXG4gICAgY29uc29sZS5sb2coJ2FwcCBsYXVuY2hlZC4nKTtcclxuICB9XHJcbn0iXX0=