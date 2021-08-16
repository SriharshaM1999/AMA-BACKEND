const express = require("express");
const passport = require("passport");
const AnswerCreate = require("../../../controllers/api/v1/answer/answerCreate")
const AnswerDelete = require("../../../controllers/api/v1/answer/answerDelete")

const Router = express.Router();

Router.post('/create-answer',passport.authenticate('user-rule',{session:false}), AnswerCreate.createAnswer)
Router.post('/delete-answer',passport.authenticate('user-rule',{session:false}), AnswerDelete.deleteAnswer)


module.exports = Router;