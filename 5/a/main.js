const fs = require('fs');

const Seat = require("./seats");

fs.readFile('boarding-passes', { encoding: 'utf8' }, (error, data) => {
    if (error) return console.error(error);

    let passes = [];
    data.split('\n').forEach(pass => {
        passes.push(new Seat(pass));
    })

    passes.sort((first, second) => first.id - second.id);
    console.log(passes[passes.length - 1].id)
})