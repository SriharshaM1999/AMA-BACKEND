const Question = require("../../../../../model/question");
const Ta = require("../../../../../model/Ta/Ta");

module.exports.dashboardInfo  = async function(req, res){

    console.log("dashboardInfo", "I am in")


    try{

        let taId = req.user._id;

        let taInfo = await Ta.findOne({_id: taId});

        let allTa = await Ta.find({});

        return res.status(200).json({
            ta:taInfo,
            allTa:allTa
        })



    }
    catch(err){
        if(err){
            console.log(err);
            return res.status(500).json({message:'Internal Server Error'})
        }
    }






}

module.exports.escalateQuestion = async function(req,res){

    try{

        console.log("================================", req.body)

        const reqId = req.user._id;
        const questionId = req.body.id;
        console.log("I got called", questionId, reqId);

        let ta = await Ta.findOne({_id:reqId});


        if(ta){
            console.log("me",ta.QuestionsEscalated)
            ta.QuestionsEscalated.push(questionId);
            ta.save();

            console.log("ta.QuestionsEscalated", ta.QuestionsEscalated)
        }

        let question = await Question.findById(questionId);

        await question.update(
            {solution:solution._id},
            {status:0},
            )

        

        return res.status(200).json({
            message:'done'
        })



    }
    catch(err){

        return res.status(404).json({message:'err'})

    }



}

module.exports.addQuestion = async function (req,res){

        try{

            const reqId = req.user._id;
        const questionId = req.body.id;

        console.log(">>>",req.query, req.body,req.params)
        console.log("I got called >>", questionId, reqId);

            
            
            console.log("I got called->", questionId);

            let ta = await Ta.findOne({_id:reqId});

            if(ta){
                console.log("me")
                ta.QuestionsSelected.push(questionId);
                ta.save();
            }

            let question = await Question.findById(questionId);

        await question.update(
            {status:1},
            )




            return res.status(200).json({
                message:'done'
            })



        }
        catch(err){
            console.log(err)
            return res.status(404).json({message:'error'})

        }





}





module.exports.display = async function(req, res){

    try{


                    let questions = await Question.find({})
                    .populate('user')
                    .populate('answer')

                     .populate({ path: 'answer', populate: 'user'})
                     .sort({createdAt:-1}) ;


                    let question = questions.map((ques)=>ques.content)

                    return res.status(200).json({
                        message:"The list of Questions are provided below",
                        Questions:question
                    })




    }   
    catch(err){
        console.log(err);
        return res.status(500).json({
            message:'Internal Server Error'
        })
    }

}