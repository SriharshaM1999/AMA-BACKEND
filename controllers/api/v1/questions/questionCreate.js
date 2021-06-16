const Question = require("../../../../model/question");
const Tag = require("../../../../model/tags");


module.exports.createQuestion= async function(req,res){


    try{

            

            console.log("I got called");



            const content = req.query.content
            const user = req.user._id;
            const tagname = req.query.tagname

            const question  = await Question.create({
                content:content,
                user:user,
                tagname: tagname
            })

            

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

