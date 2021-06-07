const express = require("express");
const db = require("./config/mongoose");
const router = require('./routes/index');
const path  = require('path');



const port =8000;





const app = express();


app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, 'views'));



app.use(express.urlencoded());

app.use('/', router);


app.listen(port, function(err){

        if(err){
            console.log("Error on listening to the port "+ err);

            return ;
        }
        console.log("listening on port number "+ port);

})