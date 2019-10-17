import "reflect-metadata";
import { Page, page, computed } from "../src/index";
import { expect } from "chai";
import data from './data';
import "mocha";

let object: any;
let createdObject: any;
Page.prototype.setData = function (data: object) {
    Object.assign(this.data, data);
}

page.registerHook(obj => {
    obj.hook = 1;
    return obj;
})

@page({
    ctor: function (obj: Page) {
        object = Object.assign({}, obj);
        obj.onLoad && obj.onLoad({});
        createdObject = Object.assign({}, obj);
        return obj;
    }
})
export class MyPage extends Page {
    data = Object.assign({}, data);
    @computed()
    fullName() {
        return `${this.data.firstName} ${this.data.lastName}`;
    }
    @computed()
    adult() {
        return this.data.age >= 18;
    }
}

describe("page", () => {
    it("should be a valid object.", () => {
        expect(object).to.be.not.null;
        expect(object).to.be.not.undefined;
    });
    it("should have the correct data property.", () => {
        expect(object).haveOwnProperty('data');
    });
    it("should compute corrent property", () => {
        expect(object.data.fullName).to.be.eq("Lei Lee");
        expect(object.data.adult).to.be.true;
    })
    it("should compute corrent property after page initialized", () => {
        createdObject.setData({
            firstName: "Li",
            age: 10
        });
        expect(createdObject.data.fullName).to.be.eq("Li Lee");
        expect(createdObject.data.adult).to.be.false;
    }).timeout(1000);
    it("should hook success", () => {
        expect(object.hook).to.be.eq(1);
    })
});