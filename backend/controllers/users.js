const express = require("express");
const usersModel = require('../src/models/user');
var bcrypt = require('bcryptjs');
const Joi = require('@hapi/joi');
var jwt = require('jsonwebtoken');



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

    usersModel.findOne({
        where: {
            username: req.body.username
        }
    })
        .then(function (data) {
            if (!data) {
                res.json({
                    responseMessage: 'Invalid username'
                })
            }

            let user = data.dataValues
            console.log(user)
            //compare password here
            bcrypt.compare(req.body.password, user['password']).then((result) => {
                // res === true
                if (result === true) {
                    let response = {
                        id: user['id'],
                        username: user['username'],
                        firstName: user['firstName'],
                        lastName: user['lastName'],
                        mobileNumber: user['mobileNumber'],
                        email: user['email'],
                        role: user['role'],
                    }
                    //create jwt here

                   var token = jwt.sign({
                        exp: Math.floor(Date.now() / 1000) + (60 * 60),
                        data: response
                      }, 'thebestsecretkeyever');

                      response['token'] = token;

                      res.json({
                          ...response
                      })

                    // jwt.sign({
                    //     ...response
                    // }, 'thebestsecretkeyever', { algorithm: 'RS256', expiresIn: '2h' }, function (err, token) {
                    //     console.log(token);

                    //     if(undefined == token){
                    //         res.status(500).json({
                    //             responseMessage: err
                    //         })
                    //     }
                    //     response['token'] = token;

                    //     res.json({
                    //         ...response
                    //     })
                    // });

                } else {
                    res.json({
                        responseMessage: 'Invalid username or password'
                    })
                }
            });
        }).catch((err) => {
            res.sendStatus(500).statusMessage(err)
        });
});



// AUTHENTICATION


module.exports = router;


