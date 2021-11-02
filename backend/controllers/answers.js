const express = require("express");
const answers = require("../src/models/answers");
const AnswersModel = require('../src/models/answers');
var jwt = require('jsonwebtoken');


const errHandler = (err) => {
    console.error("Error: ", err);
}

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({
    extended: true
}));


router.post('/add', function (req, res) {
    let request = req.body
    console.log(req.body);

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

    let id = new Date().getTime();
    AnswersModel.create({
        id: id,
        isCorrect: request['isCorrect'],
        text: request['text'],
        questionId: request['questionId']
    }).catch(errHandler);

    res.status(200)
    res.send('success')

});



router.get('/all', async function (req, res) {

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

    const answers = await AnswersModel.findAll();
    res.send(JSON.stringify(answers, null, 2));
    res.status(200)
});


router.get('/:id', async function (req, res) {

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

    const id = req.params.id;
    const answers = await AnswersModel.findOne({
        where: {
            id: id
        }
    });
    res.send(JSON.stringify(answers, null, 2));
    res.status(200)
});



router.post('/update/:id', async function (req, res) {
    console.log("choice id is " + req.params.id);
    let request = req.body;


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

    const id = req.params.id;
    await AnswersModel.update({
        isCorrect: request['isCorrect'],
        text: request['text'],
        questionId: request['questionId']
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

    const id = req.params.id;
    await AnswersModel.destroy({
        where: {
            id: id
        }
    });
    res.status(200)
    res.send('success')
});


module.exports = router;