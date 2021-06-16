const express = require("express");


const UserController1 = require("../../../controllers/api/v1/users/users")

const UserController2 = require("../../../controllers/api/v1/users/users_api")




const Router = express.Router();

Router.post("/create-account", UserController1.signUp);
Router.post('/create-session', UserController2.createSession);


module.exports= Router;

// link to connect;
// localhost:8000/api/v1/users/create-account
// localhost:8000/api/v1/users/create-session