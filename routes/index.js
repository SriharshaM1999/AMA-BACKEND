const express = require("express");

const api = require("./api")

const Router = express.Router();

Router.use('/api',api)

// Router.get('/', function (req, res) {
//     return res.status(200).json({
//       message: 'page not found',
//       success: false,
//     });
//   });



module.exports= Router;