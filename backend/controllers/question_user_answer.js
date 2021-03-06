const express = require("express");
const question_user_answer = require('../src/models/question_user_answer');
const QuestionUserAnswerModel = require('../src/models/question_user_answer');
var jwt = require('jsonwebtoken');
//var db = require('../index')


const err = (err) => {
    console.error("Error: ", err);
}
const router = express.Router();
/*
middleware
*/
router.use(express.json());
router.use(express.urlencoded({
    extended: true
}));




router.post('/add', function (req, res) {
    let request = req.body
    console.log('request received');

    let token = req.headers.authorization
    console.log('token : ' + token);
    if (!req.headers.authorization) {
        return res.status(403).json({ error: 'No credentials sent!' });
    }
    try {
        var decoded = jwt.verify(token, 'thebestsecretkeyever');
        console.log(decoded['data'])
        let jwtData = decoded['data'];
        if(jwtData['role']!=='Admin'){
            return res.status(403).json({ error: 'Insufficient access.' });
        }
    } catch (err) {
        console.log(err) // bar
        return res.status(403).json({ ...err });
    }

    QuestionUserAnswerModel.create({
        userId: request['userId'],
        answerId: request['answerId'],
        questionId: request['questionId']
    }).then((result) => {
        res.status(200)
        res.send('success')

    })
        .catch((err) => {
            res.status(200)
            res.send('User has already answered this question!')

        })

});




router.post('/delete', async function (req, res) {
    let request = req.body


    let token = req.headers.authorization
    console.log('token : ' + token);
    if (!req.headers.authorization) {
        return res.status(403).json({ error: 'No credentials sent!' });
    }
    try {
        var decoded = jwt.verify(token, 'thebestsecretkeyever');
        console.log(decoded['data'])
        let jwtData = decoded['data'];
        if(jwtData['role']!=='Admin'){
            return res.status(403).json({ error: 'Insufficient access.' });
        }
    } catch (err) {
        console.log(err) // bar
        return res.status(403).json({ ...err });
    }

    await QuestionUserAnswerModel.destroy({
        where: {
            userId: request['userId'],
            answerId: request['answerId'],
            questionId: request['questionId']
        }
    });
    res.status(200)
    res.send('success')
});



router.get('/countAll', async function (req, res) {

    let token = req.headers.authorization
    console.log('token : ' + token);
    if (!req.headers.authorization) {
        return res.status(403).json({ error: 'No credentials sent!' });
    }
    try {
        var decoded = jwt.verify(token, 'thebestsecretkeyever');
        console.log(decoded['data'])
        let jwtData = decoded['data'];
        if(jwtData['role']!=='Admin'){
            return res.status(403).json({ error: 'Insufficient access.' });
        }
    } catch (err) {
        console.log(err) // bar
        return res.status(403).json({ ...err });
    }

        QuestionUserAnswerModel.count({})
        .then(function (count) {
            console.log(count)
            res.json({
                count: count
            })
        }).catch((err) => {
            res.sendStatus(500).statusMessage(err)
        })
});

router.get('/countByUser/:id', async function (req, res) {

    let token = req.headers.authorization
    console.log('token : ' + token);
    if (!req.headers.authorization) {
        return res.status(403).json({ error: 'No credentials sent!' });
    }
    try {
        var decoded = jwt.verify(token, 'thebestsecretkeyever');
        console.log(decoded['data'])
        let jwtData = decoded['data'];

        const id = req.params.id;
        QuestionUserAnswerModel.count({
            where: {
                userId: id
            }
        })
            .then(function (count) {
                console.log(count)
                res.json({
                    count: count
                })
            }).catch((err) => {
                res.sendStatus(500).statusMessage(err)
            })
    } catch (err) {
        console.log(err) // bar
        return res.status(403).json({ ...err });
    }

   
});


module.exports = router;