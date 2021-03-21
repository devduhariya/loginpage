const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const bodyparser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors')
const SALT =5;
app.use(bodyparser.json());
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}));
require('./schema');
const User = mongoose.model('User');
mongoose.connect('mongodb+srv://sukhdev:db12@database.jd8vq.mongodb.net/database?retryWrites=true&w=majority');
const isNullOrUndefined = (val) => val === null || val === undefined || val === '';

app.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;
    if (isNullOrUndefined(email) || isNullOrUndefined(password)) {
        res.status(400).send({
            err: `please input valid details`,
        });
    } else {
        const existingUser = await User.findOne({ email });
        if (isNullOrUndefined(existingUser)) {
            const hashedPwd = bcrypt.hashSync(password, SALT);
            const newUser = new User({ username, email, password: hashedPwd });
            await newUser.save();
            res.status(201).send({ success: "Signed up" });
        } else {
            res.status(400).send({
                err: `email ${email} already exists. Please choose another.`,
            });
        }
    }
});
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if (isNullOrUndefined(email) || isNullOrUndefined(password)) {
        res.status(400).send({
            message: 'Email or password should not be empty'
        });
    }
    const existingUser = await User.findOne({
        email,
    });

    if (isNullOrUndefined(existingUser)) {
        res.status(401).send({ err: "UserName does not exist." });
    } else {
        const hashedPwd = existingUser.password;
        if (bcrypt.compareSync(password, hashedPwd)) {
            res.status(200).send({ success: "Logged in" });
        } else {
            res.status(401).send({ err: "Password is incorrect." });
        }
    }
});
app.listen(9000);