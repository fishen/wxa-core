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
    var OverrideClass = (function (_super) {
        __extends(OverrideClass, _super);
        function OverrideClass() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        OverrideClass.prototype.onLoad = function (options) {
            console.log('overrides.', options);
            _super.prototype.onLoad && _super.prototype.onLoad.call(this, options);
        };
        OverrideClass.prototype.onShow = function () {
            console.log("page '" + this.route + "' showing.");
            _super.prototype.onShow && _super.prototype.onShow.call(this);
        };
        OverrideClass = __decorate([
            wxa_core_1.page()
        ], OverrideClass);
        return OverrideClass;
    }(constructor));
    return OverrideClass;
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
}(wxa_core_1.Page));
exports.InheritancePage = InheritancePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcnJpZGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3ZlcnJpZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUFzQztBQUV0QyxTQUFTLE1BQU0sQ0FBMEMsV0FBYztJQUVyRTtRQUE0QixpQ0FBVztRQUF2Qzs7UUFXQSxDQUFDO1FBVkMsOEJBQU0sR0FBTixVQUFPLE9BQVk7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFFbkMsaUJBQU0sTUFBTSxJQUFJLGlCQUFNLE1BQU0sWUFBQyxPQUFPLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBQ0QsOEJBQU0sR0FBTjtZQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBUyxJQUFJLENBQUMsS0FBSyxlQUFZLENBQUMsQ0FBQztZQUM3QyxpQkFBTSxNQUFNLElBQUksaUJBQU0sTUFBTSxXQUFFLENBQUM7UUFDakMsQ0FBQztRQVRHLGFBQWE7WUFEbEIsZUFBSSxFQUFFO1dBQ0QsYUFBYSxDQVdsQjtRQUFELG9CQUFDO0tBQUEsQUFYRCxDQUE0QixXQUFXLEdBV3RDO0lBQ0QsT0FBTyxhQUFhLENBQUM7QUFDdkIsQ0FBQztBQUdEO0lBQXFDLG1DQUFJO0lBQXpDOztJQUlBLENBQUM7SUFIQyxnQ0FBTSxHQUFOLFVBQU8sUUFBZ0M7UUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFIVSxlQUFlO1FBRDNCLE1BQU07T0FDTSxlQUFlLENBSTNCO0lBQUQsc0JBQUM7Q0FBQSxBQUpELENBQXFDLGVBQUksR0FJeEM7QUFKWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBhZ2UsIFBhZ2UgfSBmcm9tICd3eGEtY29yZSc7XG5cbmZ1bmN0aW9uIG15cGFnZTxUIGV4dGVuZHMgeyBuZXcoLi4uYXJnczogYW55W10pOiBQYWdlIH0+KGNvbnN0cnVjdG9yOiBUKSB7XG4gIEBwYWdlKClcbiAgY2xhc3MgT3ZlcnJpZGVDbGFzcyBleHRlbmRzIGNvbnN0cnVjdG9yIHtcbiAgICBvbkxvYWQob3B0aW9uczogYW55KSB7XG4gICAgICBjb25zb2xlLmxvZygnb3ZlcnJpZGVzLicsIG9wdGlvbnMpO1xuICAgICAgLy8gZG8gc29tZXRoaW5nO1xuICAgICAgc3VwZXIub25Mb2FkICYmIHN1cGVyLm9uTG9hZChvcHRpb25zKTtcbiAgICB9XG4gICAgb25TaG93KCkge1xuICAgICAgY29uc29sZS5sb2coYHBhZ2UgJyR7dGhpcy5yb3V0ZX0nIHNob3dpbmcuYCk7XG4gICAgICBzdXBlci5vblNob3cgJiYgc3VwZXIub25TaG93KCk7XG4gICAgfVxuICAgIFxuICB9XG4gIHJldHVybiBPdmVycmlkZUNsYXNzO1xufVxuXG5AbXlwYWdlXG5leHBvcnQgY2xhc3MgSW5oZXJpdGFuY2VQYWdlIGV4dGVuZHMgUGFnZSB7XG4gIG9uTG9hZChfb3B0aW9uczogUmVjb3JkPHN0cmluZywgc3RyaW5nPikge1xuICAgIGNvbnNvbGUubG9nKCdvdmVycmlkZXMgcGFnZSBsb2FkZWQuJyk7XG4gIH1cbn1cblxuIl19