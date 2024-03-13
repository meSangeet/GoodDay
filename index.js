const express = require('express')
const mongoose = require('mongoose')

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/Learn")

//describing the model schema
const User = mongoose.model('Users', {
    name : String,
    email : String,
    password : String
});

app.post("/signup", async (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existLogUser = await User.findOne({email: username});

    if(existUser){
        return res.status(400).send("Username already exists");
    }

    const user = new User({
        name: name,
        email: username,
        password: password
    })

    user.save();

    req.json({
        "msg" : "User created successfully"
    })
})