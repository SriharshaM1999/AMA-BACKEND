const express = require("express");
const User = require("./users")
const Question = require("./question")

const Router = express.Router();

Router.use("/users",User)
Router.use('/question',Question)

module.exports= Router;

