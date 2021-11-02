const express = require("express");
const QuestionsModel = require('../src/models/question');
const AnswersModel = require('../src/models/answers');
//var db = require('../index')


const errHandler = (err) => {
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
    let id = new Date().getTime();
    QuestionsModel.create({
        id: id,
        qIndex: request['qIndex'],
        text: request['text'],
        typeOfQuestion: request['typeOfQuestion']
    }).catch(errHandler);

    res.status(200)
    res.send('success')

});

router.get('/all', async function (req, res) {
    const questions = await QuestionsModel.findAll();
    var data = {}

    const { QueryTypes } = require('sequelize');
const users = await sequelize.query("SELECT * FROM `users`", { type: QueryTypes.SELECT });
    questions.forEach(question => {
        
    });

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(questions, null, 2));
    res.status(200)
});


router.get('/countAll', async function (req, res) {
    QuestionsModel.count({})
        .then(function (count) {
            console.log(count)
            res.json({
                count: count
            })
        }).catch((err) => {
            res.sendStatus(500).statusMessage(err)
        })
});

router.get('/:id', async function (req, res) {
    const id = req.params.id;
    var data = {}
    var questions = await QuestionsModel.findOne({
        where: {
            id: id
        }
    });

    if (questions) {
        const answers = await AnswersModel.findAll({
            where: {
                questionId: id
            }
        });

        data = {
            ...questions['dataValues'],
            'answers': answers
        }

        //questions['answers'] = answers;

    }
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data, null, 2));
    res.status(200)
});

router.post('/update/:id', async function (req, res) {
    console.log("choice id is " + req.params.id);
    let request = req.body;
    const id = req.params.id;
    await QuestionsModel.update({
        qIndex: request['qIndex'],
        text: request['text'],
        typeOfQuestion: request['typeOfQuestion']
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
    await QuestionsModel.destroy({
        where: {
            id: id
        }
    });
    res.status(200)
    res.send('success')
});


module.exports = router;