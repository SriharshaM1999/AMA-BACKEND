const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/AMA");

const db = mongoose.connection;


db.on("error",()=> console.error.bind(console,"Error on connecting to the db"));


db.once("open",(err)=>console.log("successfully connected to db"));


module.exports = db;