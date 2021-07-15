const express = require("express");
const Router = express.Router();
const TagsCreateController = require("../../../controllers/api/v1/Tags/tagsDisplay");
console.log("tag router")

Router.get('/display',TagsCreateController.display);

module.exports = Router;