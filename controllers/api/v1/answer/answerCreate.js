const Answer = require('../../../../model/answers');
const Question = require("../../../../model/question");



module.exports.createAnswer= async function(req, res){

    try{

    console.log("user at comment is ", req.user);

    let questionId = req.body.postId;
    let user = req.user._id;
    let content = req.body.content;

    console.log('answer written details', questionId, content);

    try{

        let answer = await Answer.create({
            content:content,
            user:user,
            question:questionId

        });

        let question = await Question.findById(questionId);

        if(question){
            question.answer.push(answer._id);
            question.save();
        }
        // code for else condition later i.e if post is not found // it might be a bug
        
        return res.status(200).json({
            'message':'comment created successfully'
        })
    }
    catch(err){
        console.log(err);
        return res.status(500).json(
            {
                message:'Internal Server Error'
            }
        )
    }

}
catch(err){
    console.log(err);
    return res.status(500).json({
        message:'Internal Server Error'
    })
}


}