import "reflect-metadata";
import { App, app } from "wxa-core";

@app()
export default class MyApp extends App {
  onLaunch() {
    console.log('app launched.');
  }
}