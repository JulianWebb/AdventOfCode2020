module.exports = class {
    constructor(answers) {
        this.answers = collateAnswers(answers);
    }
}

function collateAnswers(answers) {
    let givenAnswers = 0;
    "abcdefghijklmnopqrstuvwxyz".split("").forEach(question => {
        givenAnswers += answers.includes(question);
    })

    return givenAnswers;
}
