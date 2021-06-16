const Question = require("../../../../model/question");


module.exports.display = async function(req, res){

    try{

            if(req.user){

                    let questions = await Question.find();

                    let question = questions.map((ques)=>ques.content)

                    return res.status(200).json({
                        message:"The list of Questions are provided below",
                        Questions:questions
                    })


            }
            else{
                      return res.status(422).json({
                          message:'Unauthorized'
                      })
            }

    }   
    catch(err){
        console.log(err);
        return res.status(500).json({
            message:'Internal Server Error'
        })
    }

}