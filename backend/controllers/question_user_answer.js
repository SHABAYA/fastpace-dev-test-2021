const express = require("express");
const question_user_answer = require('../src/models/question_user_answer');
const QuestionUserAnswerModel = require('../src/models/question_user_answer');
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
});


module.exports = router;