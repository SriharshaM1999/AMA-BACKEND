const express = require("express");
const User = require("./users")
const Question = require("./question")
const Tags = require('./tags');
const Answer = require("./answer");
const ta = require("./ta");

const Router = express.Router();

console.log("router got called")

Router.use("/users",User)
Router.use('/question',Question)
Router.use('/ta', ta);
Router.use('/tag',Tags);
Router.use('/answer',Answer)


module.exports= Router;

