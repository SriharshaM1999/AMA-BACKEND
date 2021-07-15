const mongoose = require('mongoose')

const QuestionSchema = mongoose.Schema({

    content:{
        type: String,
        required: true
    },

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },

    tagname:{
        type:String,
        required:true,
    },

    answer:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Answer'
        }
    ]
    
},{
    timestamps:true
});

const Question = mongoose.model('Question',QuestionSchema);

module.exports = Question;