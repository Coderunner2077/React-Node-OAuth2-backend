import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import authRoutes from "./routes/auth-routes";
import cookieParser from "cookie-parser";
import "./config/passport-setup";

dotenv.config();

mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useCreateIndex: true,
useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () =>{
    console.log("MongoDB is connected");
});
connection.on("error", err => {
    console.error(err);
});

const app = express();

// 1. Middlewares
app.use(cookieParser());
app.use(express.json());
app.use(cors({ origin: `${process.env.CLIENT_ORIGIN}`, credentials: true }));

app.set("trust proxy", 1);

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000, // 1 day
        secure: true,
        sameSite: "none"
    }
}));

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req: any, res) => {
    res.send("Welcome to React Node oAuth App");
});

app.use("/auth", authRoutes);

app.listen(process.env.PORT || 4000, () => {
    console.log("Server started");
});