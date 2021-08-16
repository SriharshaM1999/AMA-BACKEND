const Question = require("../../../../model/question");


module.exports.question = async function(req, res){

    try{
        
        console.log(req.query);

        console.log("question with id got called")
    
    let postId = req.query.id;

    console.log(postId)

    let question = await Question.findOne({_id:postId})
    .populate('user')
    .populate('answer')
     .populate({ path: 'answer', populate: 'user'});

    if(question==null){
        return res.status(422).json({message:"Not present", found:false})
    }


    return res.status(200).json({
        question:question,
        message:'successfully done',
        found:true
    })


    }

    catch(err){
        console.log(err);
        return res.status(500).json({
            message:'I got error'
        })
    }



}