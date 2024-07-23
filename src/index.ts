const express = require("express");
const app = express();

app.get("/", function (req: any, res: any) {
  res.send("Hello Worldd");
});

const split = (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
  const orginalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    args[0] = args[0].split("");
    orginalMethod.apply(this, args);
  };
};
const reverse = (targer: any, propertyKey: string, descriptor: PropertyDescriptor) => {
  const orginalMethod = descriptor.value;
  descriptor.value = function (...args: any) {
    args[0] = args[0].reverse();
    orginalMethod.apply(this, args);
  };
};

const join = (str: string) => (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
  const orginalMethod = descriptor.value;
  descriptor.value = function (...args: any) {
    args[0] = args[0].join(str);
    orginalMethod.apply(this, args);
  };
};

class StirngManager {
  @split
  @reverse
  @join("+")
  reverseString(str: string) {
    console.log("text", str);
  }
}

const stringManager = new StirngManager();
stringManager.reverseString("abcdef");

app.listen(3000);
