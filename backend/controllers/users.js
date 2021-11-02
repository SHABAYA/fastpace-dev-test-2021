const express = require("express");
const usersModel = require('../src/models/user');
var bcrypt = require('bcryptjs');
const Joi = require('@hapi/joi');



//var db = require('../index')

const router = express.Router();
/*
middleware
*/
router.use(express.json());
router.use(express.urlencoded({
    extended: true
}));


const errHandler = (err) => {
    console.error("Error: ", err);
}

router.post('/add', function (req, res) {
    let request = req.body
    console.log('received request');
    let password = request['password'];
    bcrypt.hash(password, 8, function (err, hash) {
        let id = new Date().getTime();
        usersModel.create({
            id: id,
            username: request['username'],
            password: hash,
            firstName: request['firstName'],
            lastName: request['lastName'],
            mobileNumber: request['mobileNumber'],
            email: request['email'],
            role: request['role']
        }).catch(errHandler);

        res.status(200)
        res.send('success')
    });
});

router.get('/all', async function (req, res) {
    const users = await usersModel.findAll();
    res.send(JSON.stringify(users, null, 2));
    res.status(200)
});

router.get('/:id', async function (req, res) {
    const id = req.params.id;
    const users = await usersModel.findOne({
        where: {
            id: id
        }
    });
    res.send(JSON.stringify(users, null, 2));
    res.status(200)
});




router.post('/update/:id', async function (req, res) {
    console.log("choice id is " + req.params.id);
    let request = req.body;
    const id = req.params.id;
    await usersModel.update({
        firstName: request['firstName'],
        lastName: request['lastName'],
        mobileNumber: request['mobileNumber'],
        email: request['email'],
        role: request['role']
    }, {
        where: {
            id: id
        }
    });
    res.status(200)
    res.send('success')
});


router.post('/delete/:id', async function (req, res) {
    console.log("choice id is " + req.params.id);
    const id = req.params.id;
    await usersModel.destroy({
        where: {
            id: id
        }
    });
    res.status(200)
    res.send('success')
});

router.post("/login", async (req, res) => {


    const user = await usersModel.findOne({ username: req.body.username });
    if (!user) return res.status(400).send("username doesn't exists");


    const validPass = bcrypt.compare(req.body.password, user.password);
    if (!validPass) { return res.status(400).send("Invalid password"); }
    else {
        res.send("Logged in");
    }

});

module.exports = router;


