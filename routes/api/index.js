const express = require("express");

const version1 = require("./v1/index")


const UserController = require("../../controllers/api/v1/users/users");


const Router = express.Router();


Router.use('/v1',version1)

module.exports= Router;