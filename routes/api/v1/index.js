const express = require("express");
const User = require("./users")
const Question = require("./question")
const Tags = require('./tags');
const Answer = require("./answer");


const Router = express.Router();

Router.use("/users",User)
Router.use('/question',Question)
Router.use('/tag',Tags)
Router.use('/answer',Answer)

module.exports= Router;

