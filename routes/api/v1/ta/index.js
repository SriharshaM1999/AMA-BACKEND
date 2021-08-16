const express = require('express');
const passport = require('../../../../node_modules/passport');
const taControllerSignUp = require("../../../../controllers/api/v1/ta/signUp")
const taControllerSignIn = require("../../../../controllers/api/v1/ta/signIn")
const taControllerQuestionDisplay = require("../../../../controllers/api/v1/ta/displayQuestion")
const taControllerSolution = require("../../../../controllers/api/v1/ta/solution/index")

const Router = express.Router();



Router.post('/create-account', taControllerSignUp.signUp);
Router.post('/create-session', taControllerSignIn.signIn);
Router.get('/display-question',taControllerQuestionDisplay.display)
Router.post('/solution',passport.authenticate('ta-rule',{session:false}),taControllerSolution.solution);
Router.post('/escalateQuestion', passport.authenticate('ta-rule',{session:false}),taControllerQuestionDisplay.escalateQuestion)
Router.get('/dashboard', passport.authenticate('ta-rule',{session:false}),taControllerQuestionDisplay.dashboardInfo)
Router.post('/add', passport.authenticate('ta-rule',{session:false}),taControllerQuestionDisplay.addQuestion)

module.exports= Router; 

