import passport from "passport";
import dotenv from "dotenv";
const GoogleStrategy = require('passport-google-oauth20').Strategy;
import User from "../models/user.model";
import IMongoDBUser from "../types";

dotenv.config();

passport.serializeUser((user: any, done) => {
    done(null, user.id);
});

passport.deserializeUser((id: string, done: any) => {
    User.findById(id, (err: Error, user: any) => {
        if(err)
            return done(err, false);
        if(!user)
            return done(null, false, { message: "User not found" });
        done(null, user);
    });
});

passport.use(new GoogleStrategy({
    clientID: `${process.env.GOOGLE_CLIENT_ID}`,
    clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken: any, refreshToken: any, profile: any, done: any) {
    User.findOne({ googleId: profile.id }, async (err: Error, user: IMongoDBUser) => {
        if(err)
            return done(err, false);
        if(user) {
            console.log(user);
            done(null, user);
        } else {
            const newUser = new User({ 
                username: profile.name.givenName, googleId: profile.id
            });
            await newUser.save();
            console.log("New User created ", newUser);
            done(null, newUser);
        }
            
    });
  }
));