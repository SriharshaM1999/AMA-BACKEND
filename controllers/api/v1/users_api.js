const User = require("../../../model/Users")

const jwt = require("jsonwebtoken");


module.exports.createSession= async function(req,res){

 try{

    console.log(req.body);

    let user = await User.findOne({email:req.body.email});
 
    if(!user || user.password!= req.body.password){
        return res.json(422,{
            message:"Invalid user name or password"
        })
    }

    return res.json(200,{
        message:" Successfully logged in here is your token",
        data:{
            token:jwt.sign(user.toJSON(),'secret',{expiresIn:'100000'})
        }
    })





}
 catch(err){
     console.log(err);
     return res.json(500,{
        message:"Internal Server Erro"
    })
 }



}