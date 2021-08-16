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

QuestionsSelected:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Question'
    }
],

QuestionsAnswered:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Question'
    }
],

QuestionsEscalated:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Question'
    }
],



},{
    timestamps:true,
})


const Ta= mongoose.model("Ta", userSchema);


module.exports = Ta;