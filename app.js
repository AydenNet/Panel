const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const user = [];

app.use(express.static("public"));

app.get("/register", (req, res) => res.sendFile(__dirname + "/views/pages/register.html"));

app.get("/login", (req, res) => res.sendFile(__dirname + "/views/pages/login.html"));

app.post("/register", bodyParser.urlencoded({extended: false}), (req, res) => {
    let {prenom, mdp, mdp_confirmation} = req.body;

})

app.post("/login", bodyParser.urlencoded({extended: false}), (req, res) => {
    let {prenom, mdp} = req.body;
})

app.listen(8080);