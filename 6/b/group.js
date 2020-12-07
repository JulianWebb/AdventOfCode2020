module.exports = class {
    constructor(answers) {
        this.answers = collateAnswers(answers.split('\n'));
    }
}

function collateAnswers(answersArray) {
    let groupSize = answersArray.length;
    let everyoneAnswers = 0;
    "abcdefghijklmnopqrstuvwxyz".split('').forEach(question => {
        let numAnswer = 0;
        answersArray.forEach(answers => {
            numAnswer += answers.includes(question);
        })

        if (numAnswer == groupSize) { everyoneAnswers += 1; }
    })

    return everyoneAnswers;
}
