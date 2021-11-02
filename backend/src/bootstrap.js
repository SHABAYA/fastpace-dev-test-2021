module.exports = async() =>{

    const users = require("./models/user");
    const QuestionsModel = require('../src/models/question');
    const AnswersModel = require('../src/models/answers');

    const errHandler = (err) =>{
    console.error("Error: ", err);
    }

    // users.create({
    // id: "thatsmyid",    
    // firstName: "Stephen",
    // lastName: "Lokossou",
    // mobileNumber: "0545024010",
    // email: "lokossoustephen@gmail.com",
    // role: "Admin"
    // }).catch(errHandler);

    //users.findAll();
    //   const users1 = await users.findAll();
    // console.log(users1.every(user => user instanceof users)); // true
    // console.log("All users:", JSON.stringify(users1, null, 2));

    
    // await users.update({ username: "steve" }, {
    //     where: {
    //       id: "1635704375993"
    //     }
    //   });


const { QueryTypes } = require('sequelize');
const questionAndAnswers = await sequelize.query("SELECT q.*, a.* FROM `questions` as q JOIN `answers` as a ON a.questionId = q.id ORDER BY q.id", { type: QueryTypes.SELECT });
console.log(questionAndAnswers)


QuestionsModel.hasMany(AnswersModel, {foreignKey: 'questionId'})
AnswersModel.belongsTo(QuestionsModel, {foreignKey: 'questionId'})

QuestionsModel.find({ where: {}, include: [AnswersModel]})

}

