const fs = require('fs');

const Map = require('./map');

let xOffset = 3;
let yOffset = 1;

fs.readFile('slope-map', { encoding: 'utf8' }, (error, data) => {
    if (error) throw error;

    let map = new Map(data.split('\n'));
    let sled = {
        x: 0,
        y: 0
    };

    let treeCount = 0;
    do {
        treeCount += map.checkSegement(sled.x, sled.y);
        sled.x += xOffset;
        sled.y += yOffset;
    } while (sled.y < map.height);

    console.log(`Tree count: ${treeCount}`);
    process.exit(0);
})