"use strict";
const express = require("express");
const app = express();
app.get("/", function (req, res) {
    res.send("Hello Worldd");
});
console.log("v000");
app.listen(3000);
