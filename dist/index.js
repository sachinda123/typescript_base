"use strict";
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
console.log("voooo");
app.listen(3000);
