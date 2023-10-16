
var mongoose = require('mongoose');

//schema
var userSchema = new mongoose.Schema({
    email:{
        type:String
    },
    password:{
            type:String
    },
    otp:{
        type:Number
    }
});

module.exports = mongoose.model('user',userSchema);