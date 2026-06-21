const express = require("express");
const router = express.Router();

const Vote = require("../models/vote");
const User = require("../models/user");
const blockchain = require("../blockchain/blockchain");


router.post("/vote", async (req,res)=>{

try{

const {userId,candidate} = req.body;

const user = await User.findById(userId);

if(user.hasVoted){
return res.json({message:"You already voted"});
}

const hash = blockchain.addBlock({
userId,
candidate
});

const vote = new Vote({
userId,
candidate,
hash
});

await vote.save();

user.hasVoted=true;
await user.save();

res.json({
message:"Vote recorded successfully",
hash:hash
});

}

catch(err){

res.status(500).json({message:"Voting error"});

}

});


module.exports = router;