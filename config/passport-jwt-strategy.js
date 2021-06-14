const passport = require('passport');

const JWTStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const User = require('../model/Users');


var opts = {}

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';



passport.use(new JWTStrategy(opts, function(jwt_payload, done) {
    User.findById({id: jwt_payload._id}, function(err, user) {
        if (err) {
            console.log("error in finding the user from jwt"+ err);
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    });
}));

module.exports = passport;

