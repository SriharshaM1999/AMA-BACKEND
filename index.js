const express = require("express");
const cors = require("cors");
const db = require("./config/mongoose");
const router = require('./routes/index');
const path  = require('path');
const passport = require('passport');
const passportJwt= require('./config/passport-jwt-strategy');


const port = process.env.PORT || 8000;





const app = express();


// app.set('view engine', 'ejs');
// app.set("views", path.join(__dirname, 'views'));




app.use(express.urlencoded());
app.use(express.json());



app.use(function (req, res, next) {
    // Website you wish to allow to connect
    //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'POST');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

 app.use(cors());


app.use('/', router);

// Router.get('/', function (req, res) {
//     return res.status(200).json({
//       message: 'page not found',
//       success: false,
//     });
//   });



app.listen(port, function(err){

        if(err){
            console.log("Error on listening to the port "+ err);

            return ;
        }
        console.log("listening on port number "+ port);

})