//import express body and cors
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
//create express app
const app = express();

//
var corsOptions= {
    origin: "https://localhost:8081"
};
//add middleware for request
app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true })); 

// add simple route

app.get("/",(req, res) => {
    res.json({message: "Welcome to my api for authentication!"});

});

// set port listen for request
const PORT =process.env.PORT ||8080;
app.listen(PORT, () => {
    console.log("server is running on port ${PORT}.");
});