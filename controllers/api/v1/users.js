const User = require("../../../model/Users")




module.exports.signUp = async function(req, res){


    console.log("req received is : ");
    console.log(req);
 

    try{

        let users =  await User.findOne({email:req.body.email});

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
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
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