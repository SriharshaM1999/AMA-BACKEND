const Solution = require("../../../../../model/Ta/Solution");
const mongoose = require("mongoose");
const Question = require("../../../../../model/question")
const Ta = require("../../../../../model/Ta/Ta")

module.exports.solution = async function(req, res){


 try{
    let content = req.body.content;
    let questionId =new mongoose.mongo.ObjectId(req.body.questionId);

    let ta = req.user._id;

    console.log(ta);

   
    let solution = await Solution.create({
        content:content,
        ta:ta,
        question:questionId,
    })

    let question = await Question.findById(questionId);

    await question.update(
        {solution:solution._id},
        {status:1},
        )


    let ta_user = await Ta.findOne({_id:ta});   
    console.log("is ta present", ta);

    if(ta_user){
        console.log("ta ", ta_user.QuestionsAnswered)
        ta_user.QuestionsAnswered.push(solution._id);
        ta_user.save(); 
        console.log("got called")
    }

    await question.update({status:1})    
    



    return res.status(200).json({
        message:'solution is created',
        solution:solution
    })

}
catch(err){
    console.log(err);
    return res.status(500).json({ message:'error'})
   
}
}