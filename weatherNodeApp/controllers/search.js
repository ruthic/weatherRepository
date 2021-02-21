const Search = require('../models/Search');
const User = require('../models/User');
const { search } = require('../routes/api');

const addSearch = async (req, res) => {

    try {
        console.log("new serch ")
        let user = await User.findOne({ "_id": req.body.user })
        if (user)
            await user.searchesHistory.push(req.body.user);
        let search = new Search(req.body)
        console.log(search)
        console.log(user)
        console.log(search)
        console.log("newSearch")
        await serach.save();
        await user.save();
        console.log(search)
        res.status(200).json({ newSearch: serach });
    }
    catch (error) {
        res.status(400).send(error.message)
    }
}
const getAll = async (req, res) => {
    console.log("entered")
    console.log(req.body)
    debugger
    try {
        let searches = await Search.find({ "user": req.body });
        console.log(req.body)
        if (searches == null) {
            res.send("no searches")
        }
        res.status(200).json({ "searches": searches })
    }
    catch (err) {
        res.status(400).send(err);
    }
}
module.exports = { addSearch, getAll }