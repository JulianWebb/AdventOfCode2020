const fs = require('fs');

fs.readFile('expense-report', { encoding: 'utf8' }, (error, data) => {
    if (error) throw error;
    let entries = data.split(`\n`);
    
    entries.forEach(firstEntry => {
        entries.forEach(secondEntry => {
            entries.forEach(thirdEntry => {
                let entrySum = parseInt(firstEntry) + parseInt(secondEntry) + parseInt(thirdEntry);
                if (entrySum == 2020) {
                    let entryProduct = firstEntry * secondEntry * thirdEntry;
                    console.log(entryProduct);
                    process.exit(0);
                }
            })
        })
    })
})