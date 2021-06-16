const express = require("express");
const QuestionCreateController = require("../../../controllers/api/v1/questions/questionCreate");
const QuestionDeleteController = require("../../../controllers/api/v1/questions/questionDelete");
const QuestionDisplayController = require("../../../controllers/api/v1/questions/questionDisplay");

const passport = require("passport");

const Router = express.Router();

Router.post("/create-question",passport.authenticate('jwt',{session:false}),QuestionCreateController.createQuestion)
Router.post("/delete-question",passport.authenticate('jwt',{session:false}),QuestionDeleteController.deleteQuestion)
Router.get("/display-question",passport.authenticate('jwt',{session:false}),QuestionDisplayController.display)



module.exports= Router;