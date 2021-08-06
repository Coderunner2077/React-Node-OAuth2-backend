import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    googleId: String
});

export default mongoose.model("User", userSchema);