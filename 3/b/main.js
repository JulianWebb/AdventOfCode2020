const fs = require('fs');

const Map = require('./map');
const offsets = require('./offsets.json');

let simulateTravel = async (map, startingCoordinates, offsets) => {
    let sled = {
        x: startingCoordinates[0],
        y: startingCoordinates[1]
    }

    let treeCount = 0;
    do {
        treeCount += map.checkSegement(sled.x, sled.y);
        sled.x += offsets[0];
        sled.y += offsets[1]
    } while (sled.y < map.height);

    return treeCount;
}

fs.readFile('nicola-map', { encoding: 'utf8' }, (error, data) => {
    if (error) throw error;

    let map = new Map(data.split('\n'));
    
    let simulations = [];
    offsets.forEach(offset => {
        simulations.push(simulateTravel(map, [0, 0], [offset.x, offset.y]))
    })

    Promise.all(simulations).then(results => {
        let trees = results.reduce((previous, current) => previous * current, 1);
        console.log(`Trees: ${trees}`);
        process.exit(0);
    })
})