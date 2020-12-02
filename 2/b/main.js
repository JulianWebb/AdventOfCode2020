const fs = require('fs');

let validation = (positions, character, password) => {
    let firstValid = password[positions[0]] == character;
    let secondValid = password[positions[1]] == character;

    return firstValid^secondValid;
}


fs.readFile('password-list', { encoding: 'utf8' }, (error, data) => {
    if (error) throw error;

    let validPasswords = 0;

    let entries = data.split(`\n`);
    entries.forEach(entry => {
        
        let position1   = entry.split('-')[0]-1;
        let position2   = entry.split(' ')[0].split('-')[1]-1;
        let character   = entry.split(':')[0].slice(-1);
        let password    = entry.split(': ')[1];
        
        
        if (validation([position1, position2 ], character, password)) { validPasswords += 1; }
    })

    console.log(`Valid Password Count: ${validPasswords}`);
})