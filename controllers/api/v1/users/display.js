const Users = require('../../../../model/Users');


module.exports.display =async function(req, res){

    let users = await Users.find({});

    return res.status(200).json({
        message:'The list of users are:',
        users:users
    })


}