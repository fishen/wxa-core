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
    HintComponent.prototype.alert = function (e, ownerInstance) {
        console.log(e, ownerInstance);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGludC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhpbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EscUNBQXNFO0FBT3RFO0lBQW1DLGlDQUFrQztJQUFyRTs7SUFnQkEsQ0FBQztJQWZDLGdDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQTtRQUN2QyxJQUFNLE9BQU8sR0FBRywrQkFBK0IsQ0FBQztRQUNoRCxVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDLEVBQXpCLENBQXlCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELDZCQUFLLEdBQUwsVUFBTSxDQUFNLEVBQUUsYUFBa0I7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsYUFBYSxDQUFDLENBQUM7UUFDN0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUE7SUFDNUMsQ0FBQztJQUVELHNDQUFjLEdBQWQsVUFBZSxHQUFXO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFFdkMsQ0FBQztJQVJEO1FBREMsaUJBQU07OENBSU47SUFFRDtRQURDLG1CQUFRLENBQUMsU0FBUyxDQUFDO3VEQUluQjtJQWZVLGFBQWE7UUFMekIsb0JBQVMsQ0FBQztZQUNULFVBQVUsRUFBRTtnQkFDVixPQUFPLEVBQUUsTUFBTTthQUNoQjtTQUNGLENBQUM7T0FDVyxhQUFhLENBZ0J6QjtJQUFELG9CQUFDO0NBQUEsQUFoQkQsQ0FBbUMsd0JBQWEsR0FnQi9DO0FBaEJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9oaW50L2hpbnQudHNcbmltcG9ydCB7IEJhc2VDb21wb25lbnQsIGNvbXBvbmVudCwgbWV0aG9kLCBvYnNlcnZlciB9IGZyb20gXCJ3eGEtY29yZVwiO1xuXG5AY29tcG9uZW50KHtcbiAgcHJvcGVydGllczoge1xuICAgIG1lc3NhZ2U6IFN0cmluZ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEhpbnRDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50PHsgbWVzc2FnZTogc3RyaW5nIH0+e1xuICBhdHRhY2hlZCgpIHtcbiAgICBjb25zb2xlLmxvZygnaGludCBjb21wb25lbnQgYXR0YWNoZWQuJylcbiAgICBjb25zdCBtZXNzYWdlID0gJ0hpLCBtZXNzYWdlIGhhcyBiZWVuIGNoYW5nZWQhJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2V0RGF0YSh7IG1lc3NhZ2UgfSksIDMwMDApO1xuICB9XG4gIEBtZXRob2RcbiAgYWxlcnQoZTogYW55LCBvd25lckluc3RhbmNlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhlLG93bmVySW5zdGFuY2UpO1xuICAgIHd4LnNob3dUb2FzdCh7IHRpdGxlOiB0aGlzLmRhdGEubWVzc2FnZSB9KVxuICB9XG4gIEBvYnNlcnZlcignbWVzc2FnZScpXG4gIG1lc3NhZ2VDaGFuZ2VkKG1zZzogc3RyaW5nKSB7XG4gICAgY29uc29sZS5sb2coJ21lc3NhZ2UgY2hhbmdlZDonLCBtc2cpO1xuICAgIC8vIG90aGVyc1xuICB9XG59Il19