const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes/api');
// Add headers
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

mongoose.connect(process.env.DB_CONNECT, connectionParams)
    .then(() => {
        console.log("connected to db")
    })
    .catch((err) => {
        console.log("error: " + err);
    })
// middleware
app.use(bodyParser.json());
app.use('/', router);


// מחרוזת מוצפנת
// const userToken = () => {
//     // req.body
//     let token = jwt.sign({ name: "ruthi", password: "123" }, process.env.ACCESS_TOKEN_SECRET);
//     console.log(token);
//     let decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
//     console.log(decoded);
// }
// userToken();

app.listen((8000), () => {
    console.log("listening on port 8000!")
})