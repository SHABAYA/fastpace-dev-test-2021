const express = require('express')
const router = express.Router();
const app = express()
const port = process.env.PORT || 3000

const usersController = require('./controllers/users.js');
const questionsController = require('./controllers/questions.js');
const answersController = require('./controllers/answers.js')
const question_user_answerController = require('./controllers/question_user_answer.js')

//DB Connection
const dbConnection = require('./src/database/connection.js');
exports.db = dbConnection;
require("./src/bootstrap")();

/*
endpoints 
*/
app.use("/users", usersController);
app.use("/questions", questionsController);
app.use("/answers", answersController);
app.use("/question_user_answer", question_user_answerController);

    /*
    middleware
    */
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));


app.get('/', (req, res) => {
    res.send('you have reached the end of the internet')
})


app.listen(port, () => {
    console.log(`Qst & Ans-api listening on :${port}`)
})