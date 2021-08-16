const mongoose = require('mongoose');

const solutionSchema = new mongoose.Schema({

    content:{
        type: String,
        required: true
    },

    ta:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Ta',
        required: true
    },

    question:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Question',
        required:true,
    },

   
    
},{
    timestamps:true
});

const Solution = mongoose.model('Solution',solutionSchema);

module.exports = Solution;