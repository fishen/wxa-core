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
function preLoad(_target, _name, descriptor) {
    var raw = descriptor.value;
    descriptor.value = function (options) {
        console.log('decorators.', options);
        raw.call(this, options);
    };
}
var MyPage = (function (_super) {
    __extends(MyPage, _super);
    function MyPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyPage.prototype.onLoad = function (_options) {
        console.log('decorators page loaded.');
    };
    __decorate([
        preLoad
    ], MyPage.prototype, "onLoad", null);
    MyPage = __decorate([
        wxa_core_1.page
    ], MyPage);
    return MyPage;
}(wxa_core_1.BasePage));
exports.MyPage = MyPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlY29yYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUNBQWlEO0FBRWpELFNBQVMsT0FBTyxDQUFDLE9BQVksRUFBRSxLQUFhLEVBQUUsVUFBOEI7SUFDMUUsSUFBTSxHQUFHLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUM3QixVQUFVLENBQUMsS0FBSyxHQUFHLFVBQVUsT0FBWTtRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUVwQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxQixDQUFDLENBQUE7QUFDSCxDQUFDO0FBR0Q7SUFBNEIsMEJBQVE7SUFBcEM7O0lBS0EsQ0FBQztJQUhDLHVCQUFNLEdBQU4sVUFBTyxRQUFnQztRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDekMsQ0FBQztJQUZEO1FBREMsT0FBTzt3Q0FHUDtJQUpVLE1BQU07UUFEbEIsZUFBSTtPQUNRLE1BQU0sQ0FLbEI7SUFBRCxhQUFDO0NBQUEsQUFMRCxDQUE0QixtQkFBUSxHQUtuQztBQUxZLHdCQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGFnZSwgQmFzZVBhZ2UsIElQYWdlIH0gZnJvbSAnd3hhLWNvcmUnO1xuXG5mdW5jdGlvbiBwcmVMb2FkKF90YXJnZXQ6IGFueSwgX25hbWU6IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKSB7XG4gIGNvbnN0IHJhdyA9IGRlc2NyaXB0b3IudmFsdWU7XG4gIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbiAob3B0aW9uczogYW55KSB7XG4gICAgY29uc29sZS5sb2coJ2RlY29yYXRvcnMuJywgb3B0aW9ucyk7XG4gICAgLy8gZG8gc29tZXRoaW5nO1xuICAgIHJhdy5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICB9XG59XG5cbkBwYWdlXG5leHBvcnQgY2xhc3MgTXlQYWdlIGV4dGVuZHMgQmFzZVBhZ2UgaW1wbGVtZW50cyBJUGFnZSB7XG4gIEBwcmVMb2FkXG4gIG9uTG9hZChfb3B0aW9uczogUmVjb3JkPHN0cmluZywgc3RyaW5nPikge1xuICAgIGNvbnNvbGUubG9nKCdkZWNvcmF0b3JzIHBhZ2UgbG9hZGVkLicpO1xuICB9XG59Il19