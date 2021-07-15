const mongoose = require('mongoose')

const answerSchema = mongoose.Schema({

    content:{
        type: String,
        required: true
    },

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },

    question:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Question',
        required:true,
    }
    
},{
    timestamps:true
});

const Answer = mongoose.model('Answer',answerSchema);

module.exports = Answer;