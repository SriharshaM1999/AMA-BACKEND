const express = require("express");

const UserController = require("../../../controllers/api/v1/users/display");

const UserController1 = require("../../../controllers/api/v1/users/users")

const UserController2 = require("../../../controllers/api/v1/users/users_api")

const UserController3 = require("../../../controllers/api/v1/users/googleLogin");


const Router = express.Router();

Router.get('/display', UserController.display)
Router.post("/create-account", UserController1.signUp);
Router.post('/create-session', UserController2.createSession);
Router.post('/google-login', UserController3.googleLogin)

module.exports= Router;

// link to connect;
// localhost:8000/api/v1/users/create-account
// localhost:8000/api/v1/users/create-session