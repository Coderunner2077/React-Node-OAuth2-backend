const router = require("express").Router();
import passport from "passport";

router.get("/google", passport.authenticate("google", { scope: ["profile"]}));

router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/login" }), (req: any, res: any) => {
    res.redirect("/");
});

export default router;