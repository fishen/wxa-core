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
var HintComponent = (function (_super) {
    __extends(HintComponent, _super);
    function HintComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HintComponent.prototype.attached = function () {
        var _this = this;
        console.log('hint component attached.');
        var message = 'Hi, message has been changed!';
        setTimeout(function () { return _this.setData({ message: message }); }, 3000);
    };
    HintComponent.prototype.alert = function () {
        wx.showToast({ title: this.data.message });
    };
    HintComponent.prototype.messageChanged = function (msg) {
        console.log('message changed:', msg);
    };
    __decorate([
        wxa_core_1.method
    ], HintComponent.prototype, "alert", null);
    __decorate([
        wxa_core_1.observer('message')
    ], HintComponent.prototype, "messageChanged", null);
    HintComponent = __decorate([
        wxa_core_1.component({
            properties: {
                message: String
            }
        })
    ], HintComponent);
    return HintComponent;
}(wxa_core_1.BaseComponent));
exports.HintComponent = HintComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGludC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhpbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EscUNBQXNFO0FBT3RFO0lBQW1DLGlDQUFrQztJQUFyRTs7SUFlQSxDQUFDO0lBZEMsZ0NBQVEsR0FBUjtRQUFBLGlCQUlDO1FBSEMsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFBO1FBQ3ZDLElBQU0sT0FBTyxHQUFHLCtCQUErQixDQUFDO1FBQ2hELFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUMsRUFBekIsQ0FBeUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsNkJBQUssR0FBTDtRQUNFLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO0lBQzVDLENBQUM7SUFFRCxzQ0FBYyxHQUFkLFVBQWUsR0FBVztRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBRXZDLENBQUM7SUFQRDtRQURDLGlCQUFNOzhDQUdOO0lBRUQ7UUFEQyxtQkFBUSxDQUFDLFNBQVMsQ0FBQzt1REFJbkI7SUFkVSxhQUFhO1FBTHpCLG9CQUFTLENBQUM7WUFDVCxVQUFVLEVBQUU7Z0JBQ1YsT0FBTyxFQUFFLE1BQU07YUFDaEI7U0FDRixDQUFDO09BQ1csYUFBYSxDQWV6QjtJQUFELG9CQUFDO0NBQUEsQUFmRCxDQUFtQyx3QkFBYSxHQWUvQztBQWZZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9oaW50L2hpbnQudHNcbmltcG9ydCB7IEJhc2VDb21wb25lbnQsIGNvbXBvbmVudCwgbWV0aG9kLCBvYnNlcnZlciB9IGZyb20gXCJ3eGEtY29yZVwiO1xuXG5AY29tcG9uZW50KHtcbiAgcHJvcGVydGllczoge1xuICAgIG1lc3NhZ2U6IFN0cmluZ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEhpbnRDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50PHsgbWVzc2FnZTogc3RyaW5nIH0+e1xuICBhdHRhY2hlZCgpIHtcbiAgICBjb25zb2xlLmxvZygnaGludCBjb21wb25lbnQgYXR0YWNoZWQuJylcbiAgICBjb25zdCBtZXNzYWdlID0gJ0hpLCBtZXNzYWdlIGhhcyBiZWVuIGNoYW5nZWQhJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2V0RGF0YSh7IG1lc3NhZ2UgfSksIDMwMDApO1xuICB9XG4gIEBtZXRob2RcbiAgYWxlcnQoKSB7XG4gICAgd3guc2hvd1RvYXN0KHsgdGl0bGU6IHRoaXMuZGF0YS5tZXNzYWdlIH0pXG4gIH1cbiAgQG9ic2VydmVyKCdtZXNzYWdlJylcbiAgbWVzc2FnZUNoYW5nZWQobXNnOiBzdHJpbmcpIHtcbiAgICBjb25zb2xlLmxvZygnbWVzc2FnZSBjaGFuZ2VkOicsIG1zZyk7XG4gICAgLy8gb3RoZXJzXG4gIH1cbn0iXX0=