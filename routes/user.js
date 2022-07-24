const express = require("express");
const router = express.Router();
//router.use(logger);

router.get("/", (req, res) => {
    res.send("ユーザーです");

});

router.get("/:id", (req, res) => {
    res.send(`${req.params.id}のユーザー情報を取得しました`);

});

module.exports = router;