const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/doubts");
// mongoose.connect("mongodb+srv://user:user@askmeanything.krgu9.mongodb.net/AMA?retryWrites=true&w=majority");

const db = mongoose.connection;


db.on("error",()=> console.error.bind(console,"Error on connecting to the db"));


db.once("open",(err)=>console.log("successfully connected to db"));


module.exports = db;
