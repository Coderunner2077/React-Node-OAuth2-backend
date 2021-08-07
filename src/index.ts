import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import authRoutes from "./routes/auth-routes";
import "./config/passport-setup.ts";

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
app.use(cors({ origin: process.env.CLIENT_ORIGIN, credentials: true }));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req: any, res) => {
    console.log("logged", req.sessionID)
    res.send("Welcome to React Node oAuth App");
});

app.use("/auth", authRoutes);

app.listen(process.env.PORT || 4000, () => {
    console.log("Server started");
});