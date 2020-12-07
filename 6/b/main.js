const fs = require('fs');

const Group = require('./group');

fs.readFile('customs-questions', { encoding: 'utf8' }, (error, data) => {
    if (error) return console.error(error);

    let groups = [];
    data.split('\n\n').forEach(answers => {
        groups.push(new Group(answers));
    });

    console.log(`Total Answers: ${groups.reduce((previous, current) => previous + current.answers, 0)}`)
})