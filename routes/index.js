const express = require("express");

const api = require("./api")


const UserController = require("../controllers/users");


const Router = express.Router();


Router.use('/api',api)

module.exports= Router;