var Tags = require("../../../../model/Tags");


module.exports.display =async function(req, res){
    
    console.log("I got called")

    let tags = await Tags.find({});

    // console.log("tags are:", tags);

    

    return res.status(200).json({
        message:'The list of tags are:',
        tags:tags
    })


}