const User = require("../../../../model/Users")

const jwt = require("jsonwebtoken");

const {OAuth2Client} = require('google-auth-library');

const client = new OAuth2Client('394103427165-8t7tv3gk5ne5birefeat95nocu0h40ha.apps.googleusercontent.com')

module.exports.googleLogin = async function(req, res){


        const {token} = req.body;

    client.verifyIdToken({idToken:token,audience:"394103427165-8t7tv3gk5ne5birefeat95nocu0h40ha.apps.googleusercontent.com"})
    .then((response) => {

        const {email_verified, name, email,at_hash} = response.payload

        console.log(response.payload);

        if(email_verified==true){

         User.findOne({email:email}).then((user)=>{

                

                     if(user==null || user == undefined){

                       User.create({
                            username: name,
                            email: email,
                            password: at_hash,
                            noOfQuestions:0,
                            noOfAnswers:0
                        })
                        .then((err, user)=>{

                            if(err){
                                console.log("i got called 2");

                                console.log(err);
                                return res.status(404).json({message:"Error"})

                            }
                            console.log("i got called 1");

                            return res.json(200,{
                                message:" Successfully logged in here is your token",
                                data:{
                                    token:jwt.sign(user.toJSON(),'secret',{expiresIn:'10000000'}),
                                    username:user.username
                                }
                            })


                        })
        



                    }

                    else{
                            console.log("i got called 2");
                            return res.json(200,{
                            message:" Successfully logged in here is your token",
                            data:{
                                token:jwt.sign(user.toJSON(),'secret',{expiresIn:'10000000'}),
                                username:user.username
                            }
                        }) 
                        
                    }

            })

        }

        else{


                return res.status(422).json({
                    message: "Unauthorized",
                })


        }


    })
 

         return;












}