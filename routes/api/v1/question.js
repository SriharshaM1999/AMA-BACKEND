const express = require("express");
const QuestionCreateController = require("../../../controllers/api/v1/questions/questionCreate");
const QuestionDeleteController = require("../../../controllers/api/v1/questions/questionDelete");
const QuestionDisplayController = require("../../../controllers/api/v1/questions/questionDisplay");
const QuestionController = require("../../../controllers/api/v1/questions/question");

const passport = require("passport");

const Router = express.Router();


Router.get('/question', QuestionController.question);
Router.post("/create-question",passport.authenticate('user-rule',{session:false}),QuestionCreateController.createQuestion)
Router.post("/delete-question",passport.authenticate('user-rule',{session:false}),QuestionDeleteController.deleteQuestion)
Router.get("/display-question",QuestionDisplayController.display)


module.exports= Router;