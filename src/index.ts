import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import session from "express-session";
import passport from "passport";

dotenv.config();

mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useCreateIndex: true,
    useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once("open", () =>{
    console.log("MongoDB is connected");
});

const app = express();

// 1. Middlewares
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
    res.send("Welcome to React Node oAuth App");
});

app.listen(process.env.PORT || 4000, () => {
    console.log("Server started");
});