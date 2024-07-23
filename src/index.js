"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const express = require("express");
const app = express();
app.get("/", function (req, res) {
    res.send("Hello Worldd");
});
// function dec1() {
//   console.log("call dec 1");
//   return function (target: any, propertykey: string, descriptior: PropertyDescriptor) {
//     console.log('call dec 1 ')
//    }
// }
// class test {
//     @dec1()
//   constructor() {
//     console.log("call consrtcture");
//   }
// }
// const testclass = new test();
function first() {
    console.log("first(): factory evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("first(): called");
    };
}
// function second() {
//   console.log("second(): factory evaluated");
//   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     console.log("second(): called");
//   };
// }
class ExampleClass {
}
__decorate([
    first()
    // @second()
    // method() {}
], ExampleClass.prototype, "", void 0);
console.log("voooo");
app.listen(3000);
