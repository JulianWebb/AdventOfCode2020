const fs = require('fs');

let inRange = (minimum, maximum, comparison) => {
    if (minimum <= comparison) {
        if (comparison <= maximum) {
            return true;
        }
    }

    return false;
}

fs.readFile('password-list', { encoding: 'utf8' }, (error, data) => {
    if (error) throw error;

    let validPasswords = 0;

    let entries = data.split(`\n`);
    entries.forEach(entry => {
        
        let minimum     = entry.split('-')[0];
        let maximum     = entry.split(' ')[0].split('-')[1];
        let character   = entry.split(':')[0].slice(-1);
        let password    = entry.split(': ')[1];
        
        let characterCount = Array.from(password.matchAll(character), p => p[0]).length;
        if (inRange(minimum, maximum, characterCount)) { validPasswords += 1; }
    })

    console.log(`Valid Password Count: ${validPasswords}`);
})