const User = require("../model/Users")

module.exports.home = function(req, res){
    return res.render('home')
}


module.exports.signUp = async function(req, res){


    console.log(req.query);


    try{

        let users = User.findOne({email:req.query.email});

        if(users){
            return 
        }

    }

    catch(err){
        console.log(err);
    }



    User.create({
        username: req.query.username,
        email: req.query.email,
        password: req.query.password
    },function(err){
         if(err){
             console.log(err);
             return;
         };
        return res.redirect("/");
    })





}