import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to React Node oAuth App");
});

app.listen(process.env.PORT || 4000, () => {
    console.log("Server started");
});