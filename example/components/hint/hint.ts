// components/hint/hint.ts
import { IComponent, BaseComponent, component, method } from "wxa-core";

@component({
  properties: {
    message: String
  }
})
export class HintComponent extends BaseComponent<{ message: string }> implements IComponent {
  attached() {
    console.log('hint component attached.')
  }
  @method
  alert() {
    wx.showToast({ title: this.data.message })
  }
}