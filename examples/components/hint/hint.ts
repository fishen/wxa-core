// components/hint/hint.ts
import { BaseComponent, component, method, observer } from "wxa-core";

@component({
  properties: {
    message: String
  }
})
export class HintComponent extends BaseComponent<{ message: string }>{
  attached() {
    console.log('hint component attached.')
    const message = 'Hi, message has been changed!';
    setTimeout(() => this.setData({ message }), 3000);
  }
  @method
  alert(e: any, ownerInstance: any) {
    console.log(e,ownerInstance);
    wx.showToast({ title: this.data.message })
  }
  @observer('message')
  messageChanged(msg: string) {
    console.log('message changed:', msg);
    // others
  }
}