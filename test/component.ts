import "reflect-metadata";
import { Component, component, bind, method, observer, lifetime, pageLifetime, computed } from "../src/index";
import { expect } from "chai";
import data from './data';
import "mocha";

let object: any;
let createdObject: any;
Component.prototype.setData = function (data: object) {
    Object.assign(this.data, data);
}

component.registerHook(obj => {
    obj.hook = 1;
    return obj;
})

@component<MyComponent>({
    ctor: function (obj: Component) {
        object = Object.assign({}, obj);
        obj.created && obj.created();
        obj.lifetimes && (obj.lifetimes as any).created && (obj.lifetimes as any).created.call(obj);
        createdObject = Object.assign({}, obj);
        return obj;
    },
    properties: {
        property1: Array,
        property2: {
            type: String,
            value: "helllo",
        },
        amount: {
            value: 100,
            type: Number
        }
    }
})
export class MyComponent extends Component {
    behaviors: [];
    data: any = Object.assign({}, data);
    @bind
    bindItems = {};
    @bind
    bindFunc() { }
    @method
    method1() { }
    @observer("numberA, numberB")
    observer1(numberA: number, numberB: number) {

    }
    @lifetime
    attached() {

    }
    @pageLifetime
    show() {

    }
    @computed()
    fullName() {
        return `${this.data.firstName} ${this.data.lastName}`;
    }
    @computed()
    adult() {
        return this.data.age >= 18;
    }
    @computed()
    currency() {
        return "$" + this.data.amount.toFixed(2);
    }
}

describe("component", () => {
    it("should be a valid object.", () => {
        expect(object).to.be.not.null;
        expect(object).to.be.not.undefined;
    });
    it("should have the correct data property.", () => {
        expect(object).haveOwnProperty('data');
    });
    it("should bind items for component", () => {
        expect(createdObject).haveOwnProperty('bindItems');
        expect(createdObject).haveOwnProperty('bindFunc');
        expect(createdObject.bindFunc).is.a('function');
    });
    it("should add methods correctly.", () => {
        expect(object).haveOwnProperty('methods');
        expect(object.methods).haveOwnProperty('method1');
        expect(object.methods.method1).is.a('function');
    });
    it("should add properties correctly.", () => {
        expect(object).haveOwnProperty('properties');
        expect(object.properties).haveOwnProperty('property1');
        expect(object.properties.property2).is.a('object');
    });
    it("should add observers correctly.", () => {
        expect(object).haveOwnProperty('observers');
        expect(object.observers).haveOwnProperty('numberA, numberB');
        expect(object.observers['numberA, numberB']).is.a('function');
    });
    it("should add lifetimes correctly.", () => {
        expect(object).haveOwnProperty('lifetimes');
        expect(object.lifetimes).haveOwnProperty('attached');
        expect(object.lifetimes['attached']).is.a('function');
    });
    it("should add pageLifetimes correctly.", () => {
        expect(object).haveOwnProperty('pageLifetimes');
        expect(object.pageLifetimes).haveOwnProperty('show');
        expect(object.pageLifetimes['show']).is.a('function');
    });
    it("should compute corrent property", () => {
        expect(object.data.fullName).to.be.eq("Lei Lee");
        expect(object.data.adult).to.be.true;
        expect(object.data.currency).to.be.eq("$100.00");
    })
    it("should compute corrent property after component initialized", () => {
        createdObject.setData({
            firstName: "Li",
            age: 10,
        });
        expect(object.data.fullName).to.be.eq("Li Lee");
        expect(object.data.adult).to.be.false;
    }).timeout(1000);
    it("should compute corrent property after property updated", () => {
        createdObject.data.amount = 1000;
        createdObject.properties.amount.observer.call(createdObject);
        expect(object.data.currency).to.be.eq("$1000.00");
    }).timeout(1000);
    it("should hook success", () => {
        expect(object.hook).to.be.eq(1);
    });
});