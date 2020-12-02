const fs = require('fs');

const comparisonValue = 2020;

fs.readFile('expense-report', { encoding: 'utf8' }, (error, data) => {
    if (error) return console.log(error);
    let entries = data.split(`\n`);
    
    entries.forEach(firstEntry => {
        entries.forEach(secondEntry => {
            entries.forEach(thirdEntry => {
                let entrySum = parseInt(firstEntry) + parseInt(secondEntry) + parseInt(thirdEntry);
                if (entrySum == comparisonValue) {
                    let entryProduct = firstEntry * secondEntry * thirdEntry;
                    console.log(entryProduct);
                    process.exit(0);
                }
            })
        })
    })
})