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
            wxa_core_1.page
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
}(wxa_core_1.BasePage));
exports.InheritancePage = InheritancePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcnJpZGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3ZlcnJpZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUEwQztBQUUxQyxTQUFTLE1BQU0sQ0FBOEMsV0FBYztJQUV6RTtRQUE0QixpQ0FBVztRQUF2Qzs7UUFXQSxDQUFDO1FBVkMsOEJBQU0sR0FBTixVQUFPLE9BQVk7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFFbkMsaUJBQU0sTUFBTSxJQUFJLGlCQUFNLE1BQU0sWUFBQyxPQUFPLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBQ0QsOEJBQU0sR0FBTjtZQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBUyxJQUFJLENBQUMsS0FBSyxlQUFZLENBQUMsQ0FBQztZQUM3QyxpQkFBTSxNQUFNLElBQUksaUJBQU0sTUFBTSxXQUFFLENBQUM7UUFDakMsQ0FBQztRQVRHLGFBQWE7WUFEbEIsZUFBSTtXQUNDLGFBQWEsQ0FXbEI7UUFBRCxvQkFBQztLQUFBLEFBWEQsQ0FBNEIsV0FBVyxHQVd0QztJQUNELE9BQU8sYUFBYSxDQUFDO0FBQ3ZCLENBQUM7QUFHRDtJQUFxQyxtQ0FBUTtJQUE3Qzs7SUFJQSxDQUFDO0lBSEMsZ0NBQU0sR0FBTixVQUFPLFFBQWdDO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBSFUsZUFBZTtRQUQzQixNQUFNO09BQ00sZUFBZSxDQUkzQjtJQUFELHNCQUFDO0NBQUEsQUFKRCxDQUFxQyxtQkFBUSxHQUk1QztBQUpZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGFnZSwgQmFzZVBhZ2UgfSBmcm9tICd3eGEtY29yZSc7XG5cbmZ1bmN0aW9uIG15cGFnZTxUIGV4dGVuZHMgeyBuZXcoLi4uYXJnczogYW55W10pOiBCYXNlUGFnZSB9Pihjb25zdHJ1Y3RvcjogVCkge1xuICBAcGFnZVxuICBjbGFzcyBPdmVycmlkZUNsYXNzIGV4dGVuZHMgY29uc3RydWN0b3Ige1xuICAgIG9uTG9hZChvcHRpb25zOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdvdmVycmlkZXMuJywgb3B0aW9ucyk7XG4gICAgICAvLyBkbyBzb21ldGhpbmc7XG4gICAgICBzdXBlci5vbkxvYWQgJiYgc3VwZXIub25Mb2FkKG9wdGlvbnMpO1xuICAgIH1cbiAgICBvblNob3coKSB7XG4gICAgICBjb25zb2xlLmxvZyhgcGFnZSAnJHt0aGlzLnJvdXRlfScgc2hvd2luZy5gKTtcbiAgICAgIHN1cGVyLm9uU2hvdyAmJiBzdXBlci5vblNob3coKTtcbiAgICB9XG4gICAgXG4gIH1cbiAgcmV0dXJuIE92ZXJyaWRlQ2xhc3M7XG59XG5cbkBteXBhZ2VcbmV4cG9ydCBjbGFzcyBJbmhlcml0YW5jZVBhZ2UgZXh0ZW5kcyBCYXNlUGFnZSB7XG4gIG9uTG9hZChfb3B0aW9uczogUmVjb3JkPHN0cmluZywgc3RyaW5nPikge1xuICAgIGNvbnNvbGUubG9nKCdvdmVycmlkZXMgcGFnZSBsb2FkZWQuJyk7XG4gIH1cbn1cblxuIl19