const express = require("express");
const UserController = require("../controllers/users");


const Router = express.Router();

Router.get('/',UserController.home);

Router.post('/create-account/',UserController.signUp);


module.exports= Router;