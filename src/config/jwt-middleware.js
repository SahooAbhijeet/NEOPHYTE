const { ExtractJwt } = require('passport-jwt');
const JWT = require('passport-jwt')
const User = require('../models/user'); 


const JwtStrategy = JWT.Strategy;
const ExtractJWT = JWT.ExtractJwt;

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'twitterSecret'
}

const passportAuth = (passport) => {
    try {
        passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
            const user = await User.findById(jwt_payload.id);
            if(!user) {
                done(null, false);
            } else {
                done(null, user)
            }
        }));
    } catch (error) {
        console.log(error);
        throw {error};
    }
}
    
module.exports = {
    passportAuth
}