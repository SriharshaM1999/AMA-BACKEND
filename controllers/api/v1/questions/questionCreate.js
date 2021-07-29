const Question = require("../../../../model/question");
const Tag = require("../../../../model/tags");
const UserData = require("../../../../model/Users")

module.exports.createQuestion= async function(req,res){


    try{

            

            console.log("createQuestion got called");



            const content = req.body.content
            const user = req.user._id;
            const tagname = req.body.tagname

            const question  = await Question.create({
                content:content,
                user:user,
                tagname: tagname
            })

            const User = await UserData.updateOne({_id:user},{$inc:{noOfQuestions:1}});

            console.log("IN question create, user: ", User);

            const tag= await Tag.findOne({name:tagname});

            if(tag){
                console.log("The question is"+question._id);
                tag.questions.push(question._id);
                tag.save();


            }
            else{

                const tag = await Tag.create({
                    name:tagname,
                    questions:[]
                })

                tag.questions.push(question);
                tag.save();

            }

                return res.status(200).json({
                    message:"post created successfully"
                })


        }

        catch(err){

                console.log(err);

                return res.status(200).json({
                    message:'Post is not created',
        
                })
        }

    }

