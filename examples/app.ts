// app.ts
import { BaseApp, app } from "wxa-core";
console.log(BaseApp);

@app
export default class MyApp extends BaseApp {
  onLaunch() {
    console.log('app launched.');
  }
}