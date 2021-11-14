const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");


const app = express();
//use static pages from local server
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/signup.html")
})

app.post("/", (req, res) =>{

    let firstName = req.body.fname
    let lastName = req.body.lname
    let email = req.body.email

    console.log(firstName, lastName, email);
})



app.listen(3000, () =>{
    console.log("Server is running on port 3000")
});