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

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true })); 