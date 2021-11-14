const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");


const app = express();
//use static pages from local server
app.use(express.static("public"))

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/signup.html")
})

app.listen(3000, () =>{
    console.log("Server is running on port 3000")
});