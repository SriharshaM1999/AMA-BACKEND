const Answer = require('../../../../model/answers');
const Question = require("../../../../model/question");



module.exports.deleteAnswer = async function(req, res){

    const user = req.user._id;
    const postId = req.body.postId;
    const answerId = req.body.answerId;
     


    try{

            const answer = await Answer.findById(answerId);


            console.log("In answer delete ", user, postId, answerId, answer);

         

            if(answer){


                if(String(answer.user) != String(user)){
                    return res.status(422).json({
                        message:'Unauthorized'
                    })
                }

                answer.remove();

                await Question.findByIdAndUpdate(postId,{$pull:{'answer':answerId}});

                return res.status(200).json({
                    message:'comment successfully removed'
                })





            }





    }

    catch(err){

        return res.status(500).json({
            message:"Internal Server Error"
        })


    }




}