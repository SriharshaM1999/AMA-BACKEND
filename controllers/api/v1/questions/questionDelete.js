const Question = require("../../../../model/question");
const Tag = require("../../../../model/tags");

module.exports.deleteQuestion= async function(req, res){

    const user = req.user._id;
    const id = req.query.id
    const tagname= req.query.tagname

    try{

            

            let question = await Question.findById(id);
            console.log("user is"+ user)

            // console.log(question.user+"=="+user+(String(question.user._id)==String(user)))

            if(String(question.user) != String(user)){
                return res.status(422).json({
                    message:'Unauthorized'
                })
            }


            let tag = await Tag.findOne({name:tagname});
            let tagId = tag._id;

            if(question){

                question.remove();

                let tagDeleted = Tag.findByIdAndUpdate(tagId,{$pull :{questions:id}})

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