const fs = require('fs');

const Seat = require("./seats");

fs.readFile('boarding-passes', { encoding: 'utf8' }, (error, data) => {
    if (error) return console.error(error);

    let passes = [];
    data.split('\n').forEach(pass => {
        passes.push(new Seat(pass));
    })

    passes.sort((first, second) => first.id - second.id);

    let seatIDs = [];
    passes.forEach(pass => {
        seatIDs.push(pass.id);
    })
    seatIDs.sort((first, second) => first - second);

    let missingSeats = [];
    for (var i=0; i<1024; i++) {
        if (!seatIDs.includes(i)) {
            missingSeats.push(i);
        }
    }

    console.log(missingSeats);
})