const User = require("../../../../../model/Ta/Ta")


module.exports.signUp = async function(req, res){


    console.log("req received is : ------->");
  // console.log(req);

    const email = req.body.email;
    const password=req.body.password;
    const username=req.body.name || "name";
 

    try{
        console.log("ee got called")

        let users =  await User.findOne({email:email});

        if(users!=null){
            console.log("user is present",user);
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
                QuestionsAnswered:[],
                QuestionsEscalated:[],
                QuestionsSelected:[]
            },function(err){
            
                 if(err){
                     console.log(err);
                     return;
                 };
                 return res.status(200).json({
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

