const router = require("express").Router();
import passport from "passport";
import dotenv from "dotenv";

dotenv.config();

router.get("/google", passport.authenticate("google", { scope: ["profile"]}));

router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/login" }), (req: any, res: any) => {
    res.redirect(process.env.CLIENT_ORIGIN);
});

router.get("/facebook", passport.authenticate("facebook"));

router.get("/facebook/callback", passport.authenticate("facebook", { failureRedirect: "/login"}), 
    (req: any, res: any) => {
        res.redirect(process.env.CLIENT_ORIGIN);
    }
);

router.get("/github", passport.authenticate("github"));

router.get("/github/callback", passport.authenticate("github", 
    { failureRedirect: "/login"}), 
    (req: any, res: any) => {
        res.redirect(process.env.CLIENT_ORIGIN);
    }
);

router.get("/user", (req: any, res: any) => {
    res.send(req.user);
});

router.get("/logout", (req: any, res:any) => {
    if(req.user) {
        req.logout();
        res.send("success");
    }
})
export default router;