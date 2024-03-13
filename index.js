const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/Learn")

//describing the model schema
const User = mongoose.model('Users', {
    name : String,
    email : String,
    password : String
});

const user = new User({
    name: 'testname1',
    email: 'test1@email.com',
    password: 'pass1'
});

user.save();