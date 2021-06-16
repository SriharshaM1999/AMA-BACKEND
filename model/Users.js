const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

username:{
    type: String,
    required:true,
    unique: true

},

email:{
    type: String,
    required:true,
    unique: true
},

password:{
    type:String,
    required:true
},
noOfQuestions:{
    type:Number,
    
},
noOfAnswers:{
    type:Number
}

},{
    timestamps:true,
})


const User= mongoose.model("User", userSchema);


module.exports = User;