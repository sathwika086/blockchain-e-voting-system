const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

// IMPORT MODELS & BLOCKCHAIN
const User = require("./models/user");
const Vote = require("./models/vote");
const authRoutes = require("./routes/auth");
const blockchain = require("./blockchain/blockchain");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

app.use("/api", authRoutes);

// DATABASE CONNECTION
mongoose.connect("mongodb://127.0.0.1:27017/evoting")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log("DB Connection Error:", err));

// EMAIL CONFIG
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "evoting.mrcet@gmail.com",
        pass: "oewnqwfsmxpzjpri"
    }
});

app.get("/", (req, res) => {
    res.send("E-Voting Server Running");
});

// THE INTEGRATED VOTE ROUTE
app.post("/api/vote", async (req, res) => {
    try {
        const { email, candidate } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // ALREADY VOTED CHECK
        if (user.hasVoted) {
            return res.json({ message: "You have already voted" });
        }

        // INTEGRATE BLOCKCHAIN
        const blockHash = blockchain.addBlock({
            voter: email,
            candidate: candidate,
            timestamp: Date.now()
        });

        // UPDATE USER STATUS
        user.hasVoted = true;
        await user.save();

        // SAVE VOTE RECORD
        const newVote = new Vote({
            userId: user._id,
            candidate: candidate,
            hash: blockHash
        });
        await newVote.save();

        // SEND CONFIRMATION EMAIL - CORRECTED SYNTAX
        await transporter.sendMail({
            to: email,
            subject: "Vote Confirmation - Blockchain Receipt",
            text: `Your vote for ${candidate} has been recorded.\n\nTransaction Hash: ${blockHash}\n\nThank you.`
        });

        // SUCCESS RESPONSE
        res.json({
            message: "Vote recorded successfully",
            hash: blockHash
        });

    } catch (error) {
        console.error("Voting Error:", error);
        res.status(500).json({ message: "Error recording vote" });
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});