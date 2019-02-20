// app.ts
import { IApp, app } from "wxa-core";
@app
export default class MyApp implements IApp {
  onLaunch() {
    console.log('app launched.');
  }
}