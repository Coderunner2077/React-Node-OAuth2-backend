import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useCreateIndex: true,
    useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once("open", () =>{
    console.log("MongoDB is connected");
});

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to React Node oAuth App");
});

app.listen(process.env.PORT || 4000, () => {
    console.log("Server started");
});