const Tag = require("../../../../model/tags");


module.exports.display =async function(req, res){
    
    console.log("I got called")

    let tags = await Tag.find({});

    // console.log("tags are:", tags);

    

    return res.status(200).json({
        message:'The list of tags are:',
        tags:tags
    })


}