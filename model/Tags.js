const mongoose = require("mongoose");

const tagSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },


    questions:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Question'
        }
    ]
}, 
{
    timestamps:true,
})


const Tag= mongoose.model('Tag', tagSchema);

module.exports = Tag;


// in version 2 add count variable here;