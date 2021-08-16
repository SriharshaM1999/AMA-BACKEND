const mongoose = require('mongoose')

const QuestionSchema = mongoose.Schema({

    content:{
        type: String,
        required: true
    },

    solution:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Solution',
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

    status:{
        type:Number,
        required:true
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