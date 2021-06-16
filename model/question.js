const mongoose = require('mongoose')

const QuestionSchema = mongoose.Schema({

    content:{
        type: String,
        required: true
    },

    user:{
        type:mongoose.Schema.Types.ObjectId,
        required: true
    },

    tagname:{
        type:String,
        required:true,
    }
    
},{
    timestamps:true
});

const Question = mongoose.model('Question',QuestionSchema);

module.exports = Question;