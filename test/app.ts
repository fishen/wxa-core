import "reflect-metadata";
import { App, app } from "../src/index";
import { expect } from "chai";
import "mocha";

let object: any;

@app({
    ctor: function (obj: App & Record<string, any>) {
        object = obj;
        console.log(obj);
        obj.onLaunch && obj.onLaunch();
        return obj;
    }
})
export class MyApp extends App {

}

describe("app", () => {
    it("should be a valid object.", () => {
        expect(object).to.be.not.null;
        expect(object).to.be.not.undefined;
    });
});