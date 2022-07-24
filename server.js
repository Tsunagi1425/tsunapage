const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const PORT = 3000;

app.use(mylogger);

//app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    //console.log("Hello World");

    //res.render("index", {text: "こんにちは"});
    var status_id = 200;
    switch(status_id){
        case 200:
            //res.send("こんにちは");
            res.render("index", {text: "NodejsとExpress"});



            break;
        case 400:

            break;
        case 500:
            res.status(500).json({ msg: "error" });
            break;

    }

});

app.use("/user", userRouter);

function mylogger(req, res, next) {
    console.log(req.originalUrl);
    next();
}


app.listen(PORT, console.log("サーバーが起動しました"));