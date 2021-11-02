const router = require('express').Router();
const User = require("./models/user");
var bcrypt = require('bcryptjs');
const Joi = require('@hapi/joi');



router.post("/register", async (req, res) => {

    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send("Email already exists");

    let request = req.body
    let password = request['password'];
    bcrypt.hash(password, 8, async function (err, hash) {
        let id = new Date().getTime();
        const user = new User({
            id,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            mobileNumber: req.body.mobileNumber,
            username: req.body.username,
            password: hash,
            role: req.body.role
        });
        try {
            const savedUser = await user.save();
            res.send(savedUser);
        } catch (err) {
            res.status(400).send(err);
        }
    });

    // router.post("/login", async (req, res) => {
    //     const { error } = loginValidation(req.body);
    //     if(error) return res.status(400).send(error.details[0].message);

    //     const user = await User.findOne({email: req.body.email});
    //     if(!user) return res.status(400).send("Email doesn't exists");

    //     const validPass = await bcrypt.compare(req.body.password, user.password);
    //     if(!validPass) return res.status(400).send("Invalid password");
    //     res.send("Logged in");
    // })


});







module.exports = router;


