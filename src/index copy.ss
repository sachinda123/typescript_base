const express = require("express");
const app = express();

app.get("/", function (req: any, res: any) {
  res.send("Hello Worldd");
});

function split() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const orginalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      args[0] = args[0].split("");
      orginalMethod.apply(this, args);
    };
  };
}
function reverse() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const orginalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      args[0] = args[0].reverse();
      orginalMethod.apply(this, args);
    };
  };
}
function join() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const orginalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      args[0] = args[0].join("");
      orginalMethod.apply(this, args);
    };
  };
}

class StringManagerClass {
  @split()
  @reverse()
  @join()
  reverseString(str: string) {
    console.log("inside of function ", str);
  }
}

const stringManagerClass = new StringManagerClass();
stringManagerClass.reverseString("abc");

app.listen(3000);
