import passport from "passport";
import dotenv from "dotenv";
const GoogleStrategy = require('passport-google-oauth20').Strategy;
import User from "../models/user.model";
import IMongoDBUser from "../types";
const FacebookStrategy = require("passport-facebook").Strategy;
const GithubStrategy = require("passport-github2").Strategy;

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

const strategyCallback = (strategy: string, usernameValue: string, profile: any, done: any) => {
    let where = {};
    switch(strategy) {
        case "google":
            where = { googleId: profile.id };
            break;
        case "facebook":
            where = { facebookId: profile.id };
            break;
        case "github":
            where = { githubId: profile.id };
            break;
        default:
            where = { googleId: profile.id };
    }
    console.log(strategy, where);
    User.findOne(where, async (err: Error, user: IMongoDBUser) => {
        if(err)
            return done(err, null);
        if(user) {
            return done(null, user);
        } else {
            const newUser = new User({ 
                username: usernameValue, ...where
            });
            await newUser.save();
            console.log("New User created ", newUser);
            return done(null, newUser);
        }
            
    });
}
passport.use(new GoogleStrategy({
    clientID: `${process.env.GOOGLE_CLIENT_ID}`,
    clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken: any, refreshToken: any, profile: any, done: any) {
    strategyCallback("google", profile.name.givenName, profile, done);
  }
));

passport.use(new FacebookStrategy({
    clientID: `${process.env.FACEBOOK_CLIENT_ID}`,
    clientSecret: `${process.env.FACEBOOK_CLIENT_SECRET}`,
    callbackURL: "https://react-node-oauth2-backend.herokuapp.com/auth/facebook/callback"
}, 
    (accessToken: any, refreshToken: any, profile: any, done: any) => {
        strategyCallback("facebook", profile.displayName.replace(" ", ""), profile, done);
    }
));

passport.use(new GithubStrategy({
    clientID: `${process.env.GITHUB_CLIENT_ID}`,
    clientSecret: `${process.env.GITHUB_CLIENT_SECRET}`,
    callbackURL: "https://react-node-oauth2-backend.herokuapp.com/auth/github/callback"
},  (accessToken: any, refreshToken: any, profile: any, done: any) => {
        strategyCallback("github", profile.username, profile, done);
    }
));