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
                message: String,
            }
        })
    ], HintComponent);
    return HintComponent;
}(wxa_core_1.Component));
exports.HintComponent = HintComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGludC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhpbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EscUNBQWtFO0FBT2xFO0lBQW1DLGlDQUFTO0lBQTVDOztJQWdCQSxDQUFDO0lBZkMsZ0NBQVEsR0FBUjtRQUFBLGlCQUlDO1FBSEMsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFBO1FBQ3ZDLElBQU0sT0FBTyxHQUFHLCtCQUErQixDQUFDO1FBQ2hELFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUMsRUFBekIsQ0FBeUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsNkJBQUssR0FBTCxVQUFNLENBQU0sRUFBRSxhQUFrQjtRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUM5QixFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQTtJQUM1QyxDQUFDO0lBRUQsc0NBQWMsR0FBZCxVQUFlLEdBQVc7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUV2QyxDQUFDO0lBUkQ7UUFEQyxpQkFBTTs4Q0FJTjtJQUVEO1FBREMsbUJBQVEsQ0FBQyxTQUFTLENBQUM7dURBSW5CO0lBZlUsYUFBYTtRQUx6QixvQkFBUyxDQUFDO1lBQ1QsVUFBVSxFQUFFO2dCQUNWLE9BQU8sRUFBRSxNQUFNO2FBQ2hCO1NBQ0YsQ0FBQztPQUNXLGFBQWEsQ0FnQnpCO0lBQUQsb0JBQUM7Q0FBQSxBQWhCRCxDQUFtQyxvQkFBUyxHQWdCM0M7QUFoQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLy8gY29tcG9uZW50cy9oaW50L2hpbnQudHNcbmltcG9ydCB7IENvbXBvbmVudCwgY29tcG9uZW50LCBtZXRob2QsIG9ic2VydmVyIH0gZnJvbSBcInd4YS1jb3JlXCI7XG5cbkBjb21wb25lbnQoe1xuICBwcm9wZXJ0aWVzOiB7XG4gICAgbWVzc2FnZTogU3RyaW5nLFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIEhpbnRDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnR7XG4gIGF0dGFjaGVkKCkge1xuICAgIGNvbnNvbGUubG9nKCdoaW50IGNvbXBvbmVudCBhdHRhY2hlZC4nKVxuICAgIGNvbnN0IG1lc3NhZ2UgPSAnSGksIG1lc3NhZ2UgaGFzIGJlZW4gY2hhbmdlZCEnO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZXREYXRhKHsgbWVzc2FnZSB9KSwgMzAwMCk7XG4gIH1cbiAgQG1ldGhvZFxuICBhbGVydChlOiBhbnksIG93bmVySW5zdGFuY2U6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKGUsIG93bmVySW5zdGFuY2UpO1xuICAgIHd4LnNob3dUb2FzdCh7IHRpdGxlOiB0aGlzLmRhdGEubWVzc2FnZSB9KVxuICB9XG4gIEBvYnNlcnZlcignbWVzc2FnZScpXG4gIG1lc3NhZ2VDaGFuZ2VkKG1zZzogc3RyaW5nKSB7XG4gICAgY29uc29sZS5sb2coJ21lc3NhZ2UgY2hhbmdlZDonLCBtc2cpO1xuICAgIC8vIG90aGVyc1xuICB9XG59XG5cbi8vIGRlY2xhcmUgZnVuY3Rpb24gQ29tcG9uZW50KHBhcmFtczogYW55KTogdm9pZDtcblxuLy8gQ29tcG9uZW50KHtcbi8vICAgZGF0YToge1xuLy8gICAgIGZpcnN0OiBcIjFcIlxuLy8gICB9LFxuLy8gICBhdHRhY2hlZCgpIHtcbi8vICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEpO1xuLy8gICB9XG4vLyB9KSJdfQ==