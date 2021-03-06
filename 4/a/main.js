const fs = require('fs');

const Passport = require('./identification');

fs.readFile('passport-validation', { encoding: 'utf8' }, (error, data) => {
    if (error) throw error;

    let passportFields = data.split(`\n\n`);
    let passports = [];
    let fieldRegex = /([^:\s]*:[^:\s]*)/g;
    
    passportFields.forEach(passport => {
        let stringFields = passport.match(fieldRegex);
        let fields = [];
        
        stringFields.forEach(field => {
            let [key, value] = field.split(':');
            fields[key] = value;
        }) 

        passports.push(new Passport(fields));
    })

    console.log(`Valid Passports: ${passports.reduce((previous, current) => previous + current.isHackerValid, 0)}`)
})