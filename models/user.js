const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true
    },

    hasVoted:{
        type:Boolean,
        default:false
    },

    faceDescriptor:{
        type:Array,
        default:[]
    },

    // OTP fields
    otp:{
        type:String,
        default:null
    },

    otpExpires:{
        type:Date,
        default:null
    }

});

module.exports = mongoose.model("User",UserSchema);