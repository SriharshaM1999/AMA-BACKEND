const User = require("../../../../model/Users")




module.exports.signUp = async function(req, res){


    console.log("req received is : ");
    console.log(req.query);

    const email = req.query.email;
    const password=req.query.password;
    const username=req.query.username

 

    try{

        let users =  await User.findOne({email:email});

        if(users){
            console.log("user is present");
            return res.status(200).json({
                userPresent: true,
                error:false,
                message:'User Exists'
            })
        }

        else{


            await User.create({
                username: username,
                email: email,
                password: password,
                noOfQuestions:0,
                noOfAnswers:0
            },function(err){
            
                 if(err){
                     console.log(err);
                     return;
                 };
                 return res.json(200,{
                    userPresent: false,
                    error:false,
                    message:"Account Created "
                })
            })





        }

    }

    catch(err){
        console.log(err);
        return res.json(200,{
            userPresent: false,
            error:true,
            message:'Error....!'
        })
    }








}