const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

const User = require("../models/user");


// EMAIL TRANSPORTER
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "evoting.mrcet@gmail.com",
        pass: "oewnqwfsmxpzjpri"
    }
});


// REGISTER USER
router.post("/register", async (req, res) => {

    try {

        const { name, email, password, faceDescriptor } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name,
            email,
            password: hashedPassword,
            faceDescriptor
        });

        await user.save();

        res.json({ message: "Registration successful" });

    } catch (error) {
        console.log(error);
        res.json({ message: "Error registering user" });
    }

});



// LOGIN (PASSWORD CHECK)
router.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.json({ message: "User not found" });
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.json({ message: "Invalid password" });
        }

        res.json({
            message: "Password verified",
            faceDescriptor: user.faceDescriptor
        });

    } catch (error) {
        console.log(error);
        res.json({ message: "Login error" });
    }

});



// SEND OTP
router.post("/send-otp", async (req, res) => {

    try {

        const { email } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.json({ message: "User not found" });
        }

        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        user.otp = otp;
        user.otpExpires = Date.now() + 5 * 60 * 1000;

        await user.save();

        await transporter.sendMail({
            to: email,
            subject: "E-Voting OTP Verification",
            text: `Your OTP is ${otp}`
        });

        res.json({ message: "OTP sent to email" });

    } catch (error) {
        console.log(error);
        res.json({ message: "Error sending OTP" });
    }

});



// VERIFY OTP
router.post("/verify-otp", async (req, res) => {

    try {

        const { email, otp } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.json({ message: "User not found" });
        }

        if (user.otp !== otp) {
            return res.json({ message: "Invalid OTP" });
        }

        if (Date.now() > user.otpExpires) {
            return res.json({ message: "OTP expired" });
        }

        user.otp = null;
        user.otpExpires = null;

        await user.save();

        res.json({ message: "OTP verified successfully" });

    } catch (error) {
        console.log(error);
        res.json({ message: "OTP verification error" });
    }

});



module.exports = router;