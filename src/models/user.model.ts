import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    googleId: String,
    facebookId: String,
    githubId: String
});

export default mongoose.model("User", userSchema);