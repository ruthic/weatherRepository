const User = require('../models/User')
const Search = require('../models/Search');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const getUser = async (req, res) => {
    debugger
    try {
        console.log("arrive")
        let user = await User.findOne({ 'email': req.body.email, 'password': req.body.password });
        if (user) {
            console.log(user)
            console.log("get user  " )
            res.status(200).json({ "user": user })
        }


    }
    catch (err) {
        res.status(400).send(err);
    }

}

const getAll = async (req, res) => {
    try {
        let users = await User.find();
        if (users == null) {
            res.send("no users")
        }
        res.status(200).json({ users: users })
    }
    catch (err) {
        res.status(400).send(err);
    }
}
const getById = async (req, res) => {
    try {
        let user = await User.findById(req.params.id);
        res.status(200).json({ user: user })
    }
    catch (err) {
        res.status(400).send(err);
    }
}

const addUser = async (req, res) => {
    console.log(req.body)
    const user = new User(req.body);
    console.log(user);
    try {
        let token = jwt.sign({ password: req.body.password, name: req.body.name, email: req.body.email }, process.env.ACCESS_TOKEN_SECRET)
        console.log("token:" + token)
        await user.save();
        console.log(" user saved" + user);
        res.status(200).json({ "new user": user })

    }
    catch (err) {
        res.status(400).send(err);

    }

}


module.exports = { getUser, addUser, getAll, getById }