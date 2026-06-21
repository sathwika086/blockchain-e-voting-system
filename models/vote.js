const mongoose = require("mongoose");

const VoteSchema = new mongoose.Schema({

    userId:{
        type:String
    },

    candidate:{
        type:String
    },

    hash:{
        type:String
    },

    timestamp:{
        type:Date,
        default:Date.now
    }

});

module.exports = mongoose.model("Vote",VoteSchema);