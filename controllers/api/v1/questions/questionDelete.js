const Question = require("../../../../model/question");
const Tag = require("../../../../model/tags");
const User = require("../../../../model/Users");
const Answer = require("../../../../model/answers");

module.exports.deleteQuestion= async function(req, res){

    console.log(req.body)

    const user = req.user._id;
    const id = req.body.id
    const tagname= req.body.tagname
    console.log("tagname received is",tagname);

    try{

            

            let question = await Question.findById(id);
            console.log("user is"+ user);
            console.log("post id is", id)
            console.log("question is" , question);

           // console.log(question.user+"=="+user+(String(question.user._id)==String(user)))

           if(question){

                if(String(question.user) != String(user)){
                    return res.status(422).json({
                        message:'Unauthorized'
                    })
                }

                let tag = await Tag.findOne({name:tagname});
                let tagId = tag._id;

          

                // question removal
                question.remove();

                // tag removal
                await Tag.findByIdAndUpdate(tagId,{$pull :{questions:id}});

                // user count update
                 await User.updateOne({_id:user},{$inc:{noOfQuestions:-1}});

                //answer corresponding a post  update
                await Answer.deleteMany({'question':id})


                return res.status(200).json({
                    message:'Deleted Successfully'
                })


            }
         else{
                return res.status(200).json({
                    message:"No such Question Exists"
                })
            }

        }
       

    
    catch(err){
        console.log(err)
        return res.status(500).json({
            message:"Internal Server Error"
        })

    }

}